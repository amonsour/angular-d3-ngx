import { Component, OnInit } from '@angular/core';
import { Color, ScaleType, LegendPosition } from '@swimlane/ngx-charts';
import { ChartsService } from '../../charts.service';
import dayjs from 'dayjs';
import localeData  from 'dayjs/plugin/localeData';
dayjs.extend(localeData)

@Component({
  selector: 'app-grouped-vertical-bar-chart',
  templateUrl: './grouped-vertical-bar-chart.component.html',
  styleUrls: ['./grouped-vertical-bar-chart.component.css']
})
export class GroupedVerticalBarChartComponent implements OnInit {
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
    this.getData();
  }

  getData(): void {
    this.chartsService.getGroups().subscribe((data: any) => {
      this.single =  this.processData(data);
    });
  }

  processData(results: any) {
    let entry: any = [];
    let dateArray: any = [];

    for (const arr in results) {
      dateArray.push(new Date( results[arr].date ))
    }

    const maxDate = new Date(Math.max(...dateArray));
    const minDate = new Date(Math.min(...dateArray));
    const midDate = new Date((minDate.getTime() + maxDate.getTime()) / 2);

    dateArray = [];
    dateArray.push(minDate, maxDate, midDate);

    for (const weekday in this.week) {
      entry = [];
      for (const arr in results) {
        const day = dayjs( results[arr].date ).format('dddd');
        if ( this.week[weekday] === day ) {
          let name: string;
          entry.length == 0 ? name = ( dayjs(dateArray[0]).format('MMM D') + '-' + dayjs(dateArray[2]).format('MMM D') ) : name = ( dayjs(dateArray[2]).add(1, 'day').format('MMM D') + '-' + dayjs(dateArray[1]).format('MMM D') );
          entry.push({
            name: name,
            value: results[arr].value
          });
        }
      }
      this.multi.push({ name: this.week[weekday], series: entry }) 
  }
  console.log(JSON.stringify(this.multi))
    return this.multi;
  }

  onSelect(event: any) {
    console.log(event);
  }
}
