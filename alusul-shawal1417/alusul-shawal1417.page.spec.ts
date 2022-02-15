import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulShawal1417Page } from './alusul-shawal1417.page';

describe('AlusulShawal1417Page', () => {
  let component: AlusulShawal1417Page;
  let fixture: ComponentFixture<AlusulShawal1417Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulShawal1417Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulShawal1417Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
