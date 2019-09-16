import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import {MaterialModule} from '../material/material.module';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,ChartsModule,
    SharedModule,
    MaterialModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
