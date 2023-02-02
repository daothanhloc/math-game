import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperationItemQuizPageRoutingModule } from './operation-item-quiz-routing.module';

import { OperationItemQuizPage } from './operation-item-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperationItemQuizPageRoutingModule
  ],
  declarations: [OperationItemQuizPage]
})
export class OperationItemQuizPageModule {}
