import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AyatQuraanMp4Page } from './ayat-quraan-mp4.page';

describe('AyatQuraanMp4Page', () => {
  let component: AyatQuraanMp4Page;
  let fixture: ComponentFixture<AyatQuraanMp4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyatQuraanMp4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AyatQuraanMp4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
