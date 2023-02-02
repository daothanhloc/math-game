import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MathOperationPage } from './math-operation.page';

const routes: Routes = [
  {
    path: '',
    component: MathOperationPage
  },
  {
    path: 'operation-item-quiz',
    loadChildren: () => import('./operation-item-quiz/operation-item-quiz.module').then( m => m.OperationItemQuizPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MathOperationPageRoutingModule {}
