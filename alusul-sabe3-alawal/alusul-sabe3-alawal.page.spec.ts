import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulSabe3AlawalPage } from './alusul-sabe3-alawal.page';

describe('AlusulSabe3AlawalPage', () => {
  let component: AlusulSabe3AlawalPage;
  let fixture: ComponentFixture<AlusulSabe3AlawalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulSabe3AlawalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulSabe3AlawalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
