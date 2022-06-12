const getAllDomains = () => {
  const infoType = "link, img, video, audio,script, iframe, source, embed"; 
  
  return {
    domainsQuantity: Array.prototype.map.call(
      document.querySelectorAll(
        infoType
      ),
      (HTMLtag) => { 
        return HTMLtag.src || HTMLtag.href; 
      }
    ).length
  }
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  var requestType = request.method;

  if(requestType == "getDomains") {
    sendResponse({ 
      data: getAllDomains() 
    });
  } else if(requestType == "getLocalStorage") {
    sendResponse({ 
      data: Object.entries(localStorage) 
    });
  } else {
    sendResponse({ 
      data: null 
    });
  }
});