import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VerticalBarChartComponent  } from './components/vertical-bar-chart/vertical-bar-chart.component';
import { PieChartComponent  } from './components/pie-chart/pie-chart.component';
import { GroupedVerticalBarChartComponent } from './components/grouped-vertical-bar-chart/grouped-vertical-bar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { ComboLineBarChartComponent } from './components/combo-line-bar-chart/combo-line-bar-chart.component';

const routes: Routes = [
  { path: '', redirectTo: 'vertical-bar', pathMatch: 'full' },
  { path: 'vertical-bar', component: VerticalBarChartComponent },
  { path: 'pie', component: PieChartComponent },
  { path: 'grouped-vertical-bar', component: GroupedVerticalBarChartComponent },
  { path: 'combo-line-bar', component: ComboLineBarChartComponent },
  { path: 'line-chart', component: LineChartComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
