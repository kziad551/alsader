import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AldurusKefayaPage } from './aldurus-kefaya.page';

describe('AldurusKefayaPage', () => {
  let component: AldurusKefayaPage;
  let fixture: ComponentFixture<AldurusKefayaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AldurusKefayaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AldurusKefayaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
