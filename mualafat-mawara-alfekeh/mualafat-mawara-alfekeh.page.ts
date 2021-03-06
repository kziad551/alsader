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
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-mualafat-mawara-alfekeh',
  templateUrl: './mualafat-mawara-alfekeh.page.html',
  styleUrls: ['./mualafat-mawara-alfekeh.page.scss'],
})
export class MualafatMawaraAlfekehPage implements OnInit {
    fileTransferpdf: FileTransferObject;
    forwardshow: boolean = true;
   loaderToShow: any;
   private data:any = [];
   public title:any[] = [];
   public content:any[] = [];
   isLoading = false;

   public ac: PdfViewerService = new PdfViewerService(new FileOpener,new FileTransfer,new File,new DocumentViewer,this.platform,this.storage);

   constructor(private http: HttpClient,private document: DocumentViewer,private transfer: FileTransfer,private fileOpener: FileOpener, private file: File,private storage: Storage,private platform: Platform,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
   

     this.platform.pause.subscribe(e => {
       this.loadingController.dismiss();
       console.log("pause event is working");
     });

    

   }

    ionViewWillEnter(){
        this.storage.get('page').then(value => {
            this.storage.remove(value);
        });
        this.storage.set('page', 'mualafat-mawara-alfekeh');
        this.storage.get('pdfLink2').then(link => {
            if(link){
                this.forwardshow= false;
            }else{
                this.forwardshow= true;
            }
        });
    }
    getlink(link:string){
        this.storage.get('pdfLink2').then(value => {
            this.storage.remove(value);
        });
        this.storage.set('pdfLink2', link);
    }
    forwardLink(){
        this.storage.get('pdfLink2').then((link) => {
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

   showLoader() {
     this.loaderToShow = this.loadingController.create({
       message: '... ?????????? ???????????? ???????? ??????????????',
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
    const url= 'https://strapi.alsader.net/api/pdfs?filters[pdf_category][title][$eq]=ma-waraa-al-fokeh&populate=*'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      var i =0;
      for ( i=0; i< this.data.data.length; i++ ) {
       var array =[];
       array["title"] = this.data.data[i].attributes.title;
       array["link"] = this.data.data[i].attributes.link;
       this.content.push(array);      
      }
    })

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
    private storage: Storage

   ) {}

   async downloadLL(url: string, title: string, link: string) {
    await this.storage.clear();
     localStorage.clear();
    if (this.platform.is('ios')){
          let path = this.file.dataDirectory;
          const transfer = this.transfer.create();
          transfer.download(encodeURI(url),`${path}pdf.pdf`).then(entry => {
            let URLlink = entry.toURL();
          this.document.viewDocument(URLlink , 'application/pdf',{});
        })
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

  
