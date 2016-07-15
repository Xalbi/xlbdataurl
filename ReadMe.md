# xlbdataurl
Extract data from url, parse url data to json


## Installation

```console
npm install xlbdataurl
```
## Usage
```console
const utils = require('./utils');
```


## Example:

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


## License
(The MIT License)
