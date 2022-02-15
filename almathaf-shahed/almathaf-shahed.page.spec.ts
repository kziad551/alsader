import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlmathafShahedPage } from './almathaf-shahed.page';

describe('AlmathafShahedPage', () => {
  let component: AlmathafShahedPage;
  let fixture: ComponentFixture<AlmathafShahedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmathafShahedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlmathafShahedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
