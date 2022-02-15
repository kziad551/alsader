import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AltarekhKabelPage } from './altarekh-kabel.page';

describe('AltarekhKabelPage', () => {
  let component: AltarekhKabelPage;
  let fixture: ComponentFixture<AltarekhKabelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltarekhKabelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AltarekhKabelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
