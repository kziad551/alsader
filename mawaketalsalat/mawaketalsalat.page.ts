import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mawaketalsalat',
  templateUrl: './mawaketalsalat.page.html',
  styleUrls: ['./mawaketalsalat.page.scss'],
})
export class MawaketalsalatPage implements OnInit {
  // private data:any = [];
  // public iframe:any[] = [];
  // public content:any[] = [];
  // public url:any[] = [];


  constructor(public sanitizer: DomSanitizer,private http: HttpClient) {
    
  }

  ngOnInit() {
    // const url ='https://strapi.alsader.net/api/alsalat-time'
    // this.http.get(url).subscribe((res)=>{
    //   this.data = res
      // var i =0;
      // for ( i=0; i< this.data.data.length; i++ ) {
      //  var array =[];
      //  array["iframe"] = this.data.data[i].attributes.iframe;
      //  this.content.push(array);     

      // }
    //   var array =[];
    //   array["iframe"]  = this.data.data.attributes.iframe;
    //   this.content.push(array);
    //   //console.log();
    //   this.url == this.sanitizer.bypassSecurityTrustResourceUrl(this.data.data.attributes.iframe);
  
    // })
    
  }

}
