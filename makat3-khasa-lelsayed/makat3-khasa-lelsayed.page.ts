import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-makat3-khasa-lelsayed',
  templateUrl: './makat3-khasa-lelsayed.page.html',
  styleUrls: ['./makat3-khasa-lelsayed.page.scss'],
})
export class Makat3KhasaLelsayedPage implements OnInit {

  private data:any = [];
  public title:any[] = [];
  public content:any[] = [];
  ngOnInit() {

    const url= 'https://strapi.alsader.net/api/makat3-khassas?filters[makat_3_khassa_cat][title][$eq]=makate3-khasa-mp4&populate=*'
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
  constructor(private http: HttpClient,private nativePageTransitions: NativePageTransitions,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController) {
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
