import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //<-- copy this.

import { NgbPopoverModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  NgbAccordion }  from '@ng-bootstrap/ng-bootstrap/accordion/accordion';


import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerticalBarChartComponent } from './components/vertical-bar-chart/vertical-bar-chart.component';
import { HorizontalBarChartComponent } from './components/horizontal-bar-chart/horizontal-bar-chart.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { CardComponent } from './components/card/card.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { GroupedVerticalBarChartComponent } from './components/grouped-vertical-bar-chart/grouped-vertical-bar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { ComboChartComponent, ComboSeriesVerticalComponent } from './components/combo-chart';
import { ComboLineBarChartComponent } from './components/combo-line-bar-chart/combo-line-bar-chart.component';
import { DatatableComponent } from './components/datatable/datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalBarChartComponent,
    HorizontalBarChartComponent,
    CardComponent,
    PieChartComponent,
    GroupedVerticalBarChartComponent,
    LineChartComponent,
    ComboChartComponent,
    ComboSeriesVerticalComponent,
    ComboLineBarChartComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgbPopoverModule,
    NgxChartsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
