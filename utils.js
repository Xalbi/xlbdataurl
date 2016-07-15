

/**
 * Check if the passed url contains data
 *  return an object {url, data}
 *
 */

exports.parseURL = function(url) {
  if (url && url.indexOf('?') > 0) {
    var dataString = url.split('?')[1]
    var urlString = url.split('?')[0]
    try {
      var arrayParam = '{"'+dataString.split("&").join('","').split('=').join('":"')+'"}'
    } catch (e) {
      console.error(e);
    }
    return {url : urlString, data : JSON.parse(arrayParam)}
  }else {
    return {url : url, data : undefined }
  }
};
