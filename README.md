# Download Images as a Zip file


This library is used to download images in bulk as a zip file. 
You need to specify an array of images to downloa. It will create a zip file for it.



# Installation

This package is distributed via npm:

npm install files-download-zip

# Usage


  const downloadImagesAsZip = require('files-download-zip');
  
  const imgDataArray =  [
      "http://www.bollywoodlife.com/wp-content/uploads/2014/12/shenaz-treasurywala-111214.jpg"
  ];

  const zipFileName = 'imagesZip';

  downloadImagesAsZip.execute(imgDataArray, zipFileName, function() {   // callback function

    alert('Done');
   
  });



