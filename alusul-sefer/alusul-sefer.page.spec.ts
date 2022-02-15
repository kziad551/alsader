import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulSeferPage } from './alusul-sefer.page';

describe('AlusulSeferPage', () => {
  let component: AlusulSeferPage;
  let fixture: ComponentFixture<AlusulSeferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulSeferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulSeferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
