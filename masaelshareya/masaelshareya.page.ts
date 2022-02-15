import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-masaelshareya',
  templateUrl: './masaelshareya.page.html',
  styleUrls: ['./masaelshareya.page.scss'],
})
export class MasaelshareyaPage implements OnInit {
  public title;
  public link;
  public image = [];
  showcontent: boolean = true;

   constructor(private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public navCtrl: NavController,private photoViewer: PhotoViewer) {
       setTimeout( () => {
     this.title = getXMLDataImage("title");
     this.link = getXMLDataImage("link");
     var i =0;
     for ( i=0; i< this.title.length; i++ ) {
     var oneimage =[];
     oneimage["title"] = this.title[i];
     oneimage["link"] = this.link[i];
     this.image.push(oneimage);
    }
       }, 2000);
 }
    ngOnInit() {
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
function getXMLDataImage( itemname:string ) {

  var request = new XMLHttpRequest();

  try {
          request.open('GET', 'assets/masaelshareya-xml/masaelshareya.xml', false);
          request.send(null);
  } catch (err) {
    return '';
  }

  if (request.status === 200 || request.status === 0) { 
    var parser = new DOMParser();
    var doc = parser.parseFromString(request.responseText, "application/xml");
    var masaael = doc.getElementsByTagName("masala");
    var result = [];
    for (var i = 0; i < masaael.length; i++) {
      var masala = masaael[i];  
    
       result.push(masala.getElementsByTagName(itemname)[0].childNodes[0].nodeValue)
    }
 
    return result;
  }
  
  return '';

}