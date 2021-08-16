import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getLatestReadingForSensor'
})
export class GetLatestReadingForSensorPipe implements PipeTransform {

  transform(readings, sensorId) {
    const readingsForSensor =  readings.filter((reading)=> {
      return reading.sensorId === sensorId
    })
    const sortedReadings =  readingsForSensor.sort((a, b) => {return b.timeStamp.seconds - a.timeStamp.seconds; });
    return sortedReadings[0].value;
  }

}
