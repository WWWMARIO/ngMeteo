import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getLatestReadingForSensor'
})
export class GetLatestReadingForSensorPipe implements PipeTransform {

  transform(readings, sensorId) {

    if (!readings) {
      return null
    }
    if (!sensorId) {
      return null
    }


    const readingsForSensor =  readings.filter((reading)=> {
      return reading.sensorId === sensorId
    })
    const sortedReadings: any [] =  readingsForSensor?.sort((a, b) => {return b.timeStamp.seconds - a.timeStamp.seconds; });
    if (sortedReadings.length > 0) {
      return sortedReadings[0];
    } else {
      return null
    }

  }

}
