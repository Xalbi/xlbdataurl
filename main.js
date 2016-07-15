
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
*/



const utils = require('./utils');

//var testUrl = '/b/ref=s9_acss_bw_ct_HPtoolCT_ct_4_h/278-5992113-1724727?_encoding=UTF8&ie=UTF8&node=1854853031&pf_rd_m=A1X6FK5RDHNB96&pf_rd_s=merchandised-search-7&pf_rd_r=V0FCACEX61RFQPJF9AZ3&pf_rd_t=101&pf_rd_p=660615147&pf_rd_i=590748031'
//var testUrl = 'http://www.2ality.com/2011/04/javascript-converting-any-value-to.html'
var testUrl = 'https://www.amazon.fr/outillage-%C3%A9lectroportatif-quincaillerie-plomberie-%C3%A9lectricit%C3%A9/b/ref=sd_allcat_hi_allhi?ie=UTF8&node=590748031'
var testUrl = '/b/ref=s9/278?_encoding=UTF8&ie=UTF8&node=1854853031&pf_rd_m=A1X6FK5RDHNB96&pf_rd_s=merchandised-search-7'
parsedUrl = utils.parseURL(testUrl)
console.log(parsedUrl);
