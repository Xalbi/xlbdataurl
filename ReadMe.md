# xlbdataurl
Extract data from url, parse url data to json  and vice versa.
## Installation
```console
npm install xlbdataurl
```
## Usage
```console
const utils = require('xlbdataurl');
```
## Example:
####  **.parseURL(url)**
```js
var testUrl = '/b/ref=s9/278?_encoding=UTF8&ie=UTF8&node=1854853031&pf_rd_m=A1X6FK5RDHNB96&pf_rd_s=merchandised-search-7'

parsedUrl = utils.parseURL(testUrl)

console.log(parsedUrl);

/**

output:
   { url: '/b/ref=s9/278',
     data:
      { _encoding: 'UTF8',
        ie: 'UTF8',
        node: '1854853031',
        pf_rd_m: 'A1X6FK5RDHNB96',
        pf_rd_s: 'merchandised-search-7' } }
*/
```
####  **.urlQueryString( {url:url, data:data } )**

```js
/**
## Example:
=>input
	{ url: 'http://www.universpharmacie.fr/10_caudalie',
	  data: { p: '2' } }
*/

var urlObject = {
	url: 'http://www.universpharmacie.fr/10_caudalie',
    data: { p: '2' } }

var url = utils.urlQueryString(urlObject)

//  url <=  http://www.universpharmacie.fr/10_caudalie?p=2

```

## License
(The MIT License)
