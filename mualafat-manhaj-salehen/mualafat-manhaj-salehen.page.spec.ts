import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MualafatManhajSalehenPage } from './mualafat-manhaj-salehen.page';

describe('MualafatManhajSalehenPage', () => {
  let component: MualafatManhajSalehenPage;
  let fixture: ComponentFixture<MualafatManhajSalehenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MualafatManhajSalehenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MualafatManhajSalehenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
