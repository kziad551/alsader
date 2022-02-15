import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarahelEmaarMarkadPage } from './marahel-emaar-markad.page';

describe('MarahelEmaarMarkadPage', () => {
  let component: MarahelEmaarMarkadPage;
  let fixture: ComponentFixture<MarahelEmaarMarkadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarahelEmaarMarkadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarahelEmaarMarkadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
