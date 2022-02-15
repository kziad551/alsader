import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlkutobAkaedeyaBaedPage } from './alkutob-akaedeya-baed.page';

describe('AlkutobAkaedeyaBaedPage', () => {
  let component: AlkutobAkaedeyaBaedPage;
  let fixture: ComponentFixture<AlkutobAkaedeyaBaedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlkutobAkaedeyaBaedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlkutobAkaedeyaBaedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
