import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Kefaya1419shawalPage } from './kefaya1419shawal.page';

describe('Kefaya1419shawalPage', () => {
  let component: Kefaya1419shawalPage;
  let fixture: ComponentFixture<Kefaya1419shawalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kefaya1419shawalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Kefaya1419shawalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
