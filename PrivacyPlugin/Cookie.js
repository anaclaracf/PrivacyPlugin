/* Referência: https://github.com/mdn/webextensions-examples/blob/master/list-cookies/cookies.js
               https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Cookies
*/

function getCookies(tabs) {
  let tab = tabs.pop();

  var getCookiesQuantity = browser.cookies.getAll({ url: tab.url });
  getCookiesQuantity.then((cookies) => {
    // Pegando nome do website
    document
      .getElementById("header-title")
      .appendChild(document.createTextNode("Nome do site: " + tab.title));

    // Pegando a quantidade de cookies
    document
      .getElementById("cookie-info")
      .appendChild(
        document.createTextNode("Quantidade de cookies: " + cookies.length)
      );

    // definindo o risco dos cookies
    var cookie_risk;
    if (cookies.length <= 20) {
      cookie_risk = "Risco de nível baixo em relação aos cookies";
      document.getElementById("cookie-risk").style.color = "green";
    } else if (20 < cookies.length <= 50) {
      cookie_risk = "Risco de nível médio em relação aos cookies";
      document.getElementById("cookie-risk").style.color = "orange";
    } else {
      cookie_risk = "Risco de nível alto em relação aos cookies";
      document.getElementById("cookie-risk").style.color = "red";
    }

    document
      .getElementById("cookie-risk")
      .appendChild(document.createTextNode(cookie_risk));
  });
}

browser.tabs.query({ currentWindow: true, active: true }).then(getCookies);
