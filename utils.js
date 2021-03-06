

/**
 * Check if the passed url contains data
 *  return an object {url, data}
 *
 */

exports.parseURL = function(url) {

  if (url && url.indexOf('?') > 0) {
    var dataString = url.split('?')[1]
    var urlString = url.split('?')[0]
    var dataStringParsed = ''

      try {
        var arrayParam = dataString.split("&")
        var strRes = ''
        var resultArray = []

        arrayParam.forEach(function (elm) {
          var arrayElm = elm.split('=')

            if (arrayElm.length > 2) {
              var attr = arrayElm.shift()
              resultArray.push(attr+'":"'+arrayElm.join('='))
            }else {
              resultArray.push(arrayElm.join('":"'))
            }

            dataStringParsed = '{"'+resultArray.join('","')+'"}'
        })
      } catch (e) {
        console.error(e);
        return;
      }

   return {url : urlString, data : JSON.parse(dataStringParsed)}
  }else{
    return {url : url, data : undefined }
  }
};




exports.urlQueryString = function(urlObject) {

  if (urlObject && urlObject.url && urlObject.data) {
    var urlString = urlObject.url

    try {
      var dataString = JSON.stringify(urlObject.data)
      dataString = dataString.split('":"').join('=').split('","').join('&').split('{"')[1].split('"}')[0]
    //  console.log(dataString);
      return urlObject.url+'?'+dataString
    } catch (e) {
      console.log('CANNOT stringify the data '+e);
    }
  }else if (urlObject.url) {
    return  urlObject.url
  }
};
