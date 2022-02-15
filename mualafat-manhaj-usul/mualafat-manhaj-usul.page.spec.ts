import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MualafatManhajUsulPage } from './mualafat-manhaj-usul.page';

describe('MualafatManhajUsulPage', () => {
  let component: MualafatManhajUsulPage;
  let fixture: ComponentFixture<MualafatManhajUsulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MualafatManhajUsulPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MualafatManhajUsulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
