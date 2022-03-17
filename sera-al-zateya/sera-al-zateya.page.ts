import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
@Component({
  selector: 'app-sera-al-zateya',
  templateUrl: './sera-al-zateya.page.html',
  styleUrls: ['./sera-al-zateya.page.scss'],
})
export class SeraAlZateyaPage implements OnInit {

  private data:any = [];
  public content:any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const url= 'https://strapi.alsader.net/api/sera-zateya-sayeds'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      var i =0;
      for ( i=0; i< this.data.data.length; i++ ) {
       var array =[];
       array["tanwehTitle"] = this.data.data[i].attributes.tanwehTitle;
       array["tanwehText"] = this.data.data[i].attributes.tanwehText;
       array["NasabuTitle"] = this.data.data[i].attributes.NasabuTitle;
       array["NasabuText"] = this.data.data[i].attributes.NasabuText;
       array["derasatoTitle"] = this.data.data[i].attributes.derasatoTitle;
       array["derasatoText"] = this.data.data[i].attributes.derasatoText;
       array["mualafatoTitle"] = this.data.data[i].attributes.mualafatoTitle;
       array["mualafatoText"] = this.data.data[i].attributes.mualafatoText;
       array["nasatoTitle"] = this.data.data[i].attributes.nasatoTitle;
       array["nasatoText"] = this.data.data[i].attributes.nasatoText;
       this.content.push(array); 
       //console.log(array);     
      }
    }) 

  }

}
