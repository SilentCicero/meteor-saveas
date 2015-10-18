# Meteor SaveAs
A simple package for providing a browser-based saveAs function for Meteor apps. 

## Installation

    # meteor add silentcicero:saveas

## Usage

Note, the `saveAs` method is made a global window variable.

```
var aFileParts = ["<h3>My html file</h3>"];
var oMyBlob = new Blob(aFileParts, {type : 'text/html'}); 
saveAs(oMyBlob, "someHTMLfile.html");
```
