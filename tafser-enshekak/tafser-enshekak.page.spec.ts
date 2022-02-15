import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserEnshekakPage } from './tafser-enshekak.page';

describe('TafserEnshekakPage', () => {
  let component: TafserEnshekakPage;
  let fixture: ComponentFixture<TafserEnshekakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserEnshekakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserEnshekakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
