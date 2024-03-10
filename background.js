chrome.runtime.onInstalled.addListener((_reason) => {
  chrome.tabs.create({
    url: 'https://elasticman.me/'
  });
  chrome.runtime.setUninstallURL('https://elasticman.me/')
});

chrome.action.onClicked.addListener((_reason) => {
  chrome.tabs.create({
      url: 'index.html'
  });
});