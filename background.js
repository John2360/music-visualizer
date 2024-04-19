chrome.action.onClicked.addListener((tab) => {
if (tab.url.includes("https://www.kaleidosync.com/audius")) { // Replace "example.com" with the desired URL
    chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['inject.js']
    });
} else {
    console.log("Extension not allowed on this URL.");
}
});