import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-aldurus-tafser',
  templateUrl: './aldurus-tafser.page.html',
  styleUrls: ['./aldurus-tafser.page.scss'],
})
export class AldurusTafserPage implements OnInit {
    forwardshow: boolean = true;
  public title;
  public link;
  public voice = [];

 ngOnInit() { 

  }
  
  constructor(private storage: Storage,private nativePageTransitions: NativePageTransitions,public navCtrl: NavController,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
  
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
        this.storage.set('page-aldurus', 'aldurus-tafser');

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
    request.open('GET', 'assets/aldurus-mp3/aldurus-tafser-titles.xml', false);
    request.send(null); 
  } catch (err) {  
    return '';
  }

  if (request.status === 200 || request.status === 0) { 
    var parser = new DOMParser();
    var doc = parser.parseFromString(request.responseText, "application/xml");
    var voices = doc.getElementsByTagName("tafsertext");
    var result = [];
    for (var i = 0; i < voices.length; i++) {
      var voice = voices[i];  
      
      result.push(voice.getElementsByTagName(itemname)[0].childNodes[0].nodeValue)
    }
  
    return result;
  }
  
  return '';

}