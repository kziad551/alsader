import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KefayajamadeawalPage } from './kefayajamadeawal.page';

describe('KefayajamadeawalPage', () => {
  let component: KefayajamadeawalPage;
  let fixture: ComponentFixture<KefayajamadeawalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KefayajamadeawalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KefayajamadeawalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
