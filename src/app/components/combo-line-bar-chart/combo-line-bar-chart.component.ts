import { Component, OnInit } from '@angular/core';
import { Color, ScaleType, LegendPosition } from '@swimlane/ngx-charts';
import { ChartsService } from '../../charts.service';
import dayjs from 'dayjs';
import localeData  from 'dayjs/plugin/localeData';
dayjs.extend(localeData)

@Component({
  selector: 'app-combo-line-bar-chart',
  templateUrl: './combo-line-bar-chart.component.html',
  styleUrls: ['./combo-line-bar-chart.component.css']
})
export class ComboLineBarChartComponent implements OnInit {
  // data
  barChart: any = [];
  lineChart: any = [];
  data: any = [];

  week: string[] = dayjs.weekdays();


  view: [number, number];
  width: number = 1020;
  height: number = 400;
  fitContainer: boolean = true;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = 'Legend';
  legendPosition = LegendPosition.Below;
  showXAxisLabel = false;
  tooltipDisabled = false;
  showText = true;
  xAxisLabel = 'Days of Week';
  showYAxisLabel = true;
  yAxisLabel = 'Visits';
  showGridLines = true;
  barPadding = 6;
  groupPadding = 20;
  roundDomains = false;
  showSeriesOnHover = true;
  roundEdges: boolean = true;
  animations: boolean = true;
  xScaleMin: any;
  xScaleMax: any;
  showDataLabel: boolean = false;
  noBarWhenZero: boolean = false;
  rotateXAxisTicks: boolean = true;
  
  // Combo Chart
  
  lineChartScheme: Color = {
    name: 'cool',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#2E5EA7','#B5C2CC','#f37d35', '#fbbc4d']
  };

  comboBarScheme: Color = {
    name: 'daScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#2E5EA7','#B5C2CC']
  };

  showRightYAxisLabel: boolean = true;
  yAxisLabelRight: string = 'Call volume';

  constructor(private chartsService: ChartsService) {}

  ngOnInit() {
    this.getData();

    if (!this.fitContainer) {
      this.applyDimensions();
    }
  }

  applyDimensions() {
    this.view = [this.width-50, this.height];
  }

  getData(): void {
  this.chartsService.getBar2().subscribe((data: any) => {
    this.barChart =  data;
  }); 
    this.chartsService.getLine().subscribe((data: any) => {
      this.lineChart =  data;
    });
    
    /*
    this.data = {
      barChart: this.barChart,
      lineChart: this.lineChart,
    }
    */
  }

    /*
  **
  Combo Chart
  **
  [yLeftAxisScaleFactor]="yLeftAxisScale" and [yRightAxisScaleFactor]="yRightAxisScale"
  exposes the left and right min and max axis values for custom scaling, it is probably best to
  scale one axis in relation to the other axis but for flexibility to scale either the left or
  right axis both were exposed.
  **
  */

  yLeftAxisScale(min: any, max: any) {
    return { min: `${min}`, max: `${max}` };
  }

  yRightAxisScale(min: any, max: any) {
    return { min: `${min}`, max: `${max}` };
  }

  yLeftTickFormat(data: any) {
    return `${data.toLocaleString()}`;
  }

  yRightTickFormat(data: any) {
    return `${data.toLocaleString()}`;
  }
  /*
  **
  End of Combo Chart
  **
  */

  onSelect(event: any) {
    console.log(event);
  }
}

