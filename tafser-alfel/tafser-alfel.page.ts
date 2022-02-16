import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tafser-alfel',
  templateUrl: './tafser-alfel.page.html',
  styleUrls: ['./tafser-alfel.page.scss'],
})
export class TafserAlfelPage implements OnInit {
     private data:any = [];
   public title:any[] = [];
  public content:any[] = [];
  ngOnInit() { 
         const url ='https://strapi.alsader.net/api/aduruses?filters[adurus_cat][title][$eq]=mohadarat-tafsir-tafsir-a3la&populate=*'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      var i =0;
      for ( i=0; i< this.data.data.length; i++ ) {
       var array =[];
       array["title"] = this.data.data[i].attributes.title;
       array["link"] = this.data.data[i].attributes.link;
       this.content.push(array);
} });
  }
    forwardshow: boolean = true;
constructor(private http: HttpClient,private storage: Storage,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
  
 }

    ionViewWillEnter(){
        this.storage.get('page-aldurus').then(value => {
            this.storage.remove(value);
        });
        this.storage.set('page-aldurus', 'tafser-alfel');
        this.storage.get('tafser-alfel-mp3').then(link => {
            if(link){
                this.forwardshow= false;
            }else{
                this.forwardshow= true;
            }
        });
    }

    forwardLink(){
        this.storage.get('tafser-alfel-mp3').then((link) => {
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
        this.storage.set('tafser-alfel-mp3', url);
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
// function getXMLDataVoice( itemname:string ) {
//     var request = new XMLHttpRequest();

//     try {
//         request.open('GET', 'assets/aldurus-mp3/tafser/tafser-alfel.xml', false);
//         request.send(null);
//     } catch (err) {
//         return '';
//     }

//     if (request.status === 200 || request.status === 0) {
//         var parser = new DOMParser();
//         var doc = parser.parseFromString(request.responseText, "application/xml");
//         var voices = doc.getElementsByTagName("voice");
//         var result = [];
//         for (var i = 0; i < voices.length; i++) {
//             var voice = voices[i];

//             result.push(voice.getElementsByTagName(itemname)[0].childNodes[0].nodeValue)
//         }

//         return result;
//     }

//     return '';

// }


