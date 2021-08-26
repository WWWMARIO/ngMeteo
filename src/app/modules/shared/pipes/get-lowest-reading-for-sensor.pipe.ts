import { Pipe, PipeTransform } from '@angular/core';
import { Reading } from "../../readings/components/edit-readings/edit-readings.component";

@Pipe({
  name: 'getLowestReadingForSensor'
})
export class GetLowestReadingForSensorPipe implements PipeTransform {

  transform(readings: Reading [], sensorId: string): any {
    if (!readings) {
      return null
    }
    if (!sensorId) {
      return null
    }
    const readingsForSensor =  readings.filter((reading)=> {
      return reading.sensorId === sensorId
    })
    const sortedReadings =  readingsForSensor.sort((a, b) => {return a.value - b.value; });
    return sortedReadings[0];
  }

}
