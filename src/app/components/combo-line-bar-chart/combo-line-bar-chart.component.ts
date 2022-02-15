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

  // options
  chartSize = [400, 450];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendPosition = LegendPosition.Below;
  showXAxisLabel = false;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Number of Visits';
  roundEdges = false;
  barPadding = 8;

  colorScheme: Color = {
    group: ScaleType.Ordinal,
    name: 'daScheme',
    selectable: true,
    domain: ['#B5C2CC', '#2E5EA7'],
  };

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

  onSelect(event: any) {
    console.log(event);
  }
}

