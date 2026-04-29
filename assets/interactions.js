// IOTSIM Guide — shared interactive helpers
// All handlers on window so inline onclick="" works with file:// loads.

// ─── Drawers (collapsible sections) ────────────────────────────
window.toggleDrawer = function(el){
  el.parentElement.classList.toggle("open");
};

// ─── Per-page ON/OFF toggles ──────────────────────────────────
window.TOGGLE_TEXT = window.TOGGLE_TEXT || {};
window.setToggle = function(key, val){
  const panel = document.getElementById("toggle-panel-" + key);
  if(!panel) return;
  const btns = document.querySelectorAll('.toggle-btn[data-key="' + key + '"]');
  btns.forEach(b => b.classList.toggle("on", b.dataset.v === val));
  if(TOGGLE_TEXT[key] && TOGGLE_TEXT[key][val]){
    panel.innerHTML = TOGGLE_TEXT[key][val];
  }
};

// ─── Search helpers ────────────────────────────────────────────
window.escapeHtml = function(s){
  return String(s).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
};
window.escapeRegex = function(s){
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

let _searchTimer = null;
window.runSearchDebounced = function(q){
  clearTimeout(_searchTimer);
  _searchTimer = setTimeout(() => {
    if(typeof window.runSearch === "function") window.runSearch(q);
  }, 120);
};
window.clearSearch = function(){
  const el = document.getElementById("search");
  if(el) el.value = "";
  if(typeof window.runSearch === "function") window.runSearch("");
};

// ─── Hash-link clicks (for cross-references) ───────────────────
document.addEventListener("click", e => {
  const a = e.target.closest("a[href^='#']");
  if(!a) return;
  const id = a.getAttribute("href").slice(1);
  if(id && typeof window.go === "function"){
    e.preventDefault();
    window.go(id);
  }
});
