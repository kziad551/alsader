import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulSefer1417Page } from './alusul-sefer1417.page';

describe('AlusulSefer1417Page', () => {
  let component: AlusulSefer1417Page;
  let fixture: ComponentFixture<AlusulSefer1417Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulSefer1417Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulSefer1417Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
