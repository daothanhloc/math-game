import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MathOperationPageRoutingModule } from './math-operation-routing.module';

import { MathOperationPage } from './math-operation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MathOperationPageRoutingModule
  ],
  declarations: [MathOperationPage]
})
export class MathOperationPageModule {}
