import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http"; 

@Component({
    selector: 'app-mawaez',
    templateUrl: './mawaez.page.html',
    styleUrls: ['./mawaez.page.scss'],
})
export class MawaezPage implements OnInit {
    private data:any = [];
    public title:any[] = [];
    public content:any[] = [];

    ngOnInit() {
        const url= 'https://strapi.alsader.net/api/mawaez-akhlakyas?filters[mawaez_akhlakya_cat][title][$eq]=mawa3ez-akhlakya-mp3&populate=*'
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

    constructor(private http: HttpClient,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {

        

      
    }

    streamaudio(url: string){
        var options = {
            bgColor: "#000000",
            bgImage: encodeURI('https://alsader.net/wp-content/uploads/2021/04/صورة-مواعظ-أخلاقية.png'),
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

