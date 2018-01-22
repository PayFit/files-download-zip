# Download Images as a Zip file


This library  can be used to download images as a zip file. 
You need to specify images to download in an array.

Example Code:

  var imgDataArray =  [
     
  "http://www.bollywoodlife.com/wp-content/uploads/2014/12/shenaz-treasurywala-111214.jpg"
   
  ];

  var zipFileName = 'imagesZip';

   downloadImagesAsZip.execute(imgDataArray, zipFileName, function() {

    alert('Done');
   
  });



# Installation

This package is distributed via npm:

npm install bollywood-names

# Usage

var names = require('bollywood-names')

var characterName = names.random()

var allNames = names.all()

var twoNames = names.random(2)



