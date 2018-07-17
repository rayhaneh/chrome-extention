// Regex-pattern to check URLs against. 
// It matches URLs like: http[s]://[...]stackoverflow.com[...]
var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?stackoverflow\.com/;

// A function to use as callback
function doStuffWithDom(domContent) {
    // console.log('I received the following DOM content:\n' + domContent);
}

// When the browser-action button is clicked...
chrome.runtime.onMessage.addListener(function (tab) {
  // tslint:disable-next-line:no-console
  sendResponse({greeting: 'welcome!'})
  chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
});