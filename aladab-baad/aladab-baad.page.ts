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
import { Storage } from '@ionic/storage';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import {DocumentViewerOptions} from "@ionic-native/document-viewer";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
@Component({
  selector: 'app-aladab-baad',
  templateUrl: './aladab-baad.page.html',
  styleUrls: ['./aladab-baad.page.scss'],
})
export class AladabBaadPage implements OnInit {

  fileTransferpdf: FileTransferObject;
  forwardshow: boolean = true;
  loaderToShow: any;
  public title;
  public link;
  public book = [];
  isLoading = false;

  public ac: PdfViewerService = new PdfViewerService(new FileOpener,new FileTransfer,new File,new DocumentViewer,this.platform);

  constructor(private transfer: FileTransfer,private fileOpener: FileOpener, private nativePageTransitions: NativePageTransitions,private file: File,private storage: Storage,public platform: Platform,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
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
  moveToPage(pageName) {
    setTimeout( () => {
      let options: NativeTransitionOptions = {
        direction: 'up',
        duration: 400,
      }
      this.nativePageTransitions.flip(options);
      this.router.navigate([pageName]);
    }, 350);

  }

  ionViewWillEnter(){
    this.storage.get('page').then(value => {
      this.storage.remove(value);
    });
    this.storage.set('page', 'aladab-baad');
    this.storage.get('pdfLink12').then(link => {
      if(link){
        this.forwardshow= false;
      }else{
        this.forwardshow= true;
      }
    });
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
  getlink(link:string){
    this.storage.set('pdfLink12', link);
  }
  forwardLink(){
    this.storage.get('pdfLink12').then((link) => {
      this.fileTransferpdf = this.transfer.create();
      this.fileTransferpdf
          .download(link, this.file.dataDirectory + ".pdf")
          .then(entry => {
            console.log("download complete: " + entry.toURL());
            this.fileOpener
                .open(entry.toURL(), "application/pdf")
                .then(() => console.log("File is opened"))
                .catch(e => console.log("Error opening file", e) );
          });
    });
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
    if (this.platform.is('ios')){
          let path = this.file.dataDirectory;
          const transfer = this.transfer.create();
          transfer.download(encodeURI(url),`${path}pdf.pdf`).then(entry => {
            let URLlink = entry.toURL();
this.document.viewDocument(URLlink , 'application/pdf',{});
this.loadingController.dismiss();          })
    }
   else{
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
}

function getXMLDataPDF( itemname:string ) {
  var request = new XMLHttpRequest();

  try {
    request.open('GET', 'assets/mawsuaat-xml/الادب-بعد-الاستشهاد.xml', false);
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
