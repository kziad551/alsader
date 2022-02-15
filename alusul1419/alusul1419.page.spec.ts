import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Alusul1419Page } from './alusul1419.page';

describe('Alusul1419Page', () => {
  let component: Alusul1419Page;
  let fixture: ComponentFixture<Alusul1419Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alusul1419Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Alusul1419Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
