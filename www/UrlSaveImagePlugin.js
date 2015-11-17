/**
 * UrlSaveImagePlugin.js
 */

module.exports = {
    
    saveImage:function(url, successCallback, failureCallback) {

        if (typeof successCallback != "function") {

            console.log("UrlSaveImagePlugin Error: successCallback is not a function");

        } else if (typeof failureCallback != "function") {
          
            console.log("UrlSaveImagePlugin Error: failureCallback is not a function");

        } else {
           	var device = new Device(); 
			console.log(device.getPlatform());
            return cordova.exec(successCallback, failureCallback, "UrlSaveImagePlugin", "saveImage", [url]);

        }
    }
};
