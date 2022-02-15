import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KefayazehejaPage } from './kefayazeheja.page';

describe('KefayazehejaPage', () => {
  let component: KefayazehejaPage;
  let fixture: ComponentFixture<KefayazehejaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KefayazehejaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KefayazehejaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
