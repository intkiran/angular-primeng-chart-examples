import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BarChartComponent } from '../bar-chart/bar-chart.component';




@NgModule({

  imports: [
    RouterModule.forRoot([
      { path: 'bar', component: BarChartComponent },

    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}