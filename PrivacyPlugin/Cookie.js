/* Referência: https://github.com/mdn/webextensions-examples/blob/master/list-cookies/cookies.js
               https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Cookies
*/

function getCookies(tabs) {
  let tab = tabs.pop();

  var getCookiesQuantity = browser.cookies.getAll({ url: tab.url });
  getCookiesQuantity.then((cookies) => {
    // Pegando nome do website
    document.getElementById("header-title").appendChild(document.createTextNode("Nome do site: " + tab.title));

    // Pegando a quantidade de cookies
    document.getElementById("cookie-info").appendChild(document.createTextNode("Number of Cookies: " + cookies.length));

    document.getElementById("cookie-risk").appendChild(document.createTextNode(cookies.length*3));
  });
}

browser.tabs.query({ currentWindow: true, active: true }).then(getCookies);
  