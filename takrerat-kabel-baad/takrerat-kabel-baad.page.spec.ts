import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakreratKabelBaadPage } from './takrerat-kabel-baad.page';

describe('TakreratKabelBaadPage', () => {
  let component: TakreratKabelBaadPage;
  let fixture: ComponentFixture<TakreratKabelBaadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakreratKabelBaadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakreratKabelBaadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
