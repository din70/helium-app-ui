import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import {MaterialModule} from '../material/material.module';


@NgModule({
  declarations: [MainNavComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[MainNavComponent]
})
export class SharedModule { }
