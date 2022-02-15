import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MualafatKetabBay3Page } from './mualafat-ketab-bay3.page';

describe('MualafatKetabBay3Page', () => {
  let component: MualafatKetabBay3Page;
  let fixture: ComponentFixture<MualafatKetabBay3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MualafatKetabBay3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MualafatKetabBay3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
