import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperationItemQuizPage } from './operation-item-quiz.page';

describe('OperationItemQuizPage', () => {
  let component: OperationItemQuizPage;
  let fixture: ComponentFixture<OperationItemQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationItemQuizPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperationItemQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
