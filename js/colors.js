'use strict';

const SUCCESSFUL_STATE = 4;
const SUCCESSFUL_STATUS = 200;

function loadColors() {
  return new Promise((resolve, reject) => {
    const url = "http://colormind.io/api/";
    const data = {
      model : "default",
    };

    const http = new XMLHttpRequest();

    http.onreadystatechange = function() {
      if(http.readyState == SUCCESSFUL_STATE && http.status == SUCCESSFUL_STATUS) {
        resolve(JSON.parse(http.responseText).result);
      } else if (http.readyState == SUCCESSFUL_STATE) {
        reject('Failed to load colors');
      }
    };

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
  });
}