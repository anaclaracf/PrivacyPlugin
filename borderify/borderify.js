function showCookiesForTab(tabs) {
  //get the first tab object in the array
  let tab = tabs.pop();

  // let li_storage = document.createElement("li");
  // var storage_text = document.createTextNode("Storage bytes: ");
  // li_storage.appendChild(storage_text);

  //get all cookies in the domain
  var gettingAllCookies = browser.cookies.getAll({ url: tab.url });
  gettingAllCookies.then((cookies) => {
    //set the header of the panel
    var activeTabUrl = document.getElementById("header-title");
    var text = document.createTextNode("Cookies at: " + tab.title);
    var cookieList = document.getElementById("cookie-list");
    activeTabUrl.appendChild(text);

    let total = 0;
    for (var x in localStorage) {
      total += 1;
    }

    let li_storage = document.createElement("b");
    // let storage = browser.storage.storage.sync.getBytesInUse(null);
    var storage_text = document.createTextNode("Storage bytes: " + total);

    li_storage.appendChild(storage_text);
    cookieList.appendChild(li_storage);

    let li_number = document.createElement("b");
    var number = document.createTextNode(
      "Number of Cookies: " + cookies.length
    );
    // number.document.createElement("b");
    li_number.appendChild(number);
    cookieList.appendChild(li_number);

    if (cookies.length > 0) {
      //add an <li> item with the name and value of the cookie to the list
      for (let cookie of cookies) {
        let li = document.createElement("li");
        let content = document.createTextNode(
          cookie.name + ": " + cookie.value
        );
        li.appendChild(content);
        cookieList.appendChild(li);
      }
    } else {
      let p = document.createElement("p");
      let content = document.createTextNode("No cookies in this tab.");
      let parent = cookieList.parentNode;

      p.appendChild(content);
      parent.appendChild(p);
    }
  });

  // Load existent stats with the storage API.
  var gettingStoredStats = browser.storage.local.get();

  console.log(gettingStoredStats);

  // gettingStoredStats.then((results) => {
  //   // Initialize the saved stats if not yet initialized.
  //   if (!results.stats) {
  //     results = {
  //       host: {},
  //       type: {},
  //     };
  //   }

  //   // Monitor completed navigation events and update
  //   // stats accordingly.
  //   browser.webNavigation.onCommitted.addListener((evt) => {
  //     if (evt.frameId !== 0) {
  //       return;
  //     }

  //     let transitionType = evt.transitionType;
  //     results.type[transitionType] = results.type[transitionType] || 0;
  //     results.type[transitionType]++;

  //     // Persist the updated stats.
  //     browser.storage.local.set(results);
  //   });

  //   browser.webNavigation.onCompleted.addListener(
  //     (evt) => {
  //       // Filter out any sub-frame related navigation event
  //       if (evt.frameId !== 0) {
  //         return;
  //       }

  //       const url = new URL(evt.url);

  //       results.host[url.hostname] = results.host[url.hostname] || 0;
  //       results.host[url.hostname]++;

  //       // Persist the updated stats.
  //       browser.storage.local.set(results);
  //     },
  //     {
  //       url: [{ schemes: ["http", "https"] }],
  //     }
  //   );
  // });
}

// // Load existent stats with the storage API.
// var gettingStoredStats = browser.storage.local.get();

// gettingStoredStats.then((results) => {
//   // Initialize the saved stats if not yet initialized.
//   if (!results.stats) {
//     results = {
//       host: {},
//       type: {},
//     };
//   }

//   // Monitor completed navigation events and update
//   // stats accordingly.
//   browser.webNavigation.onCommitted.addListener((evt) => {
//     if (evt.frameId !== 0) {
//       return;
//     }

//     let transitionType = evt.transitionType;
//     results.type[transitionType] = results.type[transitionType] || 0;
//     results.type[transitionType]++;

//     // Persist the updated stats.
//     browser.storage.local.set(results);
//   });

//   browser.webNavigation.onCompleted.addListener(
//     (evt) => {
//       // Filter out any sub-frame related navigation event
//       if (evt.frameId !== 0) {
//         return;
//       }

//       const url = new URL(evt.url);

//       results.host[url.hostname] = results.host[url.hostname] || 0;
//       results.host[url.hostname]++;

//       // Persist the updated stats.
//       browser.storage.local.set(results);
//     },
//     {
//       url: [{ schemes: ["http", "https"] }],
//     }
//   );
// });

//get active tab to run an callback function.
//it sends to our callback an array of tab objects
function getActiveTab() {
  return browser.tabs.query({ currentWindow: true, active: true });
}
getActiveTab().then(showCookiesForTab);
