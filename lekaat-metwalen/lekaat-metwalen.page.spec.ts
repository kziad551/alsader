import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LekaatMetwalenPage } from './lekaat-metwalen.page';

describe('LekaatMetwalenPage', () => {
  let component: LekaatMetwalenPage;
  let fixture: ComponentFixture<LekaatMetwalenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekaatMetwalenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LekaatMetwalenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
