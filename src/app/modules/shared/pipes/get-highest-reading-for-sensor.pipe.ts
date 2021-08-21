import { Pipe, PipeTransform } from '@angular/core';
import { Reading } from "../../readings/components/edit-readings/edit-readings.component";

@Pipe({
  name: 'getHighestReadingForSensor'
})
export class GetHighestReadingForSensorPipe implements PipeTransform {

  transform(readings: Reading [], sensorId: string) {
    const readingsForSensor =  readings.filter((reading)=> {
      return reading.sensorId === sensorId
    })
    const sortedReadings =  readingsForSensor.sort((a, b) => {return a.value - b.value; });
    return sortedReadings[0];
  }

}
