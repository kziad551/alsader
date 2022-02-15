import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulSefer1418Page } from './alusul-sefer1418.page';

describe('AlusulSefer1418Page', () => {
  let component: AlusulSefer1418Page;
  let fixture: ComponentFixture<AlusulSefer1418Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulSefer1418Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulSefer1418Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
