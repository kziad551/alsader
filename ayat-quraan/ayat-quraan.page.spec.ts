import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AyatQuraanPage } from './ayat-quraan.page';

describe('AyatQuraanPage', () => {
  let component: AyatQuraanPage;
  let fixture: ComponentFixture<AyatQuraanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyatQuraanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AyatQuraanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
