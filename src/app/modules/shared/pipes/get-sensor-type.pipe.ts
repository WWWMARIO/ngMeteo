import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getSensorType'
})
export class GetSensorTypePipe implements PipeTransform {

  transform(sensorTypeId: string, sensorTypes: any[]): unknown {
    if (!sensorTypeId) {
      return '';
    }
    if (!sensorTypes) {
      return '';
    }
   const sensorType = sensorTypes.find((sensorType)=> {
    return sensorType.id === sensorTypeId;
   })
    return sensorType.type;
  }

}
