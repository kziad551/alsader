import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Kefaya1417Page } from './kefaya1417.page';

describe('Kefaya1417Page', () => {
  let component: Kefaya1417Page;
  let fixture: ComponentFixture<Kefaya1417Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kefaya1417Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Kefaya1417Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
