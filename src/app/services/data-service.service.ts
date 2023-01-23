import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: Record<string, Object | null> = {};

  setOption = (key: string, value: any) => {
    this.data[key] = value;
  };

  getOption = () => this.data;
}
