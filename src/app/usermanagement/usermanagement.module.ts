import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermanagementRoutingModule } from './usermanagement-routing.module';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,FlexLayoutModule,MaterialModule, 
    UsermanagementRoutingModule
  ]
})
export class UsermanagementModule { }
