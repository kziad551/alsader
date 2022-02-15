import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home-note', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'mualafat', loadChildren: './mualafat/mualafat.module#MualafatPageModule' },
  { path: 'mareyat', loadChildren: './mareyat/mareyat.module#MareyatPageModule' },
  { path: 'sawteyat', loadChildren: './sawteyat/sawteyat.module#SawteyatPageModule' },
  { path: 'masaelshareya', loadChildren: './masaelshareya/masaelshareya.module#MasaelshareyaPageModule' },
  { path: 'arshefketabe', loadChildren: './arshefketabe/arshefketabe.module#ArshefketabePageModule' },
  { path: 'khotabalsayed', loadChildren: './khotabalsayed/khotabalsayed.module#KhotabalsayedPageModule' },
  { path: 'suwar', loadChildren: './suwar/suwar.module#SuwarPageModule' },
  { path: 'alusul', loadChildren: './alusul/alusul.module#AlusulPageModule' },
  { path: 'aldurus', loadChildren: './aldurus/aldurus.module#AldurusPageModule' },
  { path: 'mawaez', loadChildren: './mawaez/mawaez.module#MawaezPageModule' },
  { path: 'lekaat', loadChildren: './lekaat/lekaat.module#LekaatPageModule' },
  { path: 'lekaatmareya', loadChildren: './lekaatmareya/lekaatmareya.module#LekaatmareyaPageModule' },
  { path: 'wasaekyat', loadChildren: './wasaekyat/wasaekyat.module#WasaekyatPageModule' },
  { path: 'sayed-barani-img', loadChildren: './sayed-barani-img/sayed-barani-img.module#SayedBaraniImgPageModule' },
  { path: 'sayed-maarad-img', loadChildren: './sayed-maarad-img/sayed-maarad-img.module#SayedMaaradImgPageModule' },
  { path: 'sayed-tufula-img', loadChildren: './sayed-tufula-img/sayed-tufula-img.module#SayedTufulaImgPageModule' },
  { path: 'sayed-masjedkufa-img', loadChildren: './sayed-masjedkufa-img/sayed-masjedkufa-img.module#SayedMasjedkufaImgPageModule' },
  { path: 'sayed-maawlado-img', loadChildren: './sayed-maawlado-img/sayed-maawlado-img.module#SayedMaawladoImgPageModule' },
  { path: 'sayed-majamaher-img', loadChildren: './sayed-majamaher-img/sayed-majamaher-img.module#SayedMajamaherImgPageModule' },
  { path: 'sayed-maashahedawal-img', loadChildren: './sayed-maashahedawal-img/sayed-maashahedawal-img.module#SayedMaashahedawalImgPageModule' },
  { path: 'sayed-mashakhsyat-img', loadChildren: './sayed-mashakhsyat-img/sayed-mashakhsyat-img.module#SayedMashakhsyatImgPageModule' },
  { path: 'sayed-matalabateh-img', loadChildren: './sayed-matalabateh-img/sayed-matalabateh-img.module#SayedMatalabatehImgPageModule' },
  { path: 'sayed-mawaladeh-img', loadChildren: './sayed-mawaladeh-img/sayed-mawaladeh-img.module#SayedMawaladehImgPageModule' },
  { path: 'sayed-marhalederasa-img', loadChildren: './sayed-marhalederasa-img/sayed-marhalederasa-img.module#SayedMarhalederasaImgPageModule' },
  { path: 'sayed-munfareda-img', loadChildren: './sayed-munfareda-img/sayed-munfareda-img.module#SayedMunfaredaImgPageModule' },
  { path: 'sayed-salatjmaa-img', loadChildren: './sayed-salatjmaa-img/sayed-salatjmaa-img.module#SayedSalatjmaaImgPageModule' },
  { path: 'mawaketalsalat', loadChildren: './mawaketalsalat/mawaketalsalat.module#MawaketalsalatPageModule' },
  { path: 'khotabmaktuba', loadChildren: './khotabmaktuba/khotabmaktuba.module#KhotabmaktubaPageModule' },
  { path: 'khotabjmaa1', loadChildren: './khotabjmaa1/khotabjmaa1.module#Khotabjmaa1PageModule' },
  { path: 'khotabjmaa2', loadChildren: './khotabjmaa2/khotabjmaa2.module#Khotabjmaa2PageModule' },
  { path: 'khotabjmaa3', loadChildren: './khotabjmaa3/khotabjmaa3.module#Khotabjmaa3PageModule' },
  { path: 'khotabjmaa4', loadChildren: './khotabjmaa4/khotabjmaa4.module#Khotabjmaa4PageModule' },
  { path: 'khotabjmaa5', loadChildren: './khotabjmaa5/khotabjmaa5.module#Khotabjmaa5PageModule' },
  { path: 'khotabjmaa6', loadChildren: './khotabjmaa6/khotabjmaa6.module#Khotabjmaa6PageModule' },
  { path: 'khotabjmaa7', loadChildren: './khotabjmaa7/khotabjmaa7.module#Khotabjmaa7PageModule' },
  { path: 'khotabjmaa8', loadChildren: './khotabjmaa8/khotabjmaa8.module#Khotabjmaa8PageModule' },
  { path: 'khotabjmaa9', loadChildren: './khotabjmaa9/khotabjmaa9.module#Khotabjmaa9PageModule' },
  { path: 'khotabjmaa10', loadChildren: './khotabjmaa10/khotabjmaa10.module#Khotabjmaa10PageModule' },
  { path: 'khotabjmaa11', loadChildren: './khotabjmaa11/khotabjmaa11.module#Khotabjmaa11PageModule' },
  { path: 'khotabjmaa12', loadChildren: './khotabjmaa12/khotabjmaa12.module#Khotabjmaa12PageModule' },
  { path: 'khotabjmaa13', loadChildren: './khotabjmaa13/khotabjmaa13.module#Khotabjmaa13PageModule' },
  { path: 'khotabjmaa14', loadChildren: './khotabjmaa14/khotabjmaa14.module#Khotabjmaa14PageModule' },
  { path: 'khotabjmaa15', loadChildren: './khotabjmaa15/khotabjmaa15.module#Khotabjmaa15PageModule' },
  { path: 'khotabjmaa16', loadChildren: './khotabjmaa16/khotabjmaa16.module#Khotabjmaa16PageModule' },
  { path: 'khotabjmaa17', loadChildren: './khotabjmaa17/khotabjmaa17.module#Khotabjmaa17PageModule' },
  { path: 'khotabjmaa18', loadChildren: './khotabjmaa18/khotabjmaa18.module#Khotabjmaa18PageModule' },
  { path: 'khotabjmaa19', loadChildren: './khotabjmaa19/khotabjmaa19.module#Khotabjmaa19PageModule' },
  { path: 'khotabjmaa20', loadChildren: './khotabjmaa20/khotabjmaa20.module#Khotabjmaa20PageModule' },
  { path: 'khotabjmaa21', loadChildren: './khotabjmaa21/khotabjmaa21.module#Khotabjmaa21PageModule' },
  { path: 'khotabjmaa22', loadChildren: './khotabjmaa22/khotabjmaa22.module#Khotabjmaa22PageModule' },
  { path: 'khotabjmaa23', loadChildren: './khotabjmaa23/khotabjmaa23.module#Khotabjmaa23PageModule' },
  { path: 'khotabjmaa24', loadChildren: './khotabjmaa24/khotabjmaa24.module#Khotabjmaa24PageModule' },
  { path: 'khotabjmaa25', loadChildren: './khotabjmaa25/khotabjmaa25.module#Khotabjmaa25PageModule' },
  { path: 'khotabjmaa26', loadChildren: './khotabjmaa26/khotabjmaa26.module#Khotabjmaa26PageModule' },
  { path: 'khotabjmaa27', loadChildren: './khotabjmaa27/khotabjmaa27.module#Khotabjmaa27PageModule' },
  { path: 'khotabjmaa28', loadChildren: './khotabjmaa28/khotabjmaa28.module#Khotabjmaa28PageModule' },
  { path: 'khotabjmaa29', loadChildren: './khotabjmaa29/khotabjmaa29.module#Khotabjmaa29PageModule' },
  { path: 'khotabjmaa30', loadChildren: './khotabjmaa30/khotabjmaa30.module#Khotabjmaa30PageModule' },
  { path: 'khotabjmaa31', loadChildren: './khotabjmaa31/khotabjmaa31.module#Khotabjmaa31PageModule' },
  { path: 'khotabjmaa32', loadChildren: './khotabjmaa32/khotabjmaa32.module#Khotabjmaa32PageModule' },
  { path: 'khotabjmaa33', loadChildren: './khotabjmaa33/khotabjmaa33.module#Khotabjmaa33PageModule' },
  { path: 'khotabjmaa34', loadChildren: './khotabjmaa34/khotabjmaa34.module#Khotabjmaa34PageModule' },
  { path: 'khotabjmaa35', loadChildren: './khotabjmaa35/khotabjmaa35.module#Khotabjmaa35PageModule' },
  { path: 'khotabjmaa36', loadChildren: './khotabjmaa36/khotabjmaa36.module#Khotabjmaa36PageModule' },
  { path: 'khotabjmaa37', loadChildren: './khotabjmaa37/khotabjmaa37.module#Khotabjmaa37PageModule' },
  { path: 'khotabjmaa38', loadChildren: './khotabjmaa38/khotabjmaa38.module#Khotabjmaa38PageModule' },
  { path: 'khotabjmaa39', loadChildren: './khotabjmaa39/khotabjmaa39.module#Khotabjmaa39PageModule' },
  { path: 'khotabjmaa40', loadChildren: './khotabjmaa40/khotabjmaa40.module#Khotabjmaa40PageModule' },
  { path: 'khotabjmaa41', loadChildren: './khotabjmaa41/khotabjmaa41.module#Khotabjmaa41PageModule' },
  { path: 'khotabjmaa42', loadChildren: './khotabjmaa42/khotabjmaa42.module#Khotabjmaa42PageModule' },
  { path: 'khotabjmaa43', loadChildren: './khotabjmaa43/khotabjmaa43.module#Khotabjmaa43PageModule' },
  { path: 'khotabjmaa44', loadChildren: './khotabjmaa44/khotabjmaa44.module#Khotabjmaa44PageModule' },
  { path: 'khotabjmaa45', loadChildren: './khotabjmaa45/khotabjmaa45.module#Khotabjmaa45PageModule' },
  { path: 'mawaezmaktuba', loadChildren: './mawaezmaktuba/mawaezmaktuba.module#MawaezmaktubaPageModule' },
  { path: 'hewar1', loadChildren: './hewar1/hewar1.module#Hewar1PageModule' },
  { path: 'hewar2', loadChildren: './hewar2/hewar2.module#Hewar2PageModule' },
  { path: 'hewar3', loadChildren: './hewar3/hewar3.module#Hewar3PageModule' },
  { path: 'hewar4', loadChildren: './hewar4/hewar4.module#Hewar4PageModule' },
  { path: 'hewar5', loadChildren: './hewar5/hewar5.module#Hewar5PageModule' },
  { path: 'hewar6', loadChildren: './hewar6/hewar6.module#Hewar6PageModule' },
  { path: 'hewar7', loadChildren: './hewar7/hewar7.module#Hewar7PageModule' },
  { path: 'mawezahawaejalnas', loadChildren: './mawezahawaejalnas/mawezahawaejalnas.module#MawezahawaejalnasPageModule' },
  { path: 'lekaaemtjmaa', loadChildren: './lekaaemtjmaa/lekaaemtjmaa.module#LekaaemtjmaaPageModule' },
  { path: 'lekaaldaraji', loadChildren: './lekaaldaraji/lekaaldaraji.module#LekaaldarajiPageModule' },
  { path: 'lekamajltalhuda', loadChildren: './lekamajltalhuda/lekamajltalhuda.module#LekamajltalhudaPageModule' },
  { path: 'mawezahawlaleid', loadChildren: './mawezahawlaleid/mawezahawlaleid.module#MawezahawlaleidPageModule' },
  { path: 'mawezahawltaatallah', loadChildren: './mawezahawltaatallah/mawezahawltaatallah.module#MawezahawltaatallahPageModule' },
  { path: 'mawezahawldares', loadChildren: './mawezahawldares/mawezahawldares.module#MawezahawldaresPageModule' },
  { path: 'muhadarahawlalmaweza', loadChildren: './muhadarahawlalmaweza/muhadarahawlalmaweza.module#MuhadarahawlalmawezaPageModule' },
  { path: 'mayezataluma', loadChildren: './mayezataluma/mayezataluma.module#MayezatalumaPageModule' },
  { path: 'tafseralmaeda', loadChildren: './tafseralmaeda/tafseralmaeda.module#TafseralmaedaPageModule' },
  { path: 'tafserzeyartamenallah', loadChildren: './tafserzeyartamenallah/tafserzeyartamenallah.module#TafserzeyartamenallahPageModule' },
  { path: 'bahezhawlalshytan', loadChildren: './bahezhawlalshytan/bahezhawlalshytan.module#BahezhawlalshytanPageModule' },
  { path: 'duaaalsameten', loadChildren: './duaaalsameten/duaaalsameten.module#DuaaalsametenPageModule' },
  { path: 'doofalensanamamalshahawat', loadChildren: './doofalensanamamalshahawat/doofalensanamamalshahawat.module#DoofalensanamamalshahawatPageModule' },
  { path: 'home2', loadChildren: './home2/home2.module#Home2PageModule' },
  { path: 'mawsua-mawaraalfekeh', loadChildren: './mawsua-mawaraalfekeh/mawsua-mawaraalfekeh.module#MawsuaMawaraalfekehPageModule' },
  { path: 'mawsua-alghybat', loadChildren: './mawsua-alghybat/mawsua-alghybat.module#MawsuaAlghybatPageModule' },
  { path: 'mawsua-nazrat', loadChildren: './mawsua-nazrat/mawsua-nazrat.module#MawsuaNazratPageModule' },
  { path: 'mawsua-masael', loadChildren: './mawsua-masael/mawsua-masael.module#MawsuaMasaelPageModule' },
  { path: 'mawsua-alfekeh', loadChildren: './mawsua-alfekeh/mawsua-alfekeh.module#MawsuaAlfekehPageModule' },
  { path: 'mawsua-bu7us', loadChildren: './mawsua-bu7us/mawsua-bu7us.module#MawsuaBu7usPageModule' },
  { path: 'mawsua-tahara', loadChildren: './mawsua-tahara/mawsua-tahara.module#MawsuaTaharaPageModule' },
  { path: 'mawsua-sale7en', loadChildren: './mawsua-sale7en/mawsua-sale7en.module#MawsuaSale7enPageModule' },
  { path: 'mawsua-manhajusul', loadChildren: './mawsua-manhajusul/mawsua-manhajusul.module#MawsuaManhajusulPageModule' },
  { path: 'mawsua-menatmenan', loadChildren: './mawsua-menatmenan/mawsua-menatmenan.module#MawsuaMenatmenanPageModule' },
  { path: 'mawsua-fekehakhlak', loadChildren: './mawsua-fekehakhlak/mawsua-fekehakhlak.module#MawsuaFekehakhlakPageModule' },
  { path: 'mawsua-takrer3lmusul', loadChildren: './mawsua-takrer3lmusul/mawsua-takrer3lmusul.module#MawsuaTakrer3lmusulPageModule' },
  { path: 'mawsua-fatawa', loadChildren: './mawsua-fatawa/mawsua-fatawa.module#MawsuaFatawaPageModule' },
  { path: 'mawsua-ketablelbay3', loadChildren: './mawsua-ketablelbay3/mawsua-ketablelbay3.module#MawsuaKetablelbay3PageModule' },
  { path: 'mawsuaa-munawa3a', loadChildren: './mawsuaa-munawa3a/mawsuaa-munawa3a.module#MawsuaaMunawa3aPageModule' },
  { path: 'kabel-baed-esteshhad', loadChildren: './kabel-baed-esteshhad/kabel-baed-esteshhad.module#KabelBaedEsteshhadPageModule' },
  { path: 'adeyat-aljmaa', loadChildren: './adeyat-aljmaa/adeyat-aljmaa.module#AdeyatAljmaaPageModule' },
  { path: 'lekaat-hewarat', loadChildren: './lekaat-hewarat/lekaat-hewarat.module#LekaatHewaratPageModule' },
  { path: 'mawaez-akhlakeya', loadChildren: './mawaez-akhlakeya/mawaez-akhlakeya.module#MawaezAkhlakeyaPageModule' },
  { path: 'sayed-videos', loadChildren: './sayed-videos/sayed-videos.module#SayedVideosPageModule' },
  { path: 'almathaf', loadChildren: './almathaf/almathaf.module#AlmathafPageModule' },
  { path: 'alsera-alzateya-lelsayed', loadChildren: './alsera-alzateya-lelsayed/alsera-alzateya-lelsayed.module#AlseraAlzateyaLelsayedPageModule' },
  { path: 'maktabat-alsayed', loadChildren: './maktabat-alsayed/maktabat-alsayed.module#MaktabatAlsayedPageModule' },
  { path: 'mawk3-alesteshhad', loadChildren: './mawk3-alesteshhad/mawk3-alesteshhad.module#Mawk3AlesteshhadPageModule' },
  { path: 'alnajlayn-alshahedayn', loadChildren: './alnajlayn-alshahedayn/alnajlayn-alshahedayn.module#AlnajlaynAlshahedaynPageModule' },
  { path: 'makat3-khasa-lelsayed', loadChildren: './makat3-khasa-lelsayed/makat3-khasa-lelsayed.module#Makat3KhasaLelsayedPageModule' },
  { path: 'markad-alsayed', loadChildren: './markad-alsayed/markad-alsayed.module#MarkadAlsayedPageModule' },
  { path: 'mualafat-note', loadChildren: './mualafat-note/mualafat-note.module#MualafatNotePageModule' },
  { path: 'khotab-jmaa-video', loadChildren: './khotab-jmaa-video/khotab-jmaa-video.module#KhotabJmaaVideoPageModule' },
  { path: 'akhlak-baad-esteshhad', loadChildren: './akhlak-baad-esteshhad/akhlak-baad-esteshhad.module#AkhlakBaadEsteshhadPageModule' },
  { path: 'akhlak-kabel-esteshhad', loadChildren: './akhlak-kabel-esteshhad/akhlak-kabel-esteshhad.module#AkhlakKabelEsteshhadPageModule' },
  { path: 'akhlak-kabel-aw-baed', loadChildren: './akhlak-kabel-aw-baed/akhlak-kabel-aw-baed.module#AkhlakKabelAwBaedPageModule' },
  { path: 'alkutob-alfekheya-kabel-aw-baed', loadChildren: './alkutob-alfekheya-kabel-aw-baed/alkutob-alfekheya-kabel-aw-baed.module#AlkutobAlfekheyaKabelAwBaedPageModule' },
  { path: 'alkutob-alfekheya-kabel', loadChildren: './alkutob-alfekheya-kabel/alkutob-alfekheya-kabel.module#AlkutobAlfekheyaKabelPageModule' },
  { path: 'alkutob-alfekheya-baed', loadChildren: './alkutob-alfekheya-baed/alkutob-alfekheya-baed.module#AlkutobAlfekheyaBaedPageModule' },
  { path: 'alusul-baed', loadChildren: './alusul-baed/alusul-baed.module#AlusulBaedPageModule' },
  { path: 'alusul-kabel', loadChildren: './alusul-kabel/alusul-kabel.module#AlusulKabelPageModule' },
  { path: 'alusul-kabel-aw-baad', loadChildren: './alusul-kabel-aw-baad/alusul-kabel-aw-baad.module#AlusulKabelAwBaadPageModule' },
  { path: 'alkutob-akaedeya-kabel-aw-baad', loadChildren: './alkutob-akaedeya-kabel-aw-baad/alkutob-akaedeya-kabel-aw-baad.module#AlkutobAkaedeyaKabelAwBaadPageModule' },
  { path: 'alkutob-akaedeya-kabel', loadChildren: './alkutob-akaedeya-kabel/alkutob-akaedeya-kabel.module#AlkutobAkaedeyaKabelPageModule' },
  { path: 'alkuraan-kabel', loadChildren: './alkuraan-kabel/alkuraan-kabel.module#AlkuraanKabelPageModule' },
  { path: 'alkuraan-kabel-aw-baad', loadChildren: './alkuraan-kabel-aw-baad/alkuraan-kabel-aw-baad.module#AlkuraanKabelAwBaadPageModule' },
  { path: 'aladab-kabel', loadChildren: './aladab-kabel/aladab-kabel.module#AladabKabelPageModule' },
  { path: 'aladab-kabel-aw-baad', loadChildren: './aladab-kabel-aw-baad/aladab-kabel-aw-baad.module#AladabKabelAwBaadPageModule' },
  { path: 'al3ulum-baad', loadChildren: './al3ulum-baad/al3ulum-baad.module#Al3ulumBaadPageModule' },
  { path: 'al3ulum-kabel-aw-baad', loadChildren: './al3ulum-kabel-aw-baad/al3ulum-kabel-aw-baad.module#Al3ulumKabelAwBaadPageModule' },
  { path: 'alkanun-kabel', loadChildren: './alkanun-kabel/alkanun-kabel.module#AlkanunKabelPageModule' },
  { path: 'alkanun-baad', loadChildren: './alkanun-baad/alkanun-baad.module#AlkanunBaadPageModule' },
  { path: 'alkanun-kabel-aw-baad', loadChildren: './alkanun-kabel-aw-baad/alkanun-kabel-aw-baad.module#AlkanunKabelAwBaadPageModule' },
  { path: 'alejtemaa-baad', loadChildren: './alejtemaa-baad/alejtemaa-baad.module#AlejtemaaBaadPageModule' },
  { path: 'alejtemaa-kabel-aw-baad', loadChildren: './alejtemaa-kabel-aw-baad/alejtemaa-kabel-aw-baad.module#AlejtemaaKabelAwBaadPageModule' },
  { path: 'aladab-baad', loadChildren: './aladab-baad/aladab-baad.module#AladabBaadPageModule' },
  {
    path: 'sera-al-zateya',
    loadChildren: () => import('./sera-al-zateya/sera-al-zateya.module').then( m => m.SeraAlZateyaPageModule)
  },
  {
    path: 'alejtemaa-kabel',
    loadChildren: () => import('./alejtemaa-kabel/alejtemaa-kabel.module').then( m => m.AlejtemaaKabelPageModule)
  },
  {
    path: 'takrerat-kabel-baad',
    loadChildren: () => import('./takrerat-kabel-baad/takrerat-kabel-baad.module').then( m => m.TakreratKabelBaadPageModule)
  },
  {
    path: 'takrerat-baad',
    loadChildren: () => import('./takrerat-baad/takrerat-baad.module').then( m => m.TakreratBaadPageModule)
  },
  {
    path: 'alkuraan-baad',
    loadChildren: () => import('./alkuraan-baad/alkuraan-baad.module').then( m => m.AlkuraanBaadPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'alusul14216',
    loadChildren: () => import('./alusul14216/alusul14216.module').then( m => m.Alusul14216PageModule)
  },
  {
    path: 'alusul-shaher-muharam',
    loadChildren: () => import('./alusul-shaher-muharam/alusul-shaher-muharam.module').then( m => m.AlusulShaherMuharamPageModule)
  },
  {
    path: 'alusul-sefer',
    loadChildren: () => import('./alusul-sefer/alusul-sefer.module').then( m => m.AlusulSeferPageModule)
  },
  {
    path: 'alusul-sabe3-alawal',
    loadChildren: () => import('./alusul-sabe3-alawal/alusul-sabe3-alawal.module').then( m => m.AlusulSabe3AlawalPageModule)
  },
  {
    path: 'aldurus-fekeh',
    loadChildren: () => import('./aldurus-fekeh/aldurus-fekeh.module').then( m => m.AldurusFekehPageModule)
  },
  {
    path: 'aldurus-kefaya',
    loadChildren: () => import('./aldurus-kefaya/aldurus-kefaya.module').then( m => m.AldurusKefayaPageModule)
  },
  {
    path: 'tafser',
    loadChildren: () => import('./tafser/tafser.module').then( m => m.TafserPageModule)
  },
  {
    path: 'aldurus-tafser',
    loadChildren: () => import('./aldurus-tafser/aldurus-tafser.module').then( m => m.AldurusTafserPageModule)
  },
  {
    path: 'tafser-basmala',
    loadChildren: () => import('./tafser-basmala/tafser-basmala.module').then( m => m.TafserBasmalaPageModule)
  },
  {
    path: 'tafser-ma3uztyn',
    loadChildren: () => import('./tafser-ma3uztyn/tafser-ma3uztyn.module').then( m => m.TafserMa3uztynPageModule)
  },
  {
    path: 'tafser-ekhlas',
    loadChildren: () => import('./tafser-ekhlas/tafser-ekhlas.module').then( m => m.TafserEkhlasPageModule)
  },
  {
    path: 'tafser-esra2',
    loadChildren: () => import('./tafser-esra2/tafser-esra2.module').then( m => m.TafserEsra2PageModule)
  },
  {
    path: 'tafser-a3la',
    loadChildren: () => import('./tafser-a3la/tafser-a3la.module').then( m => m.TafserA3laPageModule)
  },
  {
    path: 'tafser-enshekak',
    loadChildren: () => import('./tafser-enshekak/tafser-enshekak.module').then( m => m.TafserEnshekakPageModule)
  },
  {
    path: 'tafser-enfetar',
    loadChildren: () => import('./tafser-enfetar/tafser-enfetar.module').then( m => m.TafserEnfetarPageModule)
  },
  {
    path: 'tafser-buruj',
    loadChildren: () => import('./tafser-buruj/tafser-buruj.module').then( m => m.TafserBurujPageModule)
  },
  {
    path: 'tafser-be2a',
    loadChildren: () => import('./tafser-be2a/tafser-be2a.module').then( m => m.TafserBe2aPageModule)
  },
  {
    path: 'tafser-takasur',
    loadChildren: () => import('./tafser-takasur/tafser-takasur.module').then( m => m.TafserTakasurPageModule)
  },
  {
    path: 'tafser-takwer',
    loadChildren: () => import('./tafser-takwer/tafser-takwer.module').then( m => m.TafserTakwerPageModule)
  },
  {
    path: 'tafser-alzazala',
    loadChildren: () => import('./tafser-alzazala/tafser-alzazala.module').then( m => m.TafserAlzazalaPageModule)
  },
  {
    path: 'tafser-alshare7',
    loadChildren: () => import('./tafser-alshare7/tafser-alshare7.module').then( m => m.TafserAlshare7PageModule)
  },
  {
    path: 'tafser-altarek',
    loadChildren: () => import('./tafser-altarek/tafser-altarek.module').then( m => m.TafserAltarekPageModule)
  },
  {
    path: 'tafser-al3adeyat',
    loadChildren: () => import('./tafser-al3adeyat/tafser-al3adeyat.module').then( m => m.TafserAl3adeyatPageModule)
  },
  {
    path: 'tafser-al8asheya',
    loadChildren: () => import('./tafser-al8asheya/tafser-al8asheya.module').then( m => m.TafserAl8asheyaPageModule)
  },
  {
    path: 'tafser-alfajer',
    loadChildren: () => import('./tafser-alfajer/tafser-alfajer.module').then( m => m.TafserAlfajerPageModule)
  },
  {
    path: 'tafser-alfel',
    loadChildren: () => import('./tafser-alfel/tafser-alfel.module').then( m => m.TafserAlfelPageModule)
  },
  {
    path: 'tafser-alkare3a',
    loadChildren: () => import('./tafser-alkare3a/tafser-alkare3a.module').then( m => m.TafserAlkare3aPageModule)
  },
  {
    path: 'tafser-alkadr',
    loadChildren: () => import('./tafser-alkadr/tafser-alkadr.module').then( m => m.TafserAlkadrPageModule)
  },
  {
    path: 'tafser-alkaferun',
    loadChildren: () => import('./tafser-alkaferun/tafser-alkaferun.module').then( m => m.TafserAlkaferunPageModule)
  },
  {
    path: 'tafser-alkawthar',
    loadChildren: () => import('./tafser-alkawthar/tafser-alkawthar.module').then( m => m.TafserAlkawtharPageModule)
  },
  {
    path: 'tafser-alma3un',
    loadChildren: () => import('./tafser-alma3un/tafser-alma3un.module').then( m => m.TafserAlma3unPageModule)
  },
  {
    path: 'tafser-almsd',
    loadChildren: () => import('./tafser-almsd/tafser-almsd.module').then( m => m.TafserAlmsdPageModule)
  },
  {
    path: 'tafser-almtfefen',
    loadChildren: () => import('./tafser-almtfefen/tafser-almtfefen.module').then( m => m.TafserAlmtfefenPageModule)
  },
  {
    path: 'tafser-alnaze3at',
    loadChildren: () => import('./tafser-alnaze3at/tafser-alnaze3at.module').then( m => m.TafserAlnaze3atPageModule)
  },
  {
    path: 'tafser-naba2',
    loadChildren: () => import('./tafser-naba2/tafser-naba2.module').then( m => m.TafserNaba2PageModule)
  },
  {
    path: 'tafser-alnaser',
    loadChildren: () => import('./tafser-alnaser/tafser-alnaser.module').then( m => m.TafserAlnaserPageModule)
  },
  {
    path: 'tafser-alhamza',
    loadChildren: () => import('./tafser-alhamza/tafser-alhamza.module').then( m => m.TafserAlhamzaPageModule)
  },
  {
    path: 'tafser-abas',
    loadChildren: () => import('./tafser-abas/tafser-abas.module').then( m => m.TafserAbasPageModule)
  },
  {
    path: 'tafser-kurysh',
    loadChildren: () => import('./tafser-kurysh/tafser-kurysh.module').then( m => m.TafserKuryshPageModule)
  },
  {
    path: 'lekaat-hewarat-shahed',
    loadChildren: () => import('./lekaat-hewarat-shahed/lekaat-hewarat-shahed.module').then( m => m.LekaatHewaratShahedPageModule)
  },
  {
    path: 'lekaat-hewarat-shahed-daraji',
    loadChildren: () => import('./lekaat-hewarat-shahed-daraji/lekaat-hewarat-shahed-daraji.module').then( m => m.LekaatHewaratShahedDarajiPageModule)
  },
  {
    path: 'lekaat-hewarat-shahed-hanana',
    loadChildren: () => import('./lekaat-hewarat-shahed-hanana/lekaat-hewarat-shahed-hanana.module').then( m => m.LekaatHewaratShahedHananaPageModule)
  },
  {
    path: 'almathaf-shahed',
    loadChildren: () => import('./almathaf-shahed/almathaf-shahed.module').then( m => m.AlmathafShahedPageModule)
  },
  {
    path: 'almathaf-suwar',
    loadChildren: () => import('./almathaf-suwar/almathaf-suwar.module').then( m => m.AlmathafSuwarPageModule)
  },
  {
    path: 'alnajlayn-alshahedayn-suwar',
    loadChildren: () => import('./alnajlayn-alshahedayn-suwar/alnajlayn-alshahedayn-suwar.module').then( m => m.AlnajlaynAlshahedaynSuwarPageModule)
  },
  {
    path: 'khotabalsayed-suwar',
    loadChildren: () => import('./khotabalsayed-suwar/khotabalsayed-suwar.module').then( m => m.KhotabalsayedSuwarPageModule)
  },
  {
    path: 'khotabalsayed-mp3',
    loadChildren: () => import('./khotabalsayed-mp3/khotabalsayed-mp3.module').then( m => m.KhotabalsayedMp3PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya',
    loadChildren: () => import('./khotabalsayed-ad3eya/khotabalsayed-ad3eya.module').then( m => m.KhotabalsayedAd3eyaPageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa/khotabalsayed-ad3eya-ekraa.module').then( m => m.KhotabalsayedAd3eyaEkraaPageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-mp3',
    loadChildren: () => import('./khotabalsayed-ad3eya-mp3/khotabalsayed-ad3eya-mp3.module').then( m => m.KhotabalsayedAd3eyaMp3PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-mp4',
    loadChildren: () => import('./khotabalsayed-ad3eya-mp4/khotabalsayed-ad3eya-mp4.module').then( m => m.KhotabalsayedAd3eyaMp4PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa1',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa1/khotabalsayed-ad3eya-ekraa1.module').then( m => m.KhotabalsayedAd3eyaEkraa1PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa29',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa29/khotabalsayed-ad3eya-ekraa29.module').then( m => m.KhotabalsayedAd3eyaEkraa29PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa3',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa3/khotabalsayed-ad3eya-ekraa3.module').then( m => m.KhotabalsayedAd3eyaEkraa3PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa2',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa2/khotabalsayed-ad3eya-ekraa2.module').then( m => m.KhotabalsayedAd3eyaEkraa2PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa5',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa5/khotabalsayed-ad3eya-ekraa5.module').then( m => m.KhotabalsayedAd3eyaEkraa5PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa4',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa4/khotabalsayed-ad3eya-ekraa4.module').then( m => m.KhotabalsayedAd3eyaEkraa4PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa7',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa7/khotabalsayed-ad3eya-ekraa7.module').then( m => m.KhotabalsayedAd3eyaEkraa7PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa6',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa6/khotabalsayed-ad3eya-ekraa6.module').then( m => m.KhotabalsayedAd3eyaEkraa6PageModule)
  },
  {
    path: 'markad-alsayed-mp4',
    loadChildren: () => import('./markad-alsayed-mp4/markad-alsayed-mp4.module').then( m => m.MarkadAlsayedMp4PageModule)
  },
  {
    path: 'markad-alsayed-images',
    loadChildren: () => import('./markad-alsayed-images/markad-alsayed-images.module').then( m => m.MarkadAlsayedImagesPageModule)
  },
  {
    path: 'maktabat-alsayed-mp4',
    loadChildren: () => import('./maktabat-alsayed-mp4/maktabat-alsayed-mp4.module').then( m => m.MaktabatAlsayedMp4PageModule)
  },
  {
    path: 'maktabat-alsayed-suwar',
    loadChildren: () => import('./maktabat-alsayed-suwar/maktabat-alsayed-suwar.module').then( m => m.MaktabatAlsayedSuwarPageModule)
  },
  {
    path: 'mawk3-alesteshhad-mp4',
    loadChildren: () => import('./mawk3-alesteshhad-mp4/mawk3-alesteshhad-mp4.module').then( m => m.Mawk3AlesteshhadMp4PageModule)
  },
  {
    path: 'mawk3-alesteshhad-suwar',
    loadChildren: () => import('./mawk3-alesteshhad-suwar/mawk3-alesteshhad-suwar.module').then( m => m.Mawk3AlesteshhadSuwarPageModule)
  },
  {
    path: 'alusul-rabe3-altane',
    loadChildren: () => import('./alusul-rabe3-altane/alusul-rabe3-altane.module').then( m => m.AlusulRabe3AltanePageModule)
  },
  {
    path: 'alusul-jamade-awal',
    loadChildren: () => import('./alusul-jamade-awal/alusul-jamade-awal.module').then( m => m.AlusulJamadeAwalPageModule)
  },
  {
    path: 'alusul-jamade-tane',
    loadChildren: () => import('./alusul-jamade-tane/alusul-jamade-tane.module').then( m => m.AlusulJamadeTanePageModule)
  },
  {
    path: 'alusul-rajab',
    loadChildren: () => import('./alusul-rajab/alusul-rajab.module').then( m => m.AlusulRajabPageModule)
  },
  {
    path: 'alusul-shaaban',
    loadChildren: () => import('./alusul-shaaban/alusul-shaaban.module').then( m => m.AlusulShaabanPageModule)
  },
  {
    path: 'alusul-shawal',
    loadChildren: () => import('./alusul-shawal/alusul-shawal.module').then( m => m.AlusulShawalPageModule)
  },
  {
    path: 'alusul-zelka3da',
    loadChildren: () => import('./alusul-zelka3da/alusul-zelka3da.module').then( m => m.AlusulZelka3daPageModule)
  },
  {
    path: 'alusul-zel7eja',
    loadChildren: () => import('./alusul-zel7eja/alusul-zel7eja.module').then( m => m.AlusulZel7ejaPageModule)
  },
  {
    path: 'alusul1417',
    loadChildren: () => import('./alusul1417/alusul1417.module').then( m => m.Alusul1417PageModule)
  },
  {
    path: 'alusul-shaher-muharam1417',
    loadChildren: () => import('./alusul-shaher-muharam1417/alusul-shaher-muharam1417.module').then( m => m.AlusulShaherMuharam1417PageModule)
  },
  {
    path: 'alusul-sefer1417',
    loadChildren: () => import('./alusul-sefer1417/alusul-sefer1417.module').then( m => m.AlusulSefer1417PageModule)
  },
  {
    path: 'alusul-rabe3-alawal1417',
    loadChildren: () => import('./alusul-rabe3-alawal1417/alusul-rabe3-alawal1417.module').then( m => m.AlusulRabe3Alawal1417PageModule)
  },
  {
    path: 'alusul-rabe3-altane1417',
    loadChildren: () => import('./alusul-rabe3-altane1417/alusul-rabe3-altane1417.module').then( m => m.AlusulRabe3Altane1417PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa8',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa8/khotabalsayed-ad3eya-ekraa8.module').then( m => m.KhotabalsayedAd3eyaEkraa8PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa9',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa9/khotabalsayed-ad3eya-ekraa9.module').then( m => m.KhotabalsayedAd3eyaEkraa9PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa10',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa10/khotabalsayed-ad3eya-ekraa10.module').then( m => m.KhotabalsayedAd3eyaEkraa10PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa11',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa11/khotabalsayed-ad3eya-ekraa11.module').then( m => m.KhotabalsayedAd3eyaEkraa11PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa12',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa12/khotabalsayed-ad3eya-ekraa12.module').then( m => m.KhotabalsayedAd3eyaEkraa12PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa13',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa13/khotabalsayed-ad3eya-ekraa13.module').then( m => m.KhotabalsayedAd3eyaEkraa13PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa14',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa14/khotabalsayed-ad3eya-ekraa14.module').then( m => m.KhotabalsayedAd3eyaEkraa14PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa15',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa15/khotabalsayed-ad3eya-ekraa15.module').then( m => m.KhotabalsayedAd3eyaEkraa15PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa16',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa16/khotabalsayed-ad3eya-ekraa16.module').then( m => m.KhotabalsayedAd3eyaEkraa16PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa17',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa17/khotabalsayed-ad3eya-ekraa17.module').then( m => m.KhotabalsayedAd3eyaEkraa17PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa18',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa18/khotabalsayed-ad3eya-ekraa18.module').then( m => m.KhotabalsayedAd3eyaEkraa18PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa19',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa19/khotabalsayed-ad3eya-ekraa19.module').then( m => m.KhotabalsayedAd3eyaEkraa19PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa20',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa20/khotabalsayed-ad3eya-ekraa20.module').then( m => m.KhotabalsayedAd3eyaEkraa20PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa21',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa21/khotabalsayed-ad3eya-ekraa21.module').then( m => m.KhotabalsayedAd3eyaEkraa21PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa22',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa22/khotabalsayed-ad3eya-ekraa22.module').then( m => m.KhotabalsayedAd3eyaEkraa22PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa23',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa23/khotabalsayed-ad3eya-ekraa23.module').then( m => m.KhotabalsayedAd3eyaEkraa23PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa24',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa24/khotabalsayed-ad3eya-ekraa24.module').then( m => m.KhotabalsayedAd3eyaEkraa24PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa25',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa25/khotabalsayed-ad3eya-ekraa25.module').then( m => m.KhotabalsayedAd3eyaEkraa25PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa26',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa26/khotabalsayed-ad3eya-ekraa26.module').then( m => m.KhotabalsayedAd3eyaEkraa26PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa27',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa27/khotabalsayed-ad3eya-ekraa27.module').then( m => m.KhotabalsayedAd3eyaEkraa27PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa28',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa28/khotabalsayed-ad3eya-ekraa28.module').then( m => m.KhotabalsayedAd3eyaEkraa28PageModule)
  },
  {
    path: 'alusul1418',
    loadChildren: () => import('./alusul1418/alusul1418.module').then( m => m.Alusul1418PageModule)
  },
  {
    path: 'alusul-shaher-muharam1418',
    loadChildren: () => import('./alusul-shaher-muharam1418/alusul-shaher-muharam1418.module').then( m => m.AlusulShaherMuharam1418PageModule)
  },
  {
    path: 'alusul-sefer1418',
    loadChildren: () => import('./alusul-sefer1418/alusul-sefer1418.module').then( m => m.AlusulSefer1418PageModule)
  },
  {
    path: 'alusul-rabe3-alawal1418',
    loadChildren: () => import('./alusul-rabe3-alawal1418/alusul-rabe3-alawal1418.module').then( m => m.AlusulRabe3Alawal1418PageModule)
  },
  {
    path: 'alusul-rabe3-altane1418',
    loadChildren: () => import('./alusul-rabe3-altane1418/alusul-rabe3-altane1418.module').then( m => m.AlusulRabe3Altane1418PageModule)
  },
  {
    path: 'alusul-jamade-awal1418',
    loadChildren: () => import('./alusul-jamade-awal1418/alusul-jamade-awal1418.module').then( m => m.AlusulJamadeAwal1418PageModule)
  },
  {
    path: 'alusul-jamade-tane1418',
    loadChildren: () => import('./alusul-jamade-tane1418/alusul-jamade-tane1418.module').then( m => m.AlusulJamadeTane1418PageModule)
  },
  {
    path: 'alusul-rajab1418',
    loadChildren: () => import('./alusul-rajab1418/alusul-rajab1418.module').then( m => m.AlusulRajab1418PageModule)
  },
  {
    path: 'alusul-shaaban1418',
    loadChildren: () => import('./alusul-shaaban1418/alusul-shaaban1418.module').then( m => m.AlusulShaaban1418PageModule)
  },
  {
    path: 'alusul-shawal1418',
    loadChildren: () => import('./alusul-shawal1418/alusul-shawal1418.module').then( m => m.AlusulShawal1418PageModule)
  },
  {
    path: 'alusul-zelka3da1418',
    loadChildren: () => import('./alusul-zelka3da1418/alusul-zelka3da1418.module').then( m => m.AlusulZelka3da1418PageModule)
  },
  {
    path: 'alusul-zel7eja1418',
    loadChildren: () => import('./alusul-zel7eja1418/alusul-zel7eja1418.module').then( m => m.AlusulZel7eja1418PageModule)
  },
  {
    path: 'alusul-jamade-awal1417',
    loadChildren: () => import('./alusul-jamade-awal1417/alusul-jamade-awal1417.module').then( m => m.AlusulJamadeAwal1417PageModule)
  },
  {
    path: 'alusul-jamade-tane1417',
    loadChildren: () => import('./alusul-jamade-tane1417/alusul-jamade-tane1417.module').then( m => m.AlusulJamadeTane1417PageModule)
  },
  {
    path: 'alusul-rajab1417',
    loadChildren: () => import('./alusul-rajab1417/alusul-rajab1417.module').then( m => m.AlusulRajab1417PageModule)
  },
  {
    path: 'alusul-shaaban1417',
    loadChildren: () => import('./alusul-shaaban1417/alusul-shaaban1417.module').then( m => m.AlusulShaaban1417PageModule)
  },
  {
    path: 'alusul-shawal1417',
    loadChildren: () => import('./alusul-shawal1417/alusul-shawal1417.module').then( m => m.AlusulShawal1417PageModule)
  },
  {
    path: 'alusul-zelka3da1417',
    loadChildren: () => import('./alusul-zelka3da1417/alusul-zelka3da1417.module').then( m => m.AlusulZelka3da1417PageModule)
  },
  {
    path: 'alusul-zel7eja1417',
    loadChildren: () => import('./alusul-zel7eja1417/alusul-zel7eja1417.module').then( m => m.AlusulZel7eja1417PageModule)
  },
  {
    path: 'alusul1415',
    loadChildren: () => import('./alusul1415/alusul1415.module').then( m => m.Alusul1415PageModule)
  },
  {
    path: 'alusul-shawal1415',
    loadChildren: () => import('./alusul-shawal1415/alusul-shawal1415.module').then( m => m.AlusulShawal1415PageModule)
  },
  {
    path: 'alusul-zelka3da1415',
    loadChildren: () => import('./alusul-zelka3da1415/alusul-zelka3da1415.module').then( m => m.AlusulZelka3da1415PageModule)
  },
  {
    path: 'alusul-zel7eja1415',
    loadChildren: () => import('./alusul-zel7eja1415/alusul-zel7eja1415.module').then( m => m.AlusulZel7eja1415PageModule)
  },
  {
    path: 'alusul1419',
    loadChildren: () => import('./alusul1419/alusul1419.module').then( m => m.Alusul1419PageModule)
  },
  {
    path: 'alusul-shaher-muharam1419',
    loadChildren: () => import('./alusul-shaher-muharam1419/alusul-shaher-muharam1419.module').then( m => m.AlusulShaherMuharam1419PageModule)
  },
  {
    path: 'alusul-sefer1419',
    loadChildren: () => import('./alusul-sefer1419/alusul-sefer1419.module').then( m => m.AlusulSefer1419PageModule)
  },
  {
    path: 'alusul-rabe3-alawal1419',
    loadChildren: () => import('./alusul-rabe3-alawal1419/alusul-rabe3-alawal1419.module').then( m => m.AlusulRabe3Alawal1419PageModule)
  },
  {
    path: 'alusul-rabe3-altane1419',
    loadChildren: () => import('./alusul-rabe3-altane1419/alusul-rabe3-altane1419.module').then( m => m.AlusulRabe3Altane1419PageModule)
  },
  {
    path: 'alusul-jamade-awal1419',
    loadChildren: () => import('./alusul-jamade-awal1419/alusul-jamade-awal1419.module').then( m => m.AlusulJamadeAwal1419PageModule)
  },
  {
    path: 'alusul-jamade-tane1419',
    loadChildren: () => import('./alusul-jamade-tane1419/alusul-jamade-tane1419.module').then( m => m.AlusulJamadeTane1419PageModule)
  },
  {
    path: 'alusul-rajab1419',
    loadChildren: () => import('./alusul-rajab1419/alusul-rajab1419.module').then( m => m.AlusulRajab1419PageModule)
  },
  {
    path: 'alusul-shaaban1419',
    loadChildren: () => import('./alusul-shaaban1419/alusul-shaaban1419.module').then( m => m.AlusulShaaban1419PageModule)
  },
  {
    path: 'alusul-shawal1419',
    loadChildren: () => import('./alusul-shawal1419/alusul-shawal1419.module').then( m => m.AlusulShawal1419PageModule)
  },
  {
    path: 'alusul-zelka3da1419',
    loadChildren: () => import('./alusul-zelka3da1419/alusul-zelka3da1419.module').then( m => m.AlusulZelka3da1419PageModule)
  },
  {
    path: 'alusul-akaed',
    loadChildren: () => import('./alusul-akaed/alusul-akaed.module').then( m => m.AlusulAkaedPageModule)
  },
  {
    path: 'alusul-akaed-shajzrat',
    loadChildren: () => import('./alusul-akaed-shajzrat/alusul-akaed-shajzrat.module').then( m => m.AlusulAkaedShajzratPageModule)
  },
  {
    path: 'mualafat-mawara-alfekeh',
    loadChildren: () => import('./mualafat-mawara-alfekeh/mualafat-mawara-alfekeh.module').then( m => m.MualafatMawaraAlfekehPageModule)
  },
  {
    path: 'mualafat-manhaj-salehen',
    loadChildren: () => import('./mualafat-manhaj-salehen/mualafat-manhaj-salehen.module').then( m => m.MualafatManhajSalehenPageModule)
  },
  {
    path: 'mualafat-fatawa-wadeha',
    loadChildren: () => import('./mualafat-fatawa-wadeha/mualafat-fatawa-wadeha.module').then( m => m.MualafatFatawaWadehaPageModule)
  },
  {
    path: 'mualafat-fekeh-akhlak',
    loadChildren: () => import('./mualafat-fekeh-akhlak/mualafat-fekeh-akhlak.module').then( m => m.MualafatFekehAkhlakPageModule)
  },
  {
    path: 'mualafat-ketab-bay3',
    loadChildren: () => import('./mualafat-ketab-bay3/mualafat-ketab-bay3.module').then( m => m.MualafatKetabBay3PageModule)
  },
  {
    path: 'mualafat-manhaj-usul',
    loadChildren: () => import('./mualafat-manhaj-usul/mualafat-manhaj-usul.module').then( m => m.MualafatManhajUsulPageModule)
  },
  {
    path: 'mualafat-mena-menan',
    loadChildren: () => import('./mualafat-mena-menan/mualafat-mena-menan.module').then( m => m.MualafatMenaMenanPageModule)
  },
  {
    path: 'mualafat-masael-warudud',
    loadChildren: () => import('./mualafat-masael-warudud/mualafat-masael-warudud.module').then( m => m.MualafatMasaelWarududPageModule)
  },
  {
    path: 'salat-jamaa',
    loadChildren: () => import('./salat-jamaa/salat-jamaa.module').then( m => m.SalatJamaaPageModule)
  },
  {
    path: 'shaara2',
    loadChildren: () => import('./shaara2/shaara2.module').then( m => m.Shaara2PageModule)
  },
  {
    path: 'mawsuat-emam-mahdi',
    loadChildren: () => import('./mawsuat-emam-mahdi/mawsuat-emam-mahdi.module').then( m => m.MawsuatEmamMahdiPageModule)
  },
  {
    path: 'lekaat-ekraa',
    loadChildren: () => import('./lekaat-ekraa/lekaat-ekraa.module').then( m => m.LekaatEkraaPageModule)
  },
  {
    path: 'mawaez-ekraa',
    loadChildren: () => import('./mawaez-ekraa/mawaez-ekraa.module').then( m => m.MawaezEkraaPageModule)
  },
  {
    path: 'wasaekyat-sera-zateya',
    loadChildren: () => import('./wasaekyat-sera-zateya/wasaekyat-sera-zateya.module').then( m => m.WasaekyatSeraZateyaPageModule)
  },
  {
    path: 'search-list',
    loadChildren: () => import('./search-list/search-list.module').then( m => m.SearchListPageModule)
  },
  {
    path: 'alkutob-akaedeya-baed',
    loadChildren: () => import('./alkutob-akaedeya-baed/alkutob-akaedeya-baed.module').then( m => m.AlkutobAkaedeyaBaedPageModule)
  },
  {
    path: 'al3ulum-kabel',
    loadChildren: () => import('./al3ulum-kabel/al3ulum-kabel.module').then( m => m.Al3ulumKabelPageModule)
  },
  {
    path: 'takrerat-kabel',
    loadChildren: () => import('./takrerat-kabel/takrerat-kabel.module').then( m => m.TakreratKabelPageModule)
  },
  {
    path: 'tafser-alaser',
    loadChildren: () => import('./tafser-alaser/tafser-alaser.module').then( m => m.TafserAlaserPageModule)
  },
  {
    path: 'tafser-alalak',
    loadChildren: () => import('./tafser-alalak/tafser-alalak.module').then( m => m.TafserAlalakPageModule)
  },
  {
    path: 'tafser-alten',
    loadChildren: () => import('./tafser-alten/tafser-alten.module').then( m => m.TafserAltenPageModule)
  },
  {
    path: 'aladab-eshrakat-adabya',
    loadChildren: () => import('./aladab-eshrakat-adabya/aladab-eshrakat-adabya.module').then( m => m.AladabEshrakatAdabyaPageModule)
  },
  {
    path: 'mawk3-alesteshhad-eqra2',
    loadChildren: () => import('./mawk3-alesteshhad-eqra2/mawk3-alesteshhad-eqra2.module').then( m => m.Mawk3AlesteshhadEqra2PageModule)
  },
  {
    path: 'alnajlayn-alshahedayn-eqra2',
    loadChildren: () => import('./alnajlayn-alshahedayn-eqra2/alnajlayn-alshahedayn-eqra2.module').then( m => m.AlnajlaynAlshahedaynEqra2PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa30',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa30/khotabalsayed-ad3eya-ekraa30.module').then( m => m.KhotabalsayedAd3eyaEkraa30PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa31',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa31/khotabalsayed-ad3eya-ekraa31.module').then( m => m.KhotabalsayedAd3eyaEkraa31PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa32',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa32/khotabalsayed-ad3eya-ekraa32.module').then( m => m.KhotabalsayedAd3eyaEkraa32PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa33',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa33/khotabalsayed-ad3eya-ekraa33.module').then( m => m.KhotabalsayedAd3eyaEkraa33PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa34',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa34/khotabalsayed-ad3eya-ekraa34.module').then( m => m.KhotabalsayedAd3eyaEkraa34PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa35',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa35/khotabalsayed-ad3eya-ekraa35.module').then( m => m.KhotabalsayedAd3eyaEkraa35PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa36',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa36/khotabalsayed-ad3eya-ekraa36.module').then( m => m.KhotabalsayedAd3eyaEkraa36PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa37',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa37/khotabalsayed-ad3eya-ekraa37.module').then( m => m.KhotabalsayedAd3eyaEkraa37PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa38',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa38/khotabalsayed-ad3eya-ekraa38.module').then( m => m.KhotabalsayedAd3eyaEkraa38PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa39',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa39/khotabalsayed-ad3eya-ekraa39.module').then( m => m.KhotabalsayedAd3eyaEkraa39PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa40',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa40/khotabalsayed-ad3eya-ekraa40.module').then( m => m.KhotabalsayedAd3eyaEkraa40PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa41',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa41/khotabalsayed-ad3eya-ekraa41.module').then( m => m.KhotabalsayedAd3eyaEkraa41PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa42',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa42/khotabalsayed-ad3eya-ekraa42.module').then( m => m.KhotabalsayedAd3eyaEkraa42PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa43',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa43/khotabalsayed-ad3eya-ekraa43.module').then( m => m.KhotabalsayedAd3eyaEkraa43PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa44',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa44/khotabalsayed-ad3eya-ekraa44.module').then( m => m.KhotabalsayedAd3eyaEkraa44PageModule)
  },
  {
    path: 'khotabalsayed-ad3eya-ekraa45',
    loadChildren: () => import('./khotabalsayed-ad3eya-ekraa45/khotabalsayed-ad3eya-ekraa45.module').then( m => m.KhotabalsayedAd3eyaEkraa45PageModule)
  },
  {
    path: 'bahes-jmaa',
    loadChildren: () => import('./bahes-jmaa/bahes-jmaa.module').then( m => m.BahesJmaaPageModule)
  },
  {
    path: 'alnajlayn-alshahedayn-mp4',
    loadChildren: () => import('./alnajlayn-alshahedayn-mp4/alnajlayn-alshahedayn-mp4.module').then( m => m.AlnajlaynAlshahedaynMp4PageModule)
  },
  {
    path: 'alnajlayn-alshahedayn-eqra2-mustafa',
    loadChildren: () => import('./alnajlayn-alshahedayn-eqra2-mustafa/alnajlayn-alshahedayn-eqra2-mustafa.module').then( m => m.AlnajlaynAlshahedaynEqra2MustafaPageModule)
  },
  {
    path: 'alnajlayn-alshahedayn-eqra2-mu2mel',
    loadChildren: () => import('./alnajlayn-alshahedayn-eqra2-mu2mel/alnajlayn-alshahedayn-eqra2-mu2mel.module').then( m => m.AlnajlaynAlshahedaynEqra2Mu2melPageModule)
  },
  {
    path: 'lekaa-hanana-eqra2',
    loadChildren: () => import('./lekaa-hanana-eqra2/lekaa-hanana-eqra2.module').then( m => m.LekaaHananaEqra2PageModule)
  },
  {
    path: 'lekaa-hanana-eqra2-j1',
    loadChildren: () => import('./lekaa-hanana-eqra2-j1/lekaa-hanana-eqra2-j1.module').then( m => m.LekaaHananaEqra2J1PageModule)
  },
  {
    path: 'lekaa-hanana-eqra2-j2',
    loadChildren: () => import('./lekaa-hanana-eqra2-j2/lekaa-hanana-eqra2-j2.module').then( m => m.LekaaHananaEqra2J2PageModule)
  },
  {
    path: 'lekaa-hanana-eqra2-j3',
    loadChildren: () => import('./lekaa-hanana-eqra2-j3/lekaa-hanana-eqra2-j3.module').then( m => m.LekaaHananaEqra2J3PageModule)
  },
  {
    path: 'lekaa-aemat-jmaa',
    loadChildren: () => import('./lekaa-aemat-jmaa/lekaa-aemat-jmaa.module').then( m => m.LekaaAematJmaaPageModule)
  },
  {
    path: 'altarekh',
    loadChildren: () => import('./altarekh/altarekh.module').then( m => m.AltarekhPageModule)
  },
  {
    path: 'altarekh-kabel',
    loadChildren: () => import('./altarekh-kabel/altarekh-kabel.module').then( m => m.AltarekhKabelPageModule)
  },
  {
    path: 'altarekh-ba3d',
    loadChildren: () => import('./altarekh-ba3d/altarekh-ba3d.module').then( m => m.AltarekhBa3dPageModule)
  },
  {
    path: 'bahes-alkharej',
    loadChildren: () => import('./bahes-alkharej/bahes-alkharej.module').then( m => m.BahesAlkharejPageModule)
  },
  {
    path: 'muhadarat',
    loadChildren: () => import('./muhadarat/muhadarat.module').then( m => m.MuhadaratPageModule)
  },
  {
    path: 'hayaat-turath',
    loadChildren: () => import('./hayaat-turath/hayaat-turath.module').then( m => m.HayaatTurathPageModule)
  },
  {
    path: 'alketob-alfatwya',
    loadChildren: () => import('./alketob-alfatwya/alketob-alfatwya.module').then( m => m.AlketobAlfatwyaPageModule)
  },
  {
    path: 'home-note',
    loadChildren: () => import('./home-note/home-note.module').then( m => m.HomeNotePageModule)
  },
  {
    path: 'lekaa-hanana-eqra2-j4',
    loadChildren: () => import('./lekaa-hanana-eqra2-j4/lekaa-hanana-eqra2-j4.module').then( m => m.LekaaHananaEqra2J4PageModule)
  },
  {
    path: 'lekaa-hanana-eqra2-j5',
    loadChildren: () => import('./lekaa-hanana-eqra2-j5/lekaa-hanana-eqra2-j5.module').then( m => m.LekaaHananaEqra2J5PageModule)
  },
  {
    path: 'kefaya1417',
    loadChildren: () => import('./kefaya1417/kefaya1417.module').then( m => m.Kefaya1417PageModule)
  },
  {
    path: 'kefaya1418',
    loadChildren: () => import('./kefaya1418/kefaya1418.module').then( m => m.Kefaya1418PageModule)
  },
  {
    path: 'kefaya1419',
    loadChildren: () => import('./kefaya1419/kefaya1419.module').then( m => m.Kefaya1419PageModule)
  },
  {
    path: 'kefayamuharam',
    loadChildren: () => import('./kefayamuharam/kefayamuharam.module').then( m => m.KefayamuharamPageModule)
  },
  {
    path: 'kefayasefer',
    loadChildren: () => import('./kefayasefer/kefayasefer.module').then( m => m.KefayaseferPageModule)
  },
  {
    path: 'kefayarabeawal',
    loadChildren: () => import('./kefayarabeawal/kefayarabeawal.module').then( m => m.KefayarabeawalPageModule)
  },
  {
    path: 'kefayarabetane',
    loadChildren: () => import('./kefayarabetane/kefayarabetane.module').then( m => m.KefayarabetanePageModule)
  },
  {
    path: 'kefayajamadeawal',
    loadChildren: () => import('./kefayajamadeawal/kefayajamadeawal.module').then( m => m.KefayajamadeawalPageModule)
  },
  {
    path: 'kefayajamadetane',
    loadChildren: () => import('./kefayajamadetane/kefayajamadetane.module').then( m => m.KefayajamadetanePageModule)
  },
  {
    path: 'kefayarajab',
    loadChildren: () => import('./kefayarajab/kefayarajab.module').then( m => m.KefayarajabPageModule)
  },
  {
    path: 'kefayashaaban',
    loadChildren: () => import('./kefayashaaban/kefayashaaban.module').then( m => m.KefayashaabanPageModule)
  },
  {
    path: 'kefayashawal',
    loadChildren: () => import('./kefayashawal/kefayashawal.module').then( m => m.KefayashawalPageModule)
  },
  {
    path: 'kefayazekaada',
    loadChildren: () => import('./kefayazekaada/kefayazekaada.module').then( m => m.KefayazekaadaPageModule)
  },
  {
    path: 'kefayazeheja',
    loadChildren: () => import('./kefayazeheja/kefayazeheja.module').then( m => m.KefayazehejaPageModule)
  },
  {
    path: 'kefaya1419muharam',
    loadChildren: () => import('./kefaya1419muharam/kefaya1419muharam.module').then( m => m.Kefaya1419muharamPageModule)
  },
  {
    path: 'kefaya1419sefer',
    loadChildren: () => import('./kefaya1419sefer/kefaya1419sefer.module').then( m => m.Kefaya1419seferPageModule)
  },
  {
    path: 'kefaya1419rabeawal',
    loadChildren: () => import('./kefaya1419rabeawal/kefaya1419rabeawal.module').then( m => m.Kefaya1419rabeawalPageModule)
  },
  {
    path: 'kefaya1419rabetane',
    loadChildren: () => import('./kefaya1419rabetane/kefaya1419rabetane.module').then( m => m.Kefaya1419rabetanePageModule)
  },
  {
    path: 'kefaya1419jamadeawal',
    loadChildren: () => import('./kefaya1419jamadeawal/kefaya1419jamadeawal.module').then( m => m.Kefaya1419jamadeawalPageModule)
  },
  {
    path: 'kefaya1419jamadetane',
    loadChildren: () => import('./kefaya1419jamadetane/kefaya1419jamadetane.module').then( m => m.Kefaya1419jamadetanePageModule)
  },
  {
    path: 'kefaya1419rajab',
    loadChildren: () => import('./kefaya1419rajab/kefaya1419rajab.module').then( m => m.Kefaya1419rajabPageModule)
  },
  {
    path: 'kefaya1419shaaban',
    loadChildren: () => import('./kefaya1419shaaban/kefaya1419shaaban.module').then( m => m.Kefaya1419shaabanPageModule)
  },
  {
    path: 'kefaya1419shawal',
    loadChildren: () => import('./kefaya1419shawal/kefaya1419shawal.module').then( m => m.Kefaya1419shawalPageModule)
  },
  {
    path: 'kefaya1419zekaada',
    loadChildren: () => import('./kefaya1419zekaada/kefaya1419zekaada.module').then( m => m.Kefaya1419zekaadaPageModule)
  },
  {
    path: 'khotabalsayed-quraan',
    loadChildren: () => import('./khotabalsayed-quraan/khotabalsayed-quraan.module').then( m => m.KhotabalsayedQuraanPageModule)
  },
  {
    path: 'khotabalsayed-latmeyat',
    loadChildren: () => import('./khotabalsayed-latmeyat/khotabalsayed-latmeyat.module').then( m => m.KhotabalsayedLatmeyatPageModule)
  },
  {
    path: 'khotabalsayed-hetafat',
    loadChildren: () => import('./khotabalsayed-hetafat/khotabalsayed-hetafat.module').then( m => m.KhotabalsayedHetafatPageModule)
  },
  {
    path: 'ayat-quraan',
    loadChildren: () => import('./ayat-quraan/ayat-quraan.module').then( m => m.AyatQuraanPageModule)
  },
  {
    path: 'ayat-quraan-mp3',
    loadChildren: () => import('./ayat-quraan-mp3/ayat-quraan-mp3.module').then( m => m.AyatQuraanMp3PageModule)
  },
  {
    path: 'ayat-quraan-mp4',
    loadChildren: () => import('./ayat-quraan-mp4/ayat-quraan-mp4.module').then( m => m.AyatQuraanMp4PageModule)
  },
  {
    path: 'al-latmeyat',
    loadChildren: () => import('./al-latmeyat/al-latmeyat.module').then( m => m.AlLatmeyatPageModule)
  },
  {
    path: 'al-latmeyat-mp3',
    loadChildren: () => import('./al-latmeyat-mp3/al-latmeyat-mp3.module').then( m => m.AlLatmeyatMp3PageModule)
  },
  {
    path: 'al-latmeyat-mp4',
    loadChildren: () => import('./al-latmeyat-mp4/al-latmeyat-mp4.module').then( m => m.AlLatmeyatMp4PageModule)
  },
  {
    path: 'al-hetafat-mp3',
    loadChildren: () => import('./al-hetafat-mp3/al-hetafat-mp3.module').then( m => m.AlHetafatMp3PageModule)
  },
  {
    path: 'al-hetafat',
    loadChildren: () => import('./al-hetafat/al-hetafat.module').then( m => m.AlHetafatPageModule)
  },
  {
    path: 'al-hetafat-mp4',
    loadChildren: () => import('./al-hetafat-mp4/al-hetafat-mp4.module').then( m => m.AlHetafatMp4PageModule)
  },
  {
    path: 'zekra-shahadet-waledh',
    loadChildren: () => import('./zekra-shahadet-waledh/zekra-shahadet-waledh.module').then( m => m.ZekraShahadetWaledhPageModule)
  },
  {
    path: 'zekra-e7yaa-aljamaher',
    loadChildren: () => import('./zekra-e7yaa-aljamaher/zekra-e7yaa-aljamaher.module').then( m => m.ZekraE7yaaAljamaherPageModule)
  },
  {
    path: 'zekra-sanawya-lelsayed',
    loadChildren: () => import('./zekra-sanawya-lelsayed/zekra-sanawya-lelsayed.module').then( m => m.ZekraSanawyaLelsayedPageModule)
  },
  {
    path: 'zekra-sanawya-lelsayed-suwar',
    loadChildren: () => import('./zekra-sanawya-lelsayed-suwar/zekra-sanawya-lelsayed-suwar.module').then( m => m.ZekraSanawyaLelsayedSuwarPageModule)
  },
  {
    path: 'marahel-emaar-markad',
    loadChildren: () => import('./marahel-emaar-markad/marahel-emaar-markad.module').then( m => m.MarahelEmaarMarkadPageModule)
  },
  {
    path: 'sayed-markadalamer-img',
    loadChildren: () => import('./sayed-markadalamer-img/sayed-markadalamer-img.module').then( m => m.SayedMarkadalamerImgPageModule)
  },
  {
    path: 'lekaat-metwalen',
    loadChildren: () => import('./lekaat-metwalen/lekaat-metwalen.module').then( m => m.LekaatMetwalenPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
