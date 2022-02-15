import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KefayashawalPage } from './kefayashawal.page';

describe('KefayashawalPage', () => {
  let component: KefayashawalPage;
  let fixture: ComponentFixture<KefayashawalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KefayashawalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KefayashawalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
