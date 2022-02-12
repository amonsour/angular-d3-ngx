import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VerticalBarChartComponent  } from './components/vertical-bar-chart/vertical-bar-chart.component';
import { PieChartComponent  } from './components/pie-chart/pie-chart.component';
import { GroupedVerticalBarChartComponent } from './components/grouped-vertical-bar-chart/grouped-vertical-bar-chart.component';

const routes: Routes = [
  { path: '', redirectTo: 'vertical-bar', pathMatch: 'full' },
  { path: 'vertical-bar', component: VerticalBarChartComponent },
  { path: 'pie', component: PieChartComponent },
  { path: 'grouped-vertical-bar', component: GroupedVerticalBarChartComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
