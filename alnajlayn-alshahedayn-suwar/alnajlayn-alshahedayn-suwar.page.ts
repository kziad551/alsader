import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { HttpClient } from "@angular/common/http"; 
@Component({
  selector: 'app-alnajlayn-alshahedayn-suwar',
  templateUrl: './alnajlayn-alshahedayn-suwar.page.html',
  styleUrls: ['./alnajlayn-alshahedayn-suwar.page.scss'],
})
export class AlnajlaynAlshahedaynSuwarPage implements OnInit {
  private data:any = [];
  public content:any[] = [];
  constructor(
    private http: HttpClient,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public navCtrl: NavController,private photoViewer: PhotoViewer) { 
    }

  ngOnInit() {
    const url= 'https://strapi.alsader.net/api/alnajlayen-images'
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
  

  
showPhoto(url:string){
    var options = {
      share: true, 
      closeButton: true, 
      copyToReference: true 
    };
      url = decodeURIComponent(url);
      this.photoViewer.show(url, '', options);
  }
}
