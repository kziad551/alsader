import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Kefaya1419zekaadaPage } from './kefaya1419zekaada.page';

describe('Kefaya1419zekaadaPage', () => {
  let component: Kefaya1419zekaadaPage;
  let fixture: ComponentFixture<Kefaya1419zekaadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kefaya1419zekaadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Kefaya1419zekaadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
