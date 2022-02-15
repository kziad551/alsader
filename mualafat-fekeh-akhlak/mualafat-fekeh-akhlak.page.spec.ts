import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MualafatFekehAkhlakPage } from './mualafat-fekeh-akhlak.page';

describe('MualafatFekehAkhlakPage', () => {
  let component: MualafatFekehAkhlakPage;
  let fixture: ComponentFixture<MualafatFekehAkhlakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MualafatFekehAkhlakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MualafatFekehAkhlakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
