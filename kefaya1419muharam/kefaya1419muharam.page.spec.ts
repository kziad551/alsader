import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Kefaya1419muharamPage } from './kefaya1419muharam.page';

describe('Kefaya1419muharamPage', () => {
  let component: Kefaya1419muharamPage;
  let fixture: ComponentFixture<Kefaya1419muharamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kefaya1419muharamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Kefaya1419muharamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
