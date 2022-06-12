// Referência: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs

const getTotalRisk = async (tabs) => {
    var cookie = document.getElementById("cookie-risk");
    // let domains = document.getElementById("domains-risk");
    // let storage = document.getElementById("storage-risk");

    // console.log(domains);
    document.getElementById("risk").appendChild(document.createTextNode(cookie));
}
  
  browser.tabs.query({ currentWindow: true, active: true }).then(getTotalRisk);