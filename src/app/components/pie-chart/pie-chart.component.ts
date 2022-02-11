import { Component, OnInit } from '@angular/core';
import { Color, ScaleType, LegendPosition } from '@swimlane/ngx-charts';
import { HttpHeaders } from '@angular/common/http';
import { ChartsService } from '../../charts.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})

export class PieChartComponent implements OnInit {

  // data
  single = [];

  // options
  showXAxis = false
  showYAxis = true;
  gradient = false;
  showLegend = true;
  doughnut = true;
  legendPosition = LegendPosition.Below;
  roundEdges = false;

  colorScheme: Color = {
    group: ScaleType.Ordinal,
    name: 'daScheme',
    selectable: true,
    domain: ['#0D47A1', '#F57F17'],
  };

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private chartsService: ChartsService) {}

    ngOnInit(): void {
      this.getData();
    }
  
    getData(): void {
      this.chartsService.getSatisfied()
      .subscribe((data: any) => {
        this.single = data.map((document: any) => ({          
          name: document.group,
          value: document.visits,
        }));
      });
    }

  onSelect(event: any) {
    console.log(event);
  }
}
