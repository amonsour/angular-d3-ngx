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