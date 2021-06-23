import { GetStationNamePipe } from './get-station-name.pipe';

describe('GetStationNamePipe', () => {

  const firstTestId="6BlqNNrpO4LEoFzlFA6B";
  const secondTestId="AkmZPzjLUWXZzg3Rd9Kg";
  const testStationsList = [
    {
      "name": "druga stanica",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yagip.jpg/375px-Yagip.jpg",
      "description": "druga meteo stanica",
      "geoLocation": {
        "_lat": 22,
        "_long": 22
      },
      "id": "6BlqNNrpO4LEoFzlFA6B"
    },
    {
      "name": "prva stanica",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yagip.jpg/375px-Yagip.jpg",
      "geoLocation": {
        "_lat": 33,
        "_long": 33
      },
      "description": "prva meteo stanica",
      "id": "AkmZPzjLUWXZzg3Rd9Kg"
    },
    {
      "name": "cetvrta",
      "geoLocation": {
        "_lat": 55,
        "_long": 55
      },
      "imageUrl": "cetvrta",
      "description": "cetvrta",
      "id": "KZm1vypYk5NlCiDu1zmn"
    },
    {
      "description": "treca meteo stanica",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yagip.jpg/375px-Yagip.jpg",
      "name": "treca stanica",
      "geoLocation": {
        "_lat": 44,
        "_long": 44
      },
      "id": "oatSmuxz3x6Xn0sUlIH8"
    }
  ]




  const pipe = new GetStationNamePipe();
  it('fetches correct name for station id 6BlqNNrpO4LEoFzlFA6B', () => {
    expect(pipe.transform(firstTestId,testStationsList)).toBe('druga stanica');
  });

  it('fetches correct name for station id AkmZPzjLUWXZzg3Rd9Kg', () => {
    expect(pipe.transform(secondTestId,testStationsList)).toBe('prva stanica');
  });

  it('fetch empty strings when no station id provided', () => {
    expect(pipe.transform(undefined,testStationsList)).toBe('');
  });

  it('fetch empty strings when no stations list provided', () => {
    expect(pipe.transform(firstTestId,undefined)).toBe('');
  });
});
