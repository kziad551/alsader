import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZekraShahadetWaledhPage } from './zekra-shahadet-waledh.page';

describe('ZekraShahadetWaledhPage', () => {
  let component: ZekraShahadetWaledhPage;
  let fixture: ComponentFixture<ZekraShahadetWaledhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZekraShahadetWaledhPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZekraShahadetWaledhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
