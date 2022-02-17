import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { DATE, DEVICE, SATISFIED, GROUPS, BARCHART, LINECHART, BARCHART2 } from './data';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const data = DATE;
    const device = DEVICE;
    const satisfied = SATISFIED;
    const groups = GROUPS;
    const barChart = BARCHART;
    const barChart2 = BARCHART2;
    const lineChart = LINECHART;

    return { data, device, satisfied, groups, barChart, barChart2, lineChart };
  }
}