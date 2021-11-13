import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Vot1RoutingModule } from './vot1-routing.module';
import { Vot1Component } from './vot1.component';
import { MaterialExampleModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Vot1Component
  ],
  imports: [
    CommonModule,
    Vot1RoutingModule,
    MaterialExampleModule,
    FormsModule
  ]
})
export class Vot1Module { }
