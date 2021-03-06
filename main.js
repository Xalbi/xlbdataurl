
/**

## Example:
=>input:  /b/ref=s9_acss_bw_ct_HPtoolCT_ct_4_h/278-5992113-1724727?_encoding=UTF8&ie=UTF8&node=1854853031&pf_rd_m=A1X6FK5RDHNB96&pf_rd_s=merchandised-search-7&pf_rd_r=V0FCACEX61RFQPJF9AZ3&pf_rd_t=101&pf_rd_p=660615147&pf_rd_i=590748031
<=output:
   { url: '/b/ref=s9_acss_bw_ct_HPtoolCT_ct_4_h/278-5992113-1724727',
     data:
      { _encoding: 'UTF8',
        ie: 'UTF8',
        node: '1854853031',
        pf_rd_m: 'A1X6FK5RDHNB96',
        pf_rd_s: 'merchandised-search-7',
        pf_rd_r: 'V0FCACEX61RFQPJF9AZ3',
        pf_rd_t: '101',
        pf_rd_p: '660615147',
        pf_rd_i: '590748031' } }

## Example:
=>input
  {   url: 'http://www.universpharmacie.fr/10_caudalie',
    data: { p: '2' } }

<=output:  http://www.universpharmacie.fr/10_caudalie?p=2


*/



const utils = require('./utils');

//var testUrl = '/b/ref=s9_acss_bw_ct_HPtoolCT_ct_4_h/278-5992113-1724727?_encoding=UTF8&ie=UTF8&node=1854853031&pf_rd_m=A1X6FK5RDHNB96&pf_rd_s=merchandised-search-7&pf_rd_r=V0FCACEX61RFQPJF9AZ3&pf_rd_t=101&pf_rd_p=660615147&pf_rd_i=590748031'
//var testUrl = 'http://www.2ality.com/2011/04/javascript-converting-any-value-to.html'
var testUrl = 'https://www.amazon.fr/outillage-%C3%A9lectroportatif-quincaillerie-plomberie-%C3%A9lectricit%C3%A9/b/ref=sd_allcat_hi_allhi?ie=UTF8&node=590748031'
var testUrl = '/b/ref=s9/278?_encoding=UTF8&ie=UTF8&node=1854853031&pf_rd_m=A1X6FK5RDHNB96&pf_rd_s=merchandised-search-7'
//var testUrl = 'https://amazon.fr/errors/validateCaptcha?amzn=4wtEEGonEc5XlC/mw31B9w==&amzn-r=/&field-keywords=FFYJCR'
var testUrl = 'https://www.amazon.fr/s/ref=s9_acss_bw_ct_HPtoolCT_ct_1_h?__mk_fr_FR=%C5M%C5Z%D5%D1&rh=i:diy,n:1794242031&ie=UTF8&pf_rd_m=A1X6FK5RDHNB96&pf_rd_s=merchandised-search-7&pf_rd_r=7XYFMH51TEJF5MZNZTZV&pf_rd_t=101&x'


function cleanURL(url) {

  if (url.lastIndexOf('&') > url.lastIndexOf('=')) {
    url = url.split('&')
    cutted = url.pop()
    url = url.join('&')
  }
  return url
}
/*
parsedUrl = utils.parseURL(cleanURL(testUrl))
console.log(parsedUrl);

urlObject = {
    url: 'https://www.amazon.fr/s/ref=sr_pg_400',
    data:
      {rh: 'n:590748031,n:!590749031,n:1716189031,n:1794242031',
      page: '400',
      ie: 'UTF8',
      qid: '1469433459',
      spIA: 'B01CJQDLH6,B011NZG1Y4,B00WHQ5W12,B000U3J4UO,B01HFWLLBW,B01D44M38U,B01C5BML44,B01HCSO3JQ,B01EY8KU5S,B01GERN824,B00MYAZ34C,B01GESMIT2,B011PW1GEU,B00MJ2GVO6,B01FX2QEQI' }}

url = utils.urlQueryString(urlObject)
console.log(url);
*/


console.log('[###[BEGIN]###]');
console.log('input : http://www.universpharmacie.fr/10_caudalie?p=2');

parsedUrl = utils.parseURL(cleanURL('http://www.universpharmacie.fr/10_caudalie?p=2'))
console.log('parsedUrl :');console.log(parsedUrl);
console.log('urlQueryString :'+utils.urlQueryString(parsedUrl));
console.log('[###[END]###]');
