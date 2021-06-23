import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getStationName'
})
export class GetStationNamePipe implements PipeTransform {

  transform(stationId: string, stations: any[]): string {

    if (!stationId) {
      return '';
    }
    if (!stations) {
      return '';
    }
   const station = stations.find((station)=> {
    return station.id === stationId;
   })
    return station.name;
  }

}
