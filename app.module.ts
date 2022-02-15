import { PdfViewerService } from "./services/pdf-viewer.service";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { File } from "@ionic-native/file/ngx";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { VideoPlayer , VideoOptions } from '@ionic-native/video-player/ngx';
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import {SlideshowModule} from 'ng-simple-slideshow';
import { IonicSwipeAllModule } from 'ionic-swipe-all';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NativePageTransitions} from '@ionic-native/native-page-transitions/ngx';
import { IonBottomDrawerModule } from 'ion-bottom-drawer';
import { ColorPickerModule } from 'ngx-color-picker';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      // override hammerjs default configuration
      'swipe': { direction: Hammer.DIRECTION_ALL  }
  }
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,IonicStorageModule.forRoot(), IonicModule.forRoot(), AppRoutingModule,SlideshowModule,IonicSwipeAllModule,IonBottomDrawerModule, ColorPickerModule,Ng2SearchPipeModule,HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
    FileOpener,
    File,
    PhotoViewer,
    PdfViewerService,
    YoutubeVideoPlayer,
    VideoPlayer,
    StreamingMedia,BrowserAnimationsModule,
    NativePageTransitions,
    DocumentViewer,
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {


  }
