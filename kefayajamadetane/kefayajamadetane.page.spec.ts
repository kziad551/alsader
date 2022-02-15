import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KefayajamadetanePage } from './kefayajamadetane.page';

describe('KefayajamadetanePage', () => {
  let component: KefayajamadetanePage;
  let fixture: ComponentFixture<KefayajamadetanePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KefayajamadetanePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KefayajamadetanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
