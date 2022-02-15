import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulRabe3Alawal1417Page } from './alusul-rabe3-alawal1417.page';

describe('AlusulRabe3Alawal1417Page', () => {
  let component: AlusulRabe3Alawal1417Page;
  let fixture: ComponentFixture<AlusulRabe3Alawal1417Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulRabe3Alawal1417Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulRabe3Alawal1417Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
