import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { File } from "@ionic-native/file/ngx";
import {
  FileTransfer,
  FileTransferObject
} from "@ionic-native/file-transfer/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import {DocumentViewerOptions} from "@ionic-native/document-viewer";
@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.page.html',
  styleUrls: ['./search-list.page.scss'],
})
export class SearchListPage implements OnInit {
loaderToShow: any;
  isLoading = false;
  private subscription;
  public ac: PdfViewerService = new PdfViewerService(new FileOpener,new FileTransfer,new File,new DocumentViewer,this.platform);
    public title;
    public link;
    public category;
    public voice = [];

    searchClicked: boolean = true;
    searchNotClicked: boolean = false;

    constructor(private nativePageTransitions: NativePageTransitions,private streamingMedia: StreamingMedia,public platform: Platform,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {   }
    ngOnInit() {
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
      setTimeout(() => {
        this.loadingController.dismiss();
      }, 30000);
    }

  generateTopics(){
    this.voice=[];
    this.title = getXMLDataVoice("title");
    this.link = getXMLDataVoice("link");
    this.category= getXMLDataVoice("category");

     var i =0;
     for ( i=0; i< this.title.length; i++ ) {
     var onevoice =[];
     onevoice["title"] = this.title[i];
     onevoice["link"] = this.link[i];
     onevoice["category"] = this.category[i];
     this.voice.push(onevoice);
    }
  }

  getTopics(ev:any){
   this.searchClicked= true;
    this.searchNotClicked= false;
         this.generateTopics();
    let serVal = ev.target.value;
    if(serVal && serVal.trim() !=''){
      this.searchClicked= false;
        this.searchNotClicked= true;
      this.voice=this.voice.filter((voices) => {
        return (voices.title.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
      })
    }

  }
  streamaudio(url: string){
    var options = {
    bgColor: "#000000",
    bgImage: encodeURI('https://alsader.net/wp-content/uploads/2021/04/الدروسnew-.jpg'),
    bgImageScale: "fit", // other valid values: "stretch", "aspectStretch"
    initFullscreen: true, // true is default. iOS only.
    keepAwake: true, // prevents device from sleeping. true is default. Android only.
    successCallback: function() {
      console.log("Player closed without error.");
    },
    errorCallback: function(errMsg) {
      console.log("Error! " + errMsg);
    }
  };
  this.streamingMedia.playAudio(url, options);
            }

    streamvideo(url: string){
        var options: StreamingVideoOptions = {
        successCallback: () => { console.log('Video played') },
          errorCallback: (e) => { console.log('Error streaming') },
              orientation: 'landscape',
          shouldAutoClose: true,
        controls: true
      };

    this.streamingMedia.playVideo(url, options);
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

  function getXMLDataVoice( itemname:string ) {
    var request = new XMLHttpRequest();

    try {
      request.open('GET', 'assets/search-xml/search-all.xml', false);
      request.send(null);
    } catch (err) {
      return '';
    }

    if (request.status === 200 || request.status === 0) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(request.responseText, "application/xml");
      var voices = doc.getElementsByTagName("voice");
      var result = [];
      for (var i = 0; i < voices.length; i++) {
        var voice = voices[i];

       result.push(voice.getElementsByTagName(itemname)[0].childNodes[0].nodeValue)
      }

      return result;
    }

    return '';

  }
