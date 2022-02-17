import { Data, Satisfied, Device, barChart, lineChart } from './queries';

export const SATISFIED: Satisfied[] = [
  {
    id: 1,
    group: 'Yes',
    visits: 238,
  },
  {
    id: 2,
    group: 'No',
    visits: 106,
  },
];

export const DEVICE: Device[] = [
  {
    id: 1,
    device: 'Desktop',
    visits: 238,
  },
  {
    id: 2,
    device: 'Mobile',
    visits: 106,
  },
  {
    id: 3,
    device: 'Tablet',
    visits: 72,
  },
  {
    id: 4,
    device: 'Other',
    visits: 40,
  },
];

export const LINECHART: lineChart[] = [
  {
    name: 'Calls Apr 18-Apr 24',
    series: [
      {
        name: 'Sunday',
        value: 0,
      },
      {
        name: 'Monday',
        value: 80,
      },
      {
        value: 90,
        name: 'Tuesday',
      },
      {
        name: 'Wednesday',
        value: 75,
      },
      {
        value: 40,
        name: 'Thursday',
      },
      {
        name: 'Friday',
        value: 82,
      },
      {
        value: 5,
        name: 'Saturday',
      },
    ],
  },
  {
    name: 'Calls Apr 11-Apr 17',
    series: [
      {
        name: 'Sunday',
        value: 0,
      },
      {
        name: 'Monday',
        value: 42,
      },
      {
        value: 56,
        name: 'Tuesday',
      },
      {
        name: 'Wednesday',
        value: 65,
      },
      {
        value: 40,
        name: 'Thursday',
      },
      {
        name: 'Friday',
        value: 57,
      },
      {
        value: 12,
        name: 'Saturday',
      },
    ],
  },
];

export const BARCHART: barChart[] = [
  {
    name: 'Sunday',
    value: 0,
  },
  {
    name: 'Monday',
    value: 2345,
  },
  {
    name: 'Tuesday',
    value: 30000,
  },
  {
    name: 'Wednesday',
    value: 51236,
  },
  {
    name: 'Thursday',
    value: 30000,
  },
  {
    name: 'Friday',
    value: 51236,
  },
  {
    name: 'Saturday',
    value: 30000,
  },
];

export const BARCHART2: lineChart[] = [
  {
    name: 'Sunday',
    series: [
      { name: 'Aug 8-Aug 14', value: 212 },
      { name: 'Aug 15-Aug 21', value: 231 },
    ],
  },
  {
    name: 'Monday',
    series: [
      { name: 'Aug 8-Aug 14', value: 168 },
      { name: 'Aug 15-Aug 21', value: 150 },
    ],
  },
  {
    name: 'Tuesday',
    series: [
      { name: 'Aug 8-Aug 14', value: 249 },
      { name: 'Aug 15-Aug 21', value: 97 },
    ],
  },
  {
    name: 'Wednesday',
    series: [
      { name: 'Aug 8-Aug 14', value: 195 },
      { name: 'Aug 15-Aug 21', value: 170 },
    ],
  },
  {
    name: 'Thursday',
    series: [
      { name: 'Aug 8-Aug 14', value: 198 },
      { name: 'Aug 15-Aug 21', value: 239 },
    ],
  },
  {
    name: 'Friday',
    series: [
      { name: 'Aug 8-Aug 14', value: 94 },
      { name: 'Aug 15-Aug 21', value: 227 },
    ],
  },
  {
    name: 'Saturday',
    series: [
      { name: 'Aug 8-Aug 14', value: 190 },
      { name: 'Aug 15-Aug 21', value: 173 },
    ],
  },
];

export const GROUPS: Data[] = [
  { id: 1, date: '08/08/2021', value: 212 },
  { id: 2, date: '08/09/2021', value: 168 },
  { id: 3, date: '08/10/2021', value: 249 },
  { id: 4, date: '08/11/2021', value: 195 },
  { id: 5, date: '08/12/2021', value: 198 },
  { id: 6, date: '08/13/2021', value: 94 },
  { id: 7, date: '08/14/2021', value: 190 },
  { id: 8, date: '08/15/2021', value: 231 },
  { id: 9, date: '08/16/2021', value: 150 },
  { id: 10, date: '08/17/2021', value: 97 },
  { id: 11, date: '08/18/2021', value: 170 },
  { id: 12, date: '08/19/2021', value: 239 },
  { id: 13, date: '08/20/2021', value: 227 },
  { id: 14, date: '08/21/2021', value: 173 },
];

export const GROUP2: Data[] = [
  { id: 8, date: '08/15/2021', value: 231 },
  { id: 9, date: '08/16/2021', value: 150 },
  { id: 10, date: '08/17/2021', value: 97 },
  { id: 11, date: '08/18/2021', value: 170 },
  { id: 12, date: '08/19/2021', value: 239 },
  { id: 13, date: '08/20/2021', value: 227 },
  { id: 14, date: '08/21/2021', value: 173 },
];

export const DATE: Data[] = [
  { id: 1, date: '08/09/2021', value: 212 },
  { id: 2, date: '11/22/2021', value: 168 },
  { id: 3, date: '08/02/2021', value: 249 },
  { id: 4, date: '09/18/2021', value: 195 },
  { id: 5, date: '11/27/2021', value: 198 },
  { id: 6, date: '05/15/2021', value: 94 },
  { id: 7, date: '05/04/2021', value: 190 },
  { id: 8, date: '10/10/2021', value: 125 },
  { id: 9, date: '06/26/2021', value: 248 },
  { id: 10, date: '05/05/2021', value: 151 },
  { id: 11, date: '06/07/2021', value: 211 },
  { id: 12, date: '12/04/2021', value: 241 },
  { id: 13, date: '11/19/2021', value: 99 },
  { id: 14, date: '09/02/2021', value: 91 },
  { id: 15, date: '01/03/2022', value: 183 },
  { id: 16, date: '09/11/2021', value: 117 },
  { id: 17, date: '09/05/2021', value: 98 },
  { id: 18, date: '04/28/2021', value: 167 },
  { id: 19, date: '05/18/2021', value: 201 },
  { id: 20, date: '12/04/2021', value: 85 },
  { id: 21, date: '09/22/2021', value: 216 },
  { id: 22, date: '05/09/2021', value: 239 },
  { id: 23, date: '11/04/2021', value: 183 },
  { id: 24, date: '02/11/2021', value: 222 },
  { id: 25, date: '02/13/2021', value: 231 },
  { id: 26, date: '02/04/2022', value: 170 },
  { id: 27, date: '05/23/2021', value: 97 },
  { id: 28, date: '02/07/2022', value: 170 },
  { id: 29, date: '03/22/2021', value: 239 },
  { id: 30, date: '04/20/2021', value: 227 },
  { id: 31, date: '04/28/2021', value: 173 },
];
