function onCreated(n) {
  if (browser.runtime.lastError)
    console.log(`Error: ${browser.runtime.lastError}`);
}

function onError(error) { console.log(`Error: ${error}`); }

browser.contextMenus.create({
  id: "translate-selection",
  title: browser.i18n.getMessage("contextMenuItemSelection"),
  contexts: ["selection"]
}, onCreated);

browser.contextMenus.onClicked.addListener(
  function(info, tab) {
    if (info.menuItemId == "translate-selection")
      translateToMe(info);
  }
);

function translateToMe(info)
{
  var URL = 'http://www.linguee.com.br/search?source=auto&query='+info.selectionText;
  chrome.tabs.create({url: URL});
}
