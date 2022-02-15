import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserAl8asheyaPage } from './tafser-al8asheya.page';

describe('TafserAl8asheyaPage', () => {
  let component: TafserAl8asheyaPage;
  let fixture: ComponentFixture<TafserAl8asheyaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserAl8asheyaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserAl8asheyaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
