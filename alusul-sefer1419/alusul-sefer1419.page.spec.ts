import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulSefer1419Page } from './alusul-sefer1419.page';

describe('AlusulSefer1419Page', () => {
  let component: AlusulSefer1419Page;
  let fixture: ComponentFixture<AlusulSefer1419Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulSefer1419Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulSefer1419Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
