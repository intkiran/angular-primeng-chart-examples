import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {  ToastModule, MessageService, ButtonModule, ChartModule } from 'primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { BarChartComponent } from '../bar-chart/bar-chart.component';

@NgModule({
  imports:      [ AppRoutingModule,BrowserModule,BrowserAnimationsModule, ToastModule,ButtonModule,ChartModule],
  declarations: [ AppComponent, BarChartComponent],
  bootstrap:    [ AppComponent ],
  providers:[MessageService],
  exports:[BarChartComponent]
})
export class AppModule { }
