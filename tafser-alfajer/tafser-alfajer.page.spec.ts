import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserAlfajerPage } from './tafser-alfajer.page';

describe('TafserAlfajerPage', () => {
  let component: TafserAlfajerPage;
  let fixture: ComponentFixture<TafserAlfajerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserAlfajerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserAlfajerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
