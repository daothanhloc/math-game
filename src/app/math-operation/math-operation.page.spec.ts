import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MathOperationPage } from './math-operation.page';

describe('MathOperationPage', () => {
  let component: MathOperationPage;
  let fixture: ComponentFixture<MathOperationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathOperationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MathOperationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
