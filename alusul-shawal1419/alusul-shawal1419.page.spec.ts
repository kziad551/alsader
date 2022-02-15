import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulShawal1419Page } from './alusul-shawal1419.page';

describe('AlusulShawal1419Page', () => {
  let component: AlusulShawal1419Page;
  let fixture: ComponentFixture<AlusulShawal1419Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulShawal1419Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulShawal1419Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
