import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KefayaseferPage } from './kefayasefer.page';

describe('KefayaseferPage', () => {
  let component: KefayaseferPage;
  let fixture: ComponentFixture<KefayaseferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KefayaseferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KefayaseferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
