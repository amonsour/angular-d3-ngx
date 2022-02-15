import { Component, Input, OnInit } from '@angular/core';
import { ChartsService } from '../../charts.service';

@Component({
  selector: 'app-datatable',
  template: `
  <ngb-accordion #acc="ngbAccordion">
  <ngb-panel id="toggle-1" title="Show table data">
    <ng-template ngbPanelContent>

    <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col" sortable="name" (sort)="onSort($event)">Country</th>
      <th scope="col" sortable="area" (sort)="onSort($event)">Area</th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor="let d of data">
      <td>
        <ngb-highlight [result]="d.name"></ngb-highlight>
      </td>
      <td><ngb-highlight [result]="d.value | number"></ngb-highlight></td>
    </tr>
    </tbody>
  </table>
    </ng-template>
  </ngb-panel>
  </ngb-accordion>
  `,
})
export class DatatableComponent {

  @Input('data') data: string = '';

  constructor(private chartsService: ChartsService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.chartsService.getGroups().subscribe((data: any) => {
      //this.data =  data;
    });
  }

}
