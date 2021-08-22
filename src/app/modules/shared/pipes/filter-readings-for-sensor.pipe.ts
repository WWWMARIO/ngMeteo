import { Pipe, PipeTransform } from '@angular/core';
import { Reading } from "../../readings/components/edit-readings/edit-readings.component";

@Pipe({
  name: 'filterReadingsForSensor'
})
export class FilterReadingsForSensorPipe implements PipeTransform {

  transform(readings: Reading [], sensorId: string) {
    return readings.filter((reading)=> {
      return reading.sensorId === sensorId
    })
  }

}
