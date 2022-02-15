import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AyatQuraanMp3Page } from './ayat-quraan-mp3.page';

describe('AyatQuraanMp3Page', () => {
  let component: AyatQuraanMp3Page;
  let fixture: ComponentFixture<AyatQuraanMp3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyatQuraanMp3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AyatQuraanMp3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
