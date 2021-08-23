import { SensorType } from "../../sensors/components/edit-sensor-type-modal/edit-sensor-type-modal.component";
import { GetSensorTypePipe } from './get-sensor-type.pipe';

describe('GetSensorTypePipe', () => {


  const firstTestId="kTzFZNYe45OCkIRWeI1X";
  const secondTestId="j4g7KV1qEtnGvj4ue4Zq";
  const sensorTypesList: SensorType[] = [
    {
      "type": "aaa",
      "unit": "aaaa",
      "id": "31wLXK7Bg59pXvVikvgO"
    },
    {
      "type": "Precipitation",
      "unit": "percent",
      "id": "j4g7KV1qEtnGvj4ue4Zq"
    },
    {
      "unit": "mphcc",
      "type": "speedd",
      "id": "kTzFZNYe45OCkIRWeI1X"
    }
  ]



  const pipe = new GetSensorTypePipe();

  it('create an instance', () => {

    expect(pipe).toBeTruthy();
  });

  it('fetches correct type for sensor id kTzFZNYe45OCkIRWeI1X', () => {
    expect(pipe.transform(firstTestId,sensorTypesList)).toBe(sensorTypesList[2]);
  });

  it('fetches correct type for sensor id j4g7KV1qEtnGvj4ue4Zq', () => {
    expect(pipe.transform(secondTestId,sensorTypesList)).toBe(sensorTypesList[1]);
  });

  it('fetch null when no sensor id provided', () => {
    expect(pipe.transform(undefined,sensorTypesList)).toBe(null);
  });

  it('fetch null when no sensors list provided', () => {
    expect(pipe.transform(firstTestId,undefined)).toBe(null);
  });


});
