import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakreratKabelPage } from './takrerat-kabel.page';

describe('TakreratKabelPage', () => {
  let component: TakreratKabelPage;
  let fixture: ComponentFixture<TakreratKabelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakreratKabelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakreratKabelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
