import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-alusul-rajab',
  templateUrl: './alusul-rajab.page.html',
  styleUrls: ['./alusul-rajab.page.scss'],
})
export class AlusulRajabPage implements OnInit {

  public title;
  public link;
  public voice = [];
    forwardshow: boolean = true;
 ngOnInit() { 

  }
  
constructor(private storage: Storage,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
  
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
        this.storage.get('page-aldurus').then(value => {
            this.storage.remove(value);
        });
        this.storage.set('page-aldurus', 'alusul-rajab');
        this.storage.get('alusul-rajab-mp3').then(link => {
            if(link){
                this.forwardshow= false;
            }else{
                this.forwardshow= true;
            }
        });
    }
    getlink(link:string){
        this.storage.set('alusul-rajab-mp3', link);
    }
    forwardLink(){
        this.storage.get('alusul-rajab-mp3').then((link) => {
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
            this.streamingMedia.playAudio(link, options);
        });
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
  
}

function getXMLDataVoice( itemname:string ) {
  var request = new XMLHttpRequest();

  try {
    request.open('GET', 'assets/alusul-14216-mp3/rajab-mp3.xml', false);
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