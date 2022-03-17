import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http"; 
@Component({
  selector: 'app-lekaat',
  templateUrl: './lekaat.page.html',
  styleUrls: ['./lekaat.page.scss'],
})
export class LekaatPage implements OnInit {
  private datamp3:any = [];
  public contentmp3:any[] = [];
  private datamp4:any = [];
  public contentmp4:any[] = [];

  forwardshow: boolean = true;

 ngOnInit() { 

  const urlmp3= 'https://strapi.alsader.net/api/allekaat-wa-alhewarats?filters[id]=1&filters[id]=2?&filters[id]=3?&filters[id]=4?&filters[id]=5?&filters[id]=6?&filters[id]=7?&filters[id]=8?&filters[id]=9?&filters[id]=10?&filters[id]=11?f&filters[id]=12?filters[lekaat_hewarat_cat][title][$eq]=lika2at-sawtya&populate=*'
  this.http.get(urlmp3).subscribe((res)=>{
    this.datamp3 = res
    var i =0;
    for ( i=0; i< this.datamp3.data.length; i++ ) {
     var array =[];
     array["title"] = this.datamp3.data[i].attributes.title;
     array["link"] = this.datamp3.data[i].attributes.link;
     this.contentmp3.push(array);      
    }
  })

  const urlmp4= 'https://strapi.alsader.net/api/allekaat-wa-alhewarats?filters[id]=13&filters[id]=14?&filters[id]=15?&filters[id]=16?filters[lekaat_hewarat_cat][title][$eq]=lika2at-sawtya&populate=*'
  this.http.get(urlmp4).subscribe((res)=>{
    this.datamp4 = res
    var i =0;
    for ( i=0; i< this.datamp4.data.length; i++ ) {
     var array =[];
     array["title"] = this.datamp4.data[i].attributes.title;
     array["link"] = this.datamp4.data[i].attributes.link;
     this.contentmp4.push(array);      
    }
  })

  }
  
constructor(private http: HttpClient,private storage: Storage,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
  

    
 }
    ionViewWillEnter(){
        this.storage.set('page-lekaat-hewrat', 'lekaat');
        this.storage.get('lekaat-hewarat-mp3').then(link => {
            if(link){
                this.forwardshow= false;
            }else{
                this.forwardshow= true;
            }
        });
    }
    getlink(link:string){
        this.storage.set('lekaat-hewarat-mp3', link);

    }
    forwardLink(){
        this.storage.get('lekaat-hewarat-mp3').then((link) => {
            var options = {
                bgColor: "#000000",
                bgImage: encodeURI('https://alsader.net/wp-content/uploads/2021/04/اللقاءاتnew.jpg'),
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
    bgImage: encodeURI('https://alsader.net/wp-content/uploads/2021/04/اللقاءاتnew.jpg'),
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
      orientation: 'orientation',
      shouldAutoClose: true,
      controls: true
    };
  
    this.streamingMedia.playVideo(url, options);
    }

    moveToPage(pageName) {
      this.router.navigate([pageName]);
     }

}

