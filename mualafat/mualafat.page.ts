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
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import {DocumentViewerOptions} from "@ionic-native/document-viewer";


@Component({
  selector: 'app-mualafat',
  templateUrl: './mualafat.page.html',
  styleUrls: ['./mualafat.page.scss'],
})


export class MualafatPage implements OnInit {
  loaderToShow: any;
  public title;
  public link;
  public pagelink;
  public book = [];
  count = 0;
  isLoading = false;
  private subscription;
  public ac: PdfViewerService = new PdfViewerService(new FileOpener,new FileTransfer,new File,new DocumentViewer,this.platform);
  forwardshow: boolean = true;
  constructor(private translate: TranslateService,private storage: Storage,private nativePageTransitions: NativePageTransitions,public platform: Platform,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
    translate.setDefaultLang('ar');
    this.platform.pause.subscribe(e => {
      this.loadingController.dismiss();
      console.log("pause event is working");
    });



  }


  forward(){
      this.storage.get('page').then((val) => {
      let options: NativeTransitionOptions = {
        direction: 'up',
        duration: 500,
      }
      this.nativePageTransitions.flip(options);
      this.router.navigate([val]);
      console.log(val);
      });

  }

  ionViewWillEnter(){
    this.storage.get('page').then(value => {
      if(value){
        this.forwardshow= false;
      }else{
        this.forwardshow= true;
      }
    });

    this.subscription = this.platform.backButton.subscribeWithPriority(1,() => {
     this.router.navigateByUrl('/home');
    })

  }
  ionViewWillLeave(){
    this.storage.get('page').then(value => {
      this.storage.remove(value);
    });


    this.subscription.unsubscribe();
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
  searchClicked: boolean = true;
  searchNotClicked: boolean = false;
  searchClickedNoResult: boolean = true;
  topics:string[];

  generateTopics(){
    this.book=[];
    this.title = getXMLDataPDF("title");
    this.link = getXMLDataPDF("link");
    var i =0;
    for ( i=0; i< this.title.length; i++ ) {
     var onebook =[];
     onebook["title"] = this.title[i];
     onebook["link"] = this.link[i];
     this.book.push(onebook);
    }
  }

  getTopics(ev:any){
   this.searchClicked= true;
    this.searchNotClicked= false;
    this.searchClickedNoResult= true;
         this.generateTopics();
    let serVal = ev.target.value;
    if(serVal && serVal.trim() !=''){
      this.searchClicked= false;
        this.searchNotClicked= true;
      this.book=this.book.filter((books) => {
        return (books.title.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
      })
    }

  }

  moveToPage(pageName) {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 500,
    }
    this.nativePageTransitions.flip(options);
    this.router.navigate([pageName]);
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
    request.open('GET', 'assets/search-xml/search-pdfs.xml', false);
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
