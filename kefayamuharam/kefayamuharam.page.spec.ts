import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KefayamuharamPage } from './kefayamuharam.page';

describe('KefayamuharamPage', () => {
  let component: KefayamuharamPage;
  let fixture: ComponentFixture<KefayamuharamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KefayamuharamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KefayamuharamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
