import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Kefaya1419rabeawalPage } from './kefaya1419rabeawal.page';

describe('Kefaya1419rabeawalPage', () => {
  let component: Kefaya1419rabeawalPage;
  let fixture: ComponentFixture<Kefaya1419rabeawalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kefaya1419rabeawalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Kefaya1419rabeawalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
