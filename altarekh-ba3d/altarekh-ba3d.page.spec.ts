import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AltarekhBa3dPage } from './altarekh-ba3d.page';

describe('AltarekhBa3dPage', () => {
  let component: AltarekhBa3dPage;
  let fixture: ComponentFixture<AltarekhBa3dPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltarekhBa3dPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AltarekhBa3dPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
