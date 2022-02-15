import { Component, OnInit } from '@angular/core';
import { File } from "@ionic-native/file/ngx";
import {
  FileTransfer,
  FileTransferObject
} from "@ionic-native/file-transfer/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import {DocumentViewerOptions} from "@ionic-native/document-viewer";
@Component({
  selector: 'app-mawsua-mawaraalfekeh',
  templateUrl: './mawsua-mawaraalfekeh.page.html',
  styleUrls: ['./mawsua-mawaraalfekeh.page.scss'],
})
export class MawsuaMawaraalfekehPage implements OnInit {

  loaderToShow: any;
  public title;
  public link;
  public book = [];
  isLoading = false;
  
  public ac: PdfViewerService = new PdfViewerService(new FileOpener,new FileTransfer,new File,new DocumentViewer,this.platform);

  constructor(public platform: Platform,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {  
    this.title = getXMLDataPDF("title");
    this.link = getXMLDataPDF("link");
    
    this.platform.pause.subscribe(e => {
      this.loadingController.dismiss();
      console.log("pause event is working");
    });

    var i =0;
    for ( i=0; i< this.title.length; i++ ) {
     var onebook =[];
     onebook["title"] = this.title[i];
     onebook["link"] = this.link[i];
     this.book.push(onebook);
    }

  }
  
  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: '... انتظر قليلاً جاري التحميل', 
      backdropDismiss: true
    }).then((res) => {
      res.present();
 
      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });
    this.hideLoader();
  }
 
  hideLoader() {
    if (this.platform.is('ios')){
       setTimeout(() => {
        this.loadingController.dismiss();
     }, 5000);
    }
    else{
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 60000);
  }
}

  ngOnInit() { 
   
  }

}
export class PdfViewerService {
  
   fileTransfer: FileTransferObject;
   loadingController: any;
   constructor(
    private fileOpener: FileOpener,
    private transfer: FileTransfer,
    private file: File,
    private document: DocumentViewer,
    private platform: Platform,
   
  ) {}

  downloadLL(url: string, title: string, link: string) {
    
    this.fileTransfer = this.transfer.create();
    this.fileTransfer
      .download(encodeURI(url), this.file.dataDirectory + title + ".pdf")
      .then(entry => {
        console.log("download complete: " + entry.toURL());
        this.fileOpener
          .open(entry.toURL(), "application/pdf")
          .then(() => console.log("File is opened"))
          .catch(e => console.log("Error opening file", e) );
      });
  }
}

function getXMLDataPDF( itemname:string ) {
  var request = new XMLHttpRequest();

  try {
    request.open('GET', 'assets/mawsuaat-xml/mawsuaa-mawaraalfekeh.xml', false);
    request.send(null); 
  } catch (err) {  
    return '';
  }

  if (request.status === 200 || request.status === 0) { 
    var parser = new DOMParser();
    var doc = parser.parseFromString(request.responseText, "application/xml");
    var books = doc.getElementsByTagName("book");
    var result = [];
    for (var i = 0; i < books.length; i++) {
      var book = books[i];  
      
      result.push(book.getElementsByTagName(itemname)[0].childNodes[0].nodeValue)
    }

    return result;
  }
  
  return '';

}
