export interface Data {
    id: number;
    date: string;
    value: number;
  }

  export interface Device {
    id: number;
    device: string;
    visits: number;
  }

  export interface Satisfied {
    id: number;
    group: string;
    visits: number;
  }

  export interface barChart {
    name: string;
    value: number;
  }

  export interface lineChart {
    name: string;
    series: lineChartSeries[];
  }

  export interface lineChartSeries {
    name: string;
    value: number;
  }