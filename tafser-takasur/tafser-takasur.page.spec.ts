import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserTakasurPage } from './tafser-takasur.page';

describe('TafserTakasurPage', () => {
  let component: TafserTakasurPage;
  let fixture: ComponentFixture<TafserTakasurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserTakasurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserTakasurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
