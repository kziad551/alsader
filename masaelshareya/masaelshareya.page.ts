import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-masaelshareya',
  templateUrl: './masaelshareya.page.html',
  styleUrls: ['./masaelshareya.page.scss'],
})
export class MasaelshareyaPage implements OnInit {
 private data:any = [];
  public title:any[] = [];
  public content:any[] = [];
  showcontent: boolean = true;

   constructor(private http: HttpClient,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public navCtrl: NavController,private photoViewer: PhotoViewer) {
      
 }
    ngOnInit() {
      const url ='https://strapi.alsader.net/api/masael-shareya-images?populate=*'
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
    ionViewWillEnter(){
        let TIME_IN_MS = 2000;
        setTimeout( () => {
            this.showcontent= false;
        }, TIME_IN_MS);
    }
    showPhoto(url:string)
    {
       this.photoViewer.show(url, '', {share: true});
    }
}
// function getXMLDataImage( itemname:string ) {

//   var request = new XMLHttpRequest();

//   try {
//           request.open('GET', 'assets/masaelshareya-xml/masaelshareya.xml', false);
//           request.send(null);
//   } catch (err) {
//     return '';
//   }

//   if (request.status === 200 || request.status === 0) { 
//     var parser = new DOMParser();
//     var doc = parser.parseFromString(request.responseText, "application/xml");
//     var masaael = doc.getElementsByTagName("masala");
//     var result = [];
//     for (var i = 0; i < masaael.length; i++) {
//       var masala = masaael[i];  
    
//        result.push(masala.getElementsByTagName(itemname)[0].childNodes[0].nodeValue)
//     }
 
//     return result;
//   }
  
//   return '';

// }