// Referência: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage

const getLocalStorage = async (tabs) => {
  // Enviando request para o listener
  const response = await browser.tabs.sendMessage(tabs.pop().id, {
    method: "getLocalStorage",
  });

  // Verificando se obteve resposta
  let sizeLocalStorage = 0;
  if (response.data.length > 0) {
    sizeLocalStorage = response.data.length;
  }

  // Mostrando as informações de Local Storage
  document
    .getElementById("storage-info")
    .appendChild(
      document.createTextNode("Armazenamento de Dados: " + sizeLocalStorage)
    );

  // Calculando o risco do storage
  var storage_risk;
  if (sizeLocalStorage <= 15) {
    storage_risk = "Risco de nível baixo em relação aos armazenamento local";
    document.getElementById("storage-risk").style.color = "green";
  } else if (15 < sizeLocalStorage <= 30) {
    storage_risk = "Risco de nível médio em relação aos armazenamento local";
    document.getElementById("storage-risk").style.color = "orange";
  } else {
    storage_risk = "Risco de nível alto em relação aos armazenamento local";
    document.getElementById("storage-risk").style.color = "red";
  }

  document
    .getElementById("storage-risk")
    .appendChild(document.createTextNode(storage_risk));
};

browser.tabs.query({ currentWindow: true, active: true }).then(getLocalStorage);
