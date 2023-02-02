import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationItemQuizPage } from './operation-item-quiz.page';

const routes: Routes = [
  {
    path: ':id',
    component: OperationItemQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationItemQuizPageRoutingModule {}
