import { Component, OnInit } from '@angular/core';
import { Color, ScaleType, LegendPosition } from '@swimlane/ngx-charts';
import { HttpHeaders } from '@angular/common/http';
import { ChartsService } from '../../charts.service';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.css'],
})
export class VerticalBarChartComponent implements OnInit {
  // data
  single = [];

  // options
  showXAxis = false;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendPosition = LegendPosition.Below;
  showXAxisLabel = false;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Number of Visits';
  roundEdges = false;
  barPadding = 25;

  colorScheme: Color = {
    group: ScaleType.Ordinal,
    name: 'daScheme',
    selectable: true,
    domain: ['#2E5EA7', '#64B5F6', '#26A69A', '#FBC02D'],
  };

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private chartsService: ChartsService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.chartsService.getDevice().subscribe((data: any) => {
      this.single = data.map((document: any) => ({
        name: document.device,
        value: document.visits,
      }));
    });
  }

  onSelect(event: any) {
    console.log(event);
  }
}
