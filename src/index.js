


import JSZip from 'jszip';
import FileSaver from 'file-saver';
import axios from 'axios';


class JSZipExample {
  
    constructor() {
      
      
    
      
    }

    execute(imgDataArray, zipFileName, callBackSuccess, callBackError) {
      this.zip = new JSZip();
      
     // this.getImageData(imgDataArray).then(({data}) => {
       
        this.imgData = imgDataArray;
        console.log(typeof this.imgData);
        console.log(this.imgData);
        this.createFile();
        this.createFolder();
        this.getAndCreateImages();
        this.render(zipFileName, callBackSuccess, callBackError);
      //});

    }
  
    getImageData(imgDataArray) {
      console.log(imgDataArray);
      return new Promise((resolve) => {
        axios.get(imgDataArray).then((response) => {
         console.log(response);
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            resolve();
          });
      });
  
    }
  
    createFile() {
      
      const fileName = `ReadMe.txt`;
      const content = `Open nodejs command prompt with administrator access.
        run 'npm install'
        then run 'npm run dev'
  
        ****************************
  
        currently I have created an array with 5 images link, you can add 1K, the code will remain the same.
        I am loading the array JSON file via axios.
  
      `;
      this.zip.file(fileName, content);
    }
  
    createFolder() {
      const folderName = `images`;
      this.imgFolder = this.zip.folder(folderName);
  
    }
    getAndCreateImages() {
        this.imgPromiseStack = this.imgData.map((item, i) => {
          const extension = item.substring(item.lastIndexOf('.')+1, item.length);
        
          return new Promise((resolve) => {
            axios.get(item, {
              responseType: 'arraybuffer'
            })
            .then(({data}) => {
              
              this.imgFolder.file(`image${i+1}.${extension}`, data);
              resolve();
              
            }).catch((error) => {
              console.log(error);
              resolve();
            });
                          
          }); 
  
      });
  
    }
  
    render(fileName, callBackSuccess) {
      let zipFileName = fileName || `images.zip`;
      zipFileName = (zipFileName.includes('.zip')) ? zipFileName : `${zipFileName}.zip`;

      Promise.all(this.imgPromiseStack).then(() => { 
        
        this.zip.generateAsync({type:"blob"})
        .then((content) => {
          console.log('Done');
         
          FileSaver.saveAs(content, zipFileName);
          if (typeof callBackSuccess === 'function') {
            callBackSuccess();
          }
          
        });
     
      });
      
          
    }


  
  }
  
  const obj = new JSZipExample();

  const renderImgAsZip = {

    execute: obj.execute

  }
  renderImgAsZip.execute = renderImgAsZip.execute.bind(obj);

export default renderImgAsZip
module.exports = renderImgAsZip // for CommonJS compatibility