import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KefayarabetanePage } from './kefayarabetane.page';

describe('KefayarabetanePage', () => {
  let component: KefayarabetanePage;
  let fixture: ComponentFixture<KefayarabetanePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KefayarabetanePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KefayarabetanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
