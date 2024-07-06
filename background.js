function openTab(){
    
    var newTab = chrome.tabs.create({
        url:'https://twitter.com/abhilekh_gautam',
        active:true
    })
}

chrome.action.onClicked.addListener(openTab)