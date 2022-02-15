import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakreratBaadPage } from './takrerat-baad.page';

describe('TakreratBaadPage', () => {
  let component: TakreratBaadPage;
  let fixture: ComponentFixture<TakreratBaadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakreratBaadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakreratBaadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
