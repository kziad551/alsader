import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserAltarekPage } from './tafser-altarek.page';

describe('TafserAltarekPage', () => {
  let component: TafserAltarekPage;
  let fixture: ComponentFixture<TafserAltarekPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserAltarekPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserAltarekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
