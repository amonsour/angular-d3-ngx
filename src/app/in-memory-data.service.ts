import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { DATE, DEVICE, SATISFIED } from './data';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const data = DATE;
    const device = DEVICE;
    const satisfied = SATISFIED;

    return { data, device, satisfied };
  }
}