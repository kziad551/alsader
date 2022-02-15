import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulShawal1418Page } from './alusul-shawal1418.page';

describe('AlusulShawal1418Page', () => {
  let component: AlusulShawal1418Page;
  let fixture: ComponentFixture<AlusulShawal1418Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulShawal1418Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulShawal1418Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
