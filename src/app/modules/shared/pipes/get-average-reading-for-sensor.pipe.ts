import { ValueConverter } from "@angular/compiler/src/render3/view/template";
import { Pipe, PipeTransform } from '@angular/core';
import { Reading } from "../../readings/components/edit-readings/edit-readings.component";

@Pipe({
  name: 'getAverageReadingForSensor'
})
export class GetAverageReadingForSensorPipe implements PipeTransform {

  transform(readings: Reading [], sensorId: string) {
    const readingsForSensor =  readings.filter((reading)=> {
      return reading.sensorId === sensorId
    })
    const totalV =  readingsForSensor.reduce((total, reading)=> {
      total = total + reading.value;
      return total;
    },0);
    return totalV/readingsForSensor.length;
  }

}
