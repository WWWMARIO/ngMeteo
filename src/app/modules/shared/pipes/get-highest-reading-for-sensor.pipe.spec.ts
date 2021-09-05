import { GetHighestReadingForSensorPipe } from './get-highest-reading-for-sensor.pipe';

describe('GetHighestReadingForSensorPipe', () => {
  const testData = [
    {
      sensorId: 'j6jMOYDm3QJLkHrIrSLw',
      timeStamp: {
        seconds: 1629832280,
        nanoseconds: 0,
      },
      value: 25.35782,
      id: '0DDClHvHFuNfMPqZxnar',
    },
    {
      value: 0.02,
      sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
      timeStamp: {
        seconds: 1629877745,
        nanoseconds: 0,
      },
      id: '3sDlhHz6SAhVhefvBSV2',
    },
    {
      sensorId: 'J2WEQArcfOdR67NrhcVE',
      timeStamp: {
        seconds: 1629835880,
        nanoseconds: 0,
      },
      value: 978.02844,
      id: '4Bexo8PzMP2ePSH2h04z',
    },
    {
      value: 48.11322,
      sensorId: 'G4sLf9DOaxBOmjGLmDU8',
      timeStamp: {
        seconds: 1629839480,
        nanoseconds: 0,
      },
      id: '4MNWUK4jinCY1VbFIeFy',
    },
    {
      timeStamp: {
        seconds: 1629740859,
        nanoseconds: 0,
      },
      sensorId: 'G4sLf9DOaxBOmjGLmDU8',
      value: 50.12436,
      id: '6RGnLu2BO8VtdNWnelAN',
    },
    {
      sensorId: 'j6jMOYDm3QJLkHrIrSLw',
      timeStamp: {
        seconds: 1629750417,
        nanoseconds: 0,
      },
      value: 25.49935,
      id: '6Tdj8rAPY3HmnNRnegGk',
    },
    {
      timeStamp: {
        seconds: 1629744459,
        nanoseconds: 0,
      },
      sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
      value: 0.02,
      id: '7VlNhKlUQT5kViRmMQu2',
    },
    {
      value: 25.12016,
      sensorId: 'j6jMOYDm3QJLkHrIrSLw',
      timeStamp: {
        seconds: 1629746817,
        nanoseconds: 0,
      },
      id: 'AlJb5lZL1choLNz3gw8X',
    },
    {
      sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
      timeStamp: {
        seconds: 1629835880,
        nanoseconds: 0,
      },
      value: 0.03,
      id: 'CGw5sbMzsS9jckxvx4tH',
    },
    {
      value: 54.0766,
      timeStamp: {
        seconds: 1629832280,
        nanoseconds: 0,
      },
      sensorId: 'G4sLf9DOaxBOmjGLmDU8',
      id: 'DIsTeqhbcXczmNEjYBGM',
    },
    {
      sensorId: 'G4sLf9DOaxBOmjGLmDU8',
      timeStamp: {
        seconds: 1639877745,
        nanoseconds: 0,
      },
      value: 53.43252,
      id: 'FDLprwZ2UFwJ113ZruYA',
    },
    {
      value: 25.59815,
      sensorId: 'j6jMOYDm3QJLkHrIrSLw',
      timeStamp: {
        seconds: 1629944459,
        nanoseconds: 0,
      },
      id: 'GvJwbTZUzw97zXF8NUZQ',
    },
    {
      value: 979.2146,
      sensorId: 'J2WEQArcfOdR67NrhcVE',
      timeStamp: {
        seconds: 1629746817,
        nanoseconds: 0,
      },
      id: 'J9ttPw4sU8x39y2y3L0A',
    },
    {
      sensorId: 'J2WEQArcfOdR67NrhcVE',
      timeStamp: {
        seconds: 1629740859,
        nanoseconds: 0,
      },
      value: 978.52429,
      id: 'KKNMoxGJ2VIqP0rkVdHe',
    },
    {
      timeStamp: {
        seconds: 1629877745,
        nanoseconds: 0,
      },
      value: 24.30037,
      sensorId: 'j6jMOYDm3QJLkHrIrSLw',
      id: 'LE984vjCgsF6VxpjE5qR',
    },
    {
      value: 0.03,
      timeStamp: {
        seconds: 1629740859,
        nanoseconds: 0,
      },
      sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
      id: 'McZZ5OTT07VYj2zsE9ix',
    },
    {
      sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
      value: 0.04,
      timeStamp: {
        seconds: 1629750417,
        nanoseconds: 0,
      },
      id: 'NXcZJH9HBLUhkNwZUATJ',
    },
    {
      value: 24.94926,
      sensorId: 'j6jMOYDm3QJLkHrIrSLw',
      timeStamp: {
        seconds: 1629740859,
        nanoseconds: 0,
      },
      id: 'Na0P3H9wSjfRm3p8pf3W',
    },
    {
      timeStamp: {
        seconds: 1629660320,
        nanoseconds: 0,
      },
      value: 46.97337,
      sensorId: 'G4sLf9DOaxBOmjGLmDU8',
      id: 'PSn5vJCQHrvSV8GuHqbD',
    },
    {
      value: 48.00336,
      sensorId: 'G4sLf9DOaxBOmjGLmDU8',
      timeStamp: {
        seconds: 1629835880,
        nanoseconds: 0,
      },
      id: 'PiRmtWRbOaCZN5LWsykg',
    },
    {
      sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
      value: 0.02,
      timeStamp: {
        seconds: 1629663942,
        nanoseconds: 0,
      },
      id: 'SR0zMm13BegXB6hC8IZf',
    },
    {
      timeStamp: {
        seconds: 1629660320,
        nanoseconds: 0,
      },
      sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
      value: 0.02,
      id: 'WgVQ6QtibIjm4QR8ow9m',
    },
    {
      value: 0.02,
      timeStamp: {
        seconds: 1629746817,
        nanoseconds: 0,
      },
      sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
      id: 'XHLkgOmYXhVydMJXPUUI',
    },
    {
      sensorId: 'J2WEQArcfOdR67NrhcVE',
      value: 980.08954,
      timeStamp: {
        seconds: 1629663942,
        nanoseconds: 0,
      },
      id: 'XyKM1K9hRYpCCrzwTuHr',
    },
    {
      timeStamp: {
        seconds: 1629877745,
        nanoseconds: 0,
      },
      value: 979.65845,
      sensorId: 'J2WEQArcfOdR67NrhcVE',
      id: 'b8sLLGyXjoVTTAkQj9yR',
    },
    {
      sensorId: 'G4sLf9DOaxBOmjGLmDU8',
      timeStamp: {
        seconds: 1629750417,
        nanoseconds: 0,
      },
      value: 47.43725,
      id: 'bNd9J6Sj3IoTSmeJnS3T',
    },
    {
      sensorId: 'j6jMOYDm3QJLkHrIrSLw',
      timeStamp: {
        seconds: 1629663942,
        nanoseconds: 0,
      },
      value: 29.03479,
      id: 'cBIfOTiyiNvZoFIIZl4T',
    },
    {
      sensorId: 'G4sLf9DOaxBOmjGLmDU8',
      value: 49.61623,
      timeStamp: {
        seconds: 1629663942,
        nanoseconds: 0,
      },
      id: 'hLZqXOI2LUkAveBayItA',
    },
    {
      timeStamp: {
        seconds: 1629835880,
        nanoseconds: 0,
      },
      value: 25.48333,
      sensorId: 'j6jMOYDm3QJLkHrIrSLw',
      id: 'iqcfW7WZ4wHuYGJii1Sl',
    },
    {
      sensorId: 'G4sLf9DOaxBOmjGLmDU8',
      timeStamp: {
        seconds: 1629744459,
        nanoseconds: 0,
      },
      value: 47.62799,
      id: 'jgGrAdcKgOctJMVgztBN',
    },
    {
      sensorId: 'G4sLf9DOaxBOmjGLmDU8',
      value: 46.70787,
      timeStamp: {
        seconds: 1629660342,
        nanoseconds: 0,
      },
      id: 'kHbcVf2J0a4DXHjsQtZ6',
    },
    {
      timeStamp: {
        seconds: 1629660342,
        nanoseconds: 0,
      },
      value: 28.19371,
      sensorId: 'j6jMOYDm3QJLkHrIrSLw',
      id: 'ko6i8TmMvVPkW0zOIWac',
    },
    {
      sensorId: 'j6jMOYDm3QJLkHrIrSLw',
      timeStamp: {
        seconds: 1629660320,
        nanoseconds: 0,
      },
      value: 28.19371,
      id: 'l2XxVPqPdBUwfu9zMx3l',
    },
    {
      sensorId: 'J2WEQArcfOdR67NrhcVE',
      timeStamp: {
        seconds: 1629660342,
        nanoseconds: 0,
      },
      value: 979.29041,
      id: 'pOVxdxSSEQJhtdN322M3',
    },
    {
      sensorId: 'J2WEQArcfOdR67NrhcVE',
      value: 979.44177,
      timeStamp: {
        seconds: 1629750417,
        nanoseconds: 0,
      },
      id: 'qr1RgfXb2ryvRz7ULRgC',
    },
    {
      sensorId: 'J2WEQArcfOdR67NrhcVE',
      value: 978.13312,
      timeStamp: {
        seconds: 1629832280,
        nanoseconds: 0,
      },
      id: 'rwGmZJD80CkegEbBNRyX',
    },
    {
      value: 0.03,
      sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
      timeStamp: {
        seconds: 1629839480,
        nanoseconds: 0,
      },
      id: 'ry6xEnNEIsiuRrnU0jla',
    },
    {
      timeStamp: {
        seconds: 1629990342,
        nanoseconds: 0,
      },
      value: 0.02,
      sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
      id: 'uECHnGCOBMWkHNUomFz8',
    },
    {
      value: 47.56542,
      sensorId: 'G4sLf9DOaxBOmjGLmDU8',
      timeStamp: {
        seconds: 1629746817,
        nanoseconds: 0,
      },
      id: 'ufq4vOOHiTLTT2pX3iam',
    },
    {
      sensorId: 'J2WEQArcfOdR67NrhcVE',
      timeStamp: {
        seconds: 1629660320,
        nanoseconds: 0,
      },
      value: 979.29224,
      id: 'uySPu7A5GRKXFFIM7itk',
    },
    {
      sensorId: 'J2WEQArcfOdR67NrhcVE',
      value: 978.32471,
      timeStamp: {
        seconds: 1629839480,
        nanoseconds: 0,
      },
      id: 'vA23qNucSTXIVpN32MWg',
    },
    {
      timeStamp: {
        seconds: 1629832280,
        nanoseconds: 0,
      },
      sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
      value: 0.02,
      id: 'vVBFvKN39zma8VwUubCT',
    },
    {
      sensorId: 'J2WEQArcfOdR67NrhcVE',
      timeStamp: {
        seconds: 1639744459,
        nanoseconds: 0,
      },
      value: 979.22296,
      id: 'x23GRq9Q6SAxW7xRrsUj',
    },
    {
      timeStamp: {
        seconds: 1629839480,
        nanoseconds: 0,
      },
      sensorId: 'j6jMOYDm3QJLkHrIrSLw',
      value: 25.62753,
      id: 'zJws43CJzLKJlyvNMQku',
    },
  ];

  const data = [
    {
      sensorId: 'G4sLf9DOaxBOmjGLmDU8',
      value: 20,
      timeStamp: {seconds: 1629832280,nanoseconds: 0, },
      id: '0DDClHvHFuNfMPqZxnar',
    },
    {
      value: 30,
      sensorId: 'J2WEQArcfOdR67NrhcVE',
      timeStamp: {
        seconds: 1629877745,
        nanoseconds: 0,
      },
      id: '3sDlhHz6SAhVhefvBSV2',
    },
    {
      value: 28,
      sensorId: 'G4sLf9DOaxBOmjGLmDU8',
      timeStamp: {
        seconds: 1629877745,
        nanoseconds: 0,
      },
      id: '3sDlhHz6SAhVhefvBSV2',
    },

  ];

  const pipe = new GetHighestReadingForSensorPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('fetches highest reading for sensor id G4sLf9DOaxBOmjGLmDU8', () => {
    expect(pipe.transform(testData, 'G4sLf9DOaxBOmjGLmDU8')).toEqual({
      value: 54.0766,
      timeStamp: {
        seconds: 1629832280,
        nanoseconds: 0,
      },
      sensorId: 'G4sLf9DOaxBOmjGLmDU8',
      id: 'DIsTeqhbcXczmNEjYBGM',
    });
  });

  it('fetches highest reading for sensor id J2WEQArcfOdR67NrhcVE', () => {
    expect(pipe.transform(testData, 'J2WEQArcfOdR67NrhcVE')).toEqual({
      sensorId: 'J2WEQArcfOdR67NrhcVE',
      value: 980.08954,
      timeStamp: {
        seconds: 1629663942,
        nanoseconds: 0,
      },
      id: 'XyKM1K9hRYpCCrzwTuHr',
    });
  });

  it('fetches highest reading for sensor id LY9xZ38Jq0iM1A4N2QZy', () => {
    expect(pipe.transform(testData, 'LY9xZ38Jq0iM1A4N2QZy')).toEqual({
      sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
      value: 0.04,
      timeStamp: {
        seconds: 1629750417,
        nanoseconds: 0,
      },
      id: 'NXcZJH9HBLUhkNwZUATJ',
    });
  });

  it('fetches highest reading for sensor id j6jMOYDm3QJLkHrIrSLw', () => {
    expect(pipe.transform(testData, 'j6jMOYDm3QJLkHrIrSLw')).toEqual({
      sensorId: 'j6jMOYDm3QJLkHrIrSLw',
      timeStamp: {
        seconds: 1629663942,
        nanoseconds: 0,
      },
      value: 29.03479,
      id: 'cBIfOTiyiNvZoFIIZl4T',
    });
  });

  it('fetch null when no readings list provided', () => {
    expect(pipe.transform(undefined, 'j6jMOYDm3QJLkHrIrSLw')).toBe(null);
  });

  it('fetch null strings when no sensor id  provided', () => {
    expect(pipe.transform(testData, '')).toBe(null);
  });

  it('fetches highest reading for sensor id G4sLf9DOaxBOmjGLmDU8', () => {
    expect(pipe.transform(data, 'G4sLf9DOaxBOmjGLmDU8')).toEqual( {
      value: 28,
      sensorId: 'G4sLf9DOaxBOmjGLmDU8',
      timeStamp: {
        seconds: 1629877745,
        nanoseconds: 0,
      },
      id: '3sDlhHz6SAhVhefvBSV2',
    },);
  });

  it('finds no data for sensor id j6jMOYDm3QJLkHrIrSLw', () => {
    expect(pipe.transform(data, 'j6jMOYDm3QJLkHrIrSLw')).toEqual(undefined);
  });
});
