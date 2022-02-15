import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Kefaya1419jamadetanePage } from './kefaya1419jamadetane.page';

describe('Kefaya1419jamadetanePage', () => {
  let component: Kefaya1419jamadetanePage;
  let fixture: ComponentFixture<Kefaya1419jamadetanePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kefaya1419jamadetanePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Kefaya1419jamadetanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
