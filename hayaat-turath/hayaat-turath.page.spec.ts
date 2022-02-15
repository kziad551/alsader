import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HayaatTurathPage } from './hayaat-turath.page';

describe('HayaatTurathPage', () => {
  let component: HayaatTurathPage;
  let fixture: ComponentFixture<HayaatTurathPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HayaatTurathPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HayaatTurathPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
