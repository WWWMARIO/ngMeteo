import { Pipe, PipeTransform } from '@angular/core';
import { SensorType } from "../../sensors/components/edit-sensor-type-modal/edit-sensor-type-modal.component";

@Pipe({
  name: 'getSensorType'
})
export class GetSensorTypePipe implements PipeTransform {

  transform(sensorTypeId: string, sensorTypes: SensorType[]): SensorType {

    if (!sensorTypeId) {
      return null;
    }
    if (!sensorTypes) {
      return null;
    }
   const sensorType = sensorTypes.find((sensorType)=> {
    return sensorType.id === sensorTypeId;
   })
    return sensorType;
  }

}
