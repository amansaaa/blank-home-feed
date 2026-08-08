// Applies the on/off state chosen in the popup by flipping an attribute on
// <html>. block.css is the source of truth for what the attribute does;
// this script only ever sets or clears it.

function applyEnabled(enabled) {
  document.documentElement.toggleAttribute("data-yt-ext-disabled", !enabled);
}

chrome.storage.sync.get({ enabled: true }, (result) => {
  applyEnabled(result.enabled);
});

chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === "sync" && "enabled" in changes) {
    applyEnabled(changes.enabled.newValue);
  }
});
