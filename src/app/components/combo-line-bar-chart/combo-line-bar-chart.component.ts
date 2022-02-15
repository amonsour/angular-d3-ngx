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
  lineChartSeries: any = [];

  week: string[] = dayjs.weekdays();

  width: number = 700;
  height: number = 300;
  fitContainer: boolean = false;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = 'Legend';
  legendPosition = LegendPosition.Below;
  showXAxisLabel = true;
  tooltipDisabled = false;
  showText = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'GDP Per Capita';
  showGridLines = true;
  innerPadding = '10%';
  barPadding = 8;
  groupPadding = 16;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;
  showSeriesOnHover = true;
  roundEdges: boolean = true;
  animations: boolean = true;
  xScaleMin: any;
  xScaleMax: any;
  showDataLabel: boolean = false;
  noBarWhenZero: boolean = true;
  trimXAxisTicks: boolean = true;
  trimYAxisTicks: boolean = true;
  rotateXAxisTicks: boolean = true;
  maxXAxisTickLength: number = 16;
  maxYAxisTickLength: number = 16;
  strokeColor: string = '#FFFFFF';
  strokeWidth: number = 2;
  
  // Combo Chart
  
  lineChartScheme: Color = {
    name: 'coolthree',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#01579b', '#7aa3e5', '#a8385d', '#00bfa5']
  };

  comboBarScheme: Color = {
    name: 'singleLightBlue',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#01579b']
  };

  showRightYAxisLabel: boolean = true;
  yAxisLabelRight: string = 'Utilization';

  constructor(private chartsService: ChartsService) {}

  ngOnInit(): void {
    this.getDataBar();
    this.getDataLine();
  }

  getDataBar(): void {
  this.chartsService.getBar().subscribe((data: any) => {
    this.barChart =  data;
  }); 
}

  getDataLine(): void {
    this.chartsService.getLine().subscribe((data: any) => {
      this.lineChartSeries =  data;
    });
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
    return `${data}%`;
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

