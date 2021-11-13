import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vot1Component } from './vot1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: Vot1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vot1RoutingModule { }
