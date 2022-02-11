import { Component, OnInit } from '@angular/core';
import { first, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Color, ScaleType, LegendPosition } from '@swimlane/ngx-charts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import dayjs from 'dayjs';
import { ChartsService } from '../../charts.service';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.css']
})
export class VerticalBarChartComponent implements OnInit {

  // data
  single = [];

  // options
  showXAxis = false
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendPosition = LegendPosition.Below;
  showXAxisLabel = false;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Number of Visits';
  roundEdges = false;
  barPadding = 100;

  colorScheme: Color = {
    group: ScaleType.Ordinal,
    name: 'daScheme',
    selectable: true,
    domain: ['#2E5EA7', '#64B5F6', '#26A69A', '#FBC02D'],
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
      this.chartsService.getDevice()
      .subscribe((data: any) => {
        this.single = data.map((document: any) => ({          
          name: document.device,
          value: document.visits,
        }));
      });
    }

  // ngOnInit(): void {
  //   //this.getData();

  //   fetch(this.dataUrl)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //     });

  //       // fetch('/api/overall-metrics' + window.location.search)
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     this.single = data.map((document: any) => ({ name: document.Date, value: document.Visits }));
  //   //   });
  // }

    /** GET data from the server */
    // getData(): Observable<Data[]> {
    //   return (this.http.get<Data[]>(this.dataUrl)).subscribe((data: any) => {
    //     this.single = data.map((document: any) => ({
    //       date: dayjs(document.date).format('MMM D'),
    //       value: document.value,
    //     }));
    //   })
    // }

  onSelect(event: any) {
    console.log(event);
  }
}
