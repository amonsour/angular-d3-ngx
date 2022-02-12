import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { DATE, DEVICE, SATISFIED, GROUPS } from './data';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const data = DATE;
    const device = DEVICE;
    const satisfied = SATISFIED;
    const groups = GROUPS;

    return { data, device, satisfied, groups };
  }
}