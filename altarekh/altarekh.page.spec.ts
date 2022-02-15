import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AltarekhPage } from './altarekh.page';

describe('AltarekhPage', () => {
  let component: AltarekhPage;
  let fixture: ComponentFixture<AltarekhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltarekhPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AltarekhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
