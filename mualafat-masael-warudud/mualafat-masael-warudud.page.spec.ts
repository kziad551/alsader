import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MualafatMasaelWarududPage } from './mualafat-masael-warudud.page';

describe('MualafatMasaelWarududPage', () => {
  let component: MualafatMasaelWarududPage;
  let fixture: ComponentFixture<MualafatMasaelWarududPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MualafatMasaelWarududPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MualafatMasaelWarududPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
