// Referência: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage

const getLocalStorage = async (tabs) => {
    // Enviando request para o listener
    const response = await browser.tabs.sendMessage(tabs.pop().id, {
      method: "getLocalStorage"
    });
    
    // Verificando se obteve resposta
    let sizeLocalStorage = 0;
    if (response.data.length > 0) {
        sizeLocalStorage = response.data.length
    } 

    // Mostrando as informações de Local Storage
    document.getElementById("storage-info").appendChild(document.createTextNode("Armazenamento de Dados: " + sizeLocalStorage));

    document.getElementById("storage-risk").appendChild(document.createTextNode(sizeLocalStorage));

  }
  
  browser.tabs.query({ currentWindow: true, active: true }).then(getLocalStorage);