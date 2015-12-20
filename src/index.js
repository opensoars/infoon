"use strict";

let https = require('https');

let getSource = (url) => {
  return new Promise((resolve, reject) => {
    (url.indexOf('https') !== -1 ? https : http).get(url, (res) => {
      let b = '';
      res.on('data', (c) =>  b += c );
      res.on('end', () => resolve(b) );
    });
  });
}

async function getSourceInfo(url) {
  try {
    let source = await getSource(url);
    console.log('source.length:', source.length);
  }
  catch (e) {
    console.log(e);
  }
}

getSourceInfo('https://google.nl');
