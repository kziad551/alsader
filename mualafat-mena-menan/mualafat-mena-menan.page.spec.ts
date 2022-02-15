import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MualafatMenaMenanPage } from './mualafat-mena-menan.page';

describe('MualafatMenaMenanPage', () => {
  let component: MualafatMenaMenanPage;
  let fixture: ComponentFixture<MualafatMenaMenanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MualafatMenaMenanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MualafatMenaMenanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
