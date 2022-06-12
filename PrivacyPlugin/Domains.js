// Referência: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs

const getDomains = async (tabs) => {
  // Enviando request para o listener
  const response = await browser.tabs.sendMessage(tabs.pop().id, {
    method: "getDomains"
  });
  
  // Pegando os Domains
  document.getElementById("domains-info").appendChild(document.createTextNode("Número de domínios de terceira parte: " +  response.data.domainsQuantity));

  document.getElementById("domains-risk").appendChild(document.createTextNode(response.data.domainsQuantity*2));
}

browser.tabs.query({ currentWindow: true, active: true }).then(getDomains);