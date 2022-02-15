import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserMa3uztynPage } from './tafser-ma3uztyn.page';

describe('TafserMa3uztynPage', () => {
  let component: TafserMa3uztynPage;
  let fixture: ComponentFixture<TafserMa3uztynPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserMa3uztynPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserMa3uztynPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
