import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KefayazekaadaPage } from './kefayazekaada.page';

describe('KefayazekaadaPage', () => {
  let component: KefayazekaadaPage;
  let fixture: ComponentFixture<KefayazekaadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KefayazekaadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KefayazekaadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
