import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-aldurus',
  templateUrl: './aldurus.page.html',
  styleUrls: ['./aldurus.page.scss'],
})
export class AldurusPage implements OnInit {
  public title;
  public link;
  public voice = [];
    datatimeout: boolean = true;
    spinnertimeout: boolean = false;
    forwardshow: boolean = true;
  constructor(private storage: Storage,private nativePageTransitions: NativePageTransitions,private streamingMedia: StreamingMedia,public platform: Platform,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {

     }


  ngOnInit() {
  }

  searchClicked: boolean = true;
  searchNotClicked: boolean = false;
  searchClickedNoResult: boolean = true;
  generateTopics(){
  this.voice=[];
  this.title = getXMLDataVoice("title");
  this.link = getXMLDataVoice("link");

   var i =0;
   for ( i=0; i< this.title.length; i++ ) {
   var onevoice =[];
   onevoice["title"] = this.title[i];
   onevoice["link"] = this.link[i];
   this.voice.push(onevoice);
  }
}



    ionViewWillEnter(){
        let TIME_IN_MS = 3000;
        let hideFooterTimeout = setTimeout( () => {
            this.spinnertimeout= true;
            this.datatimeout= false;
        }, TIME_IN_MS);

        this.storage.get('page-aldurus').then(value => {
            if(value){
                this.forwardshow= false;
            }else{
                this.forwardshow= true;
            }
        });
    }

    forward(){
        this.storage.get('page-aldurus').then((val) => {
            let options: NativeTransitionOptions = {
                direction: 'up',
                duration: 500,
            }
            this.nativePageTransitions.flip(options);
            this.router.navigate([val]);
            console.log(val);
        });

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

  moveToPage(pageName) {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 500,
    }
    this.nativePageTransitions.flip(options);
    this.router.navigate([pageName]);
   }

}


function getXMLDataVoice( itemname:string ) {

  var request = new XMLHttpRequest();

  try {

    request.open('GET', 'assets/search-xml/search-adurus-mp3.xml', false);

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
