import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getSensorName'
})
export class GetSensorNamePipe implements PipeTransform {

  transform(stationId: string, stations: any[]): unknown {
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
