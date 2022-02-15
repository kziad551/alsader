import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Al3ulumKabelPage } from './al3ulum-kabel.page';

describe('Al3ulumKabelPage', () => {
  let component: Al3ulumKabelPage;
  let fixture: ComponentFixture<Al3ulumKabelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Al3ulumKabelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Al3ulumKabelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
