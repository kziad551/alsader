import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZekraSanawyaLelsayedPage } from './zekra-sanawya-lelsayed.page';

describe('ZekraSanawyaLelsayedPage', () => {
  let component: ZekraSanawyaLelsayedPage;
  let fixture: ComponentFixture<ZekraSanawyaLelsayedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZekraSanawyaLelsayedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZekraSanawyaLelsayedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
