import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AladabEshrakatAdabyaPage } from './aladab-eshrakat-adabya.page';

describe('AladabEshrakatAdabyaPage', () => {
  let component: AladabEshrakatAdabyaPage;
  let fixture: ComponentFixture<AladabEshrakatAdabyaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AladabEshrakatAdabyaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AladabEshrakatAdabyaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
