import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Kefaya1419Page } from './kefaya1419.page';

describe('Kefaya1419Page', () => {
  let component: Kefaya1419Page;
  let fixture: ComponentFixture<Kefaya1419Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kefaya1419Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Kefaya1419Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
