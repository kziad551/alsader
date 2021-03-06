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
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import {DocumentViewerOptions} from "@ionic-native/document-viewer";
import { HttpClient } from "@angular/common/http"; 
@Component({
  selector: 'app-mawsuat-emam-mahdi',
  templateUrl: './mawsuat-emam-mahdi.page.html',
  styleUrls: ['./mawsuat-emam-mahdi.page.scss'],
})
export class MawsuatEmamMahdiPage implements OnInit {

    fileTransferpdf: FileTransferObject;
    forwardshow: boolean = true;
    loaderToShow: any;
    private data:any = [];
    public title:any[] = [];
    public content:any[] = [];
    isLoading = false;

    public ac: PdfViewerService = new PdfViewerService(new FileOpener,new FileTransfer,new File,new DocumentViewer,this.platform);

    constructor(private http: HttpClient,private transfer: FileTransfer,private fileOpener: FileOpener, private file: File,private storage: Storage,private nativePageTransitions: NativePageTransitions,public platform: Platform,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
      

      this.platform.pause.subscribe(e => {
        this.loadingController.dismiss();
        console.log("pause event is working");
      });


    }

    ionViewWillEnter(){
        this.storage.get('page').then(value => {
            this.storage.remove(value);
        });
        this.storage.set('page', 'mawsuat-emam-mahdi');
        this.storage.get('pdfLink10').then(link => {
            if(link){
                this.forwardshow= false;
            }else{
                this.forwardshow= true;
            }
        });
    }
    getlink(link:string){
        this.storage.get('pdfLink10').then(value => {
            this.storage.remove(value);
        });
        this.storage.set('pdfLink10', link);
    }
    forwardLink(){
        this.storage.get('pdfLink10').then((link) => {
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
      setTimeout(() => {
        this.loadingController.dismiss();
      }, 30000);
    }

    ngOnInit() {
      const url= 'https://strapi.alsader.net/api/pdfs?filters[pdf_category][title][$eq]=mawsouaa-imam-mahdi&populate=*'
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

  }
  export class PdfViewerService {

    fileTransfer: FileTransferObject;
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

  