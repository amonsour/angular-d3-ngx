import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const data = [{"id":1,"date":"08/09/2021","value":212},
    {"id":2,"date":"11/22/2021","value":168},
    {"id":3,"date":"08/02/2021","value":249},
    {"id":4,"date":"09/18/2021","value":195},
    {"id":5,"date":"11/27/2021","value":198},
    {"id":6,"date":"05/15/2021","value":94},
    {"id":7,"date":"05/04/2021","value":190},
    {"id":8,"date":"10/10/2021","value":125},
    {"id":9,"date":"06/26/2021","value":248},
    {"id":10,"date":"05/05/2021","value":151},
    {"id":11,"date":"06/07/2021","value":211},
    {"id":12,"date":"12/04/2021","value":241},
    {"id":13,"date":"11/19/2021","value":99},
    {"id":14,"date":"09/02/2021","value":91},
    {"id":15,"date":"01/03/2022","value":183},
    {"id":16,"date":"09/11/2021","value":117},
    {"id":17,"date":"09/05/2021","value":98},
    {"id":18,"date":"04/28/2021","value":167},
    {"id":19,"date":"05/18/2021","value":201},
    {"id":20,"date":"12/04/2021","value":85},
    {"id":21,"date":"09/22/2021","value":216},
    {"id":22,"date":"05/09/2021","value":239},
    {"id":23,"date":"11/04/2021","value":183},
    {"id":24,"date":"02/11/2021","value":222},
    {"id":25,"date":"02/13/2021","value":231},
    {"id":26,"date":"02/04/2022","value":170},
    {"id":27,"date":"05/23/2021","value":97},
    {"id":28,"date":"02/07/2022","value":170},
    {"id":29,"date":"03/22/2021","value":239},
    {"id":30,"date":"04/20/2021","value":227},
    {"id":31,"date":"04/28/2021","value":173},
    {"id":32,"date":"09/06/2021","value":99},
    {"id":33,"date":"01/28/2022","value":111},
    {"id":34,"date":"08/29/2021","value":89},
    {"id":35,"date":"10/21/2021","value":119},
    {"id":36,"date":"03/28/2021","value":216},
    {"id":37,"date":"05/04/2021","value":207},
    {"id":38,"date":"08/01/2021","value":167},
    {"id":39,"date":"08/30/2021","value":103},
    {"id":40,"date":"11/16/2021","value":167},
    {"id":41,"date":"10/24/2021","value":227},
    {"id":42,"date":"03/19/2021","value":152},
    {"id":43,"date":"01/20/2022","value":94},
    {"id":44,"date":"07/06/2021","value":239},
    {"id":45,"date":"09/11/2021","value":227},
    {"id":46,"date":"02/04/2022","value":181},
    {"id":47,"date":"07/21/2021","value":245},
    {"id":48,"date":"07/28/2021","value":124},
    {"id":49,"date":"07/29/2021","value":248},
    {"id":50,"date":"09/13/2021","value":179},
    {"id":51,"date":"01/18/2022","value":107},
    {"id":52,"date":"06/15/2021","value":212},
    {"id":53,"date":"01/01/2022","value":101},
    {"id":54,"date":"11/20/2021","value":213},
    {"id":55,"date":"11/30/2021","value":156},
    {"id":56,"date":"07/13/2021","value":138},
    {"id":57,"date":"01/14/2022","value":161},
    {"id":58,"date":"11/08/2021","value":93},
    {"id":59,"date":"01/26/2022","value":111},
    {"id":60,"date":"01/15/2022","value":160},
    {"id":61,"date":"04/29/2021","value":246},
    {"id":62,"date":"06/04/2021","value":209},
    {"id":63,"date":"12/03/2021","value":149},
    {"id":64,"date":"06/22/2021","value":149},
    {"id":65,"date":"10/02/2021","value":217},
    {"id":66,"date":"07/11/2021","value":85},
    {"id":67,"date":"02/21/2021","value":208},
    {"id":68,"date":"06/28/2021","value":209},
    {"id":69,"date":"07/20/2021","value":206},
    {"id":70,"date":"11/12/2021","value":163},
    {"id":71,"date":"04/09/2021","value":123},
    {"id":72,"date":"08/20/2021","value":233},
    {"id":73,"date":"05/02/2021","value":172},
    {"id":74,"date":"11/07/2021","value":183},
    {"id":75,"date":"06/30/2021","value":219},
    {"id":76,"date":"05/27/2021","value":166},
    {"id":77,"date":"03/06/2021","value":235},
    {"id":78,"date":"08/01/2021","value":214},
    {"id":79,"date":"02/05/2022","value":236},
    {"id":80,"date":"03/05/2021","value":164},
    {"id":81,"date":"07/30/2021","value":139},
    {"id":82,"date":"11/19/2021","value":182},
    {"id":83,"date":"07/14/2021","value":139},
    {"id":84,"date":"02/07/2022","value":155},
    {"id":85,"date":"06/26/2021","value":206},
    {"id":86,"date":"12/24/2021","value":112},
    {"id":87,"date":"08/24/2021","value":190},
    {"id":88,"date":"12/20/2021","value":250},
    {"id":89,"date":"07/26/2021","value":92},
    {"id":90,"date":"03/07/2021","value":135},
    {"id":91,"date":"04/12/2021","value":218},
    {"id":92,"date":"03/12/2021","value":227},
    {"id":93,"date":"09/16/2021","value":117},
    {"id":94,"date":"08/02/2021","value":119},
    {"id":95,"date":"01/17/2022","value":129},
    {"id":96,"date":"06/25/2021","value":175},
    {"id":97,"date":"01/25/2022","value":175},
    {"id":98,"date":"03/27/2021","value":166},
    {"id":99,"date":"06/18/2021","value":231},
    {"id":100,"date":"10/04/2021","value":117}];

    const device = [{
      "id": 1,
      "device": "Desktop",
      "visits": 238
    }, {
      "id": 2,
      "device": "Mobile",
      "visits": 106
    }, {
      "id": 3,
      "device": "Tablet",
      "visits": 72
    }, {
      "id": 4,
      "device": "Other",
      "visits": 40
    }];

    const satisfied = [{
      "id": 1,
      "group": "Yes",
      "visits": 238
    }, {
      "id": 2,
      "group": "No",
      "visits": 106
    }];

    return {data, device, satisfied};
  }
}