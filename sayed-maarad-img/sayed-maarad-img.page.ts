import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';


@Component({
  selector: 'app-sayed-maarad-img',
  templateUrl: './sayed-maarad-img.page.html',
  styleUrls: ['./sayed-maarad-img.page.scss'],
})
export class SayedMaaradImgPage implements OnInit {

   ngOnInit() {
  }
  public title;
  public link;
  public image = [];
 
 
constructor(private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public navCtrl: NavController,private photoViewer: PhotoViewer) { 
  
   this.title = getXMLDataImage("title");
    this.link = getXMLDataImage("link");

     var i =0;
     for ( i=0; i< this.title.length; i++ ) {
     var oneimage =[];
     oneimage["title"] = this.title[i];
     oneimage["link"] = this.link[i];
     this.image.push(oneimage);
    }
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
function getXMLDataImage( itemname:string ) {
  var request = new XMLHttpRequest();

  try {
    request.open('GET', 'assets/images-xml/sayed-fi-al-maarad.xml', false);
    request.send(null); 
  } catch (err) {  
    return '';
  }

  if (request.status === 200 || request.status === 0) { 
    var parser = new DOMParser();
    var doc = parser.parseFromString(request.responseText, "application/xml");
    var images = doc.getElementsByTagName("image");
    var result = [];
    for (var i = 0; i < images.length; i++) {
      var image = images[i];  
      
      result.push(image.getElementsByTagName(itemname)[0].childNodes[0].nodeValue)
    }
 
    return result;
  }
  
  return '';

}