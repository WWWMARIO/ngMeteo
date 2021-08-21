import { Pipe, PipeTransform } from '@angular/core';
import { SensorType } from "../../sensors/components/edit-sensor-type-modal/edit-sensor-type-modal.component";

@Pipe({
  name: 'getSensorType'
})
export class GetSensorTypePipe implements PipeTransform {

  transform(sensorTypeId: string, sensorTypes: SensorType[]): any {

    if (!sensorTypeId) {
      return '';
    }
    if (!sensorTypes) {
      return '';
    }
   const sensorType = sensorTypes.find((sensorType)=> {
    return sensorType.id === sensorTypeId;
   })
    return sensorType;
  }

}
