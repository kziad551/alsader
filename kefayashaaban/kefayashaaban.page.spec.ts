import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KefayashaabanPage } from './kefayashaaban.page';

describe('KefayashaabanPage', () => {
  let component: KefayashaabanPage;
  let fixture: ComponentFixture<KefayashaabanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KefayashaabanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KefayashaabanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
