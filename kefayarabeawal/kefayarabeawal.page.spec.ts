import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KefayarabeawalPage } from './kefayarabeawal.page';

describe('KefayarabeawalPage', () => {
  let component: KefayarabeawalPage;
  let fixture: ComponentFixture<KefayarabeawalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KefayarabeawalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KefayarabeawalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
