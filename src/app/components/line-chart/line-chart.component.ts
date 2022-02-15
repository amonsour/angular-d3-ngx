import { Component, OnInit } from '@angular/core';
import { Color, ScaleType, LegendPosition } from '@swimlane/ngx-charts';
import { ChartsService } from '../../charts.service';
import dayjs from 'dayjs';
import localeData  from 'dayjs/plugin/localeData';
dayjs.extend(localeData)

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  // data
  single: any = [];
  multi: any = [];

  week: string[] = dayjs.weekdays();

  // options
  chartSize = [400, 450];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  timeline = false;
  legendPosition = LegendPosition.Below;
  showXAxisLabel = false;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Number of Visits';

  colorScheme: Color = {
    group: ScaleType.Ordinal,
    name: 'daScheme',
    selectable: true,
    domain: ['#B5C2CC', '#2E5EA7'],
  };

  constructor(private chartsService: ChartsService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.chartsService.getGroups().subscribe((data: any) => {
      this.single =  this.processData(data);
    });
  }

  processData(results: any) {
    let entry: any = [];
    let entry2: any = [];
    let dateArray: any = [];

    for (const arr in results) {
      dateArray.push(new Date( results[arr].date ))
    }

    const maxDate = new Date(Math.max(...dateArray));
    const minDate = new Date(Math.min(...dateArray));
    const midDate = new Date((minDate.getTime() + maxDate.getTime()) / 2);

    dateArray = [];
    dateArray.push(minDate, maxDate, midDate);

      for (const arr in results) {
        const day = new Date(results[arr].date );

        if ( midDate > day ) {
          entry.push({
            name: dayjs(day).format('ddd'),
            value: results[arr].value
          });
        } else if ( midDate < day ) {
          entry2.push({
            name: dayjs(day).format('ddd'),
            value: results[arr].value
          });
        }
  }

  this.multi.push({ name: ( dayjs(dateArray[0]).format('MMM D') + '-' + dayjs(dateArray[2]).format('MMM D') ), series: entry }) 
  this.multi.push({ name: ( dayjs(dateArray[2]).add(1, 'day').format('MMM D') + '-' + dayjs(dateArray[1]).format('MMM D') ), series: entry2 }) 

  console.log(this.multi)
    return this.multi;
  }

  onSelect(event: any) {
    console.log(event);
  }
}
