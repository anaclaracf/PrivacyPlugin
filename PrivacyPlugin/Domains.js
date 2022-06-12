// Referência: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs

const getDomains = async (tabs) => {
  // Enviando request para o listener
  const response = await browser.tabs.sendMessage(tabs.pop().id, {
    method: "getDomains",
  });

  // Pegando os Domains
  document
    .getElementById("domains-info")
    .appendChild(
      document.createTextNode(
        "Número de domínios de terceira parte: " + response.data.domainsQuantity
      )
    );

  // Calculando o risco dos domínios
  var domains_risk;
  if (response.data.domainsQuantity <= 100) {
    domains_risk = "Risco de nível baixo em relação aos domínios";
    document.getElementById("domains-risk").style.color = "green";
  } else if (100 < response.data.domainsQuantity <= 400) {
    domains_risk = "Risco de nível médio em relação aos domínios";
    document.getElementById("domains-risk").style.color = "orange";
  } else {
    domains_risk = "Risco de nível alto em relação aos domínios";
    document.getElementById("domains-risk").style.color = "red";
  }

  document
    .getElementById("domains-risk")
    .appendChild(document.createTextNode(domains_risk));
};

browser.tabs.query({ currentWindow: true, active: true }).then(getDomains);
