import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZekraSanawyaLelsayedSuwarPage } from './zekra-sanawya-lelsayed-suwar.page';

describe('ZekraSanawyaLelsayedSuwarPage', () => {
  let component: ZekraSanawyaLelsayedSuwarPage;
  let fixture: ComponentFixture<ZekraSanawyaLelsayedSuwarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZekraSanawyaLelsayedSuwarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZekraSanawyaLelsayedSuwarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
