import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Alusul1417Page } from './alusul1417.page';

describe('Alusul1417Page', () => {
  let component: Alusul1417Page;
  let fixture: ComponentFixture<Alusul1417Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alusul1417Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Alusul1417Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
