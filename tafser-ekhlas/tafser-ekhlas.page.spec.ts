import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserEkhlasPage } from './tafser-ekhlas.page';

describe('TafserEkhlasPage', () => {
  let component: TafserEkhlasPage;
  let fixture: ComponentFixture<TafserEkhlasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserEkhlasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserEkhlasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
