import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Kefaya1418Page } from './kefaya1418.page';

describe('Kefaya1418Page', () => {
  let component: Kefaya1418Page;
  let fixture: ComponentFixture<Kefaya1418Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kefaya1418Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Kefaya1418Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
