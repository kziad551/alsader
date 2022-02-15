import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulShawalPage } from './alusul-shawal.page';

describe('AlusulShawalPage', () => {
  let component: AlusulShawalPage;
  let fixture: ComponentFixture<AlusulShawalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulShawalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulShawalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
