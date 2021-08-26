import { FilterReadingsForSensorPipe } from './filter-readings-for-sensor.pipe';

const testData = [
  {
    timeStamp: {
      seconds: 1629832280,
      nanoseconds: 0,
    },
    value: 25.35782,
    sensorId: 'j6jMOYDm3QJLkHrIrSLw',
    id: '0DDClHvHFuNfMPqZxnar',
  },
  {
    sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
    timeStamp: {
      seconds: 1629877745,
      nanoseconds: 0,
    },
    value: 0.02,
    id: '3sDlhHz6SAhVhefvBSV2',
  },
  {
    timeStamp: {
      seconds: 1629835880,
      nanoseconds: 0,
    },
    value: 978.02844,
    sensorId: 'J2WEQArcfOdR67NrhcVE',
    id: '4Bexo8PzMP2ePSH2h04z',
  },
  {
    timeStamp: {
      seconds: 1629839480,
      nanoseconds: 0,
    },
    sensorId: 'G4sLf9DOaxBOmjGLmDU8',
    value: 48.11322,
    id: '4MNWUK4jinCY1VbFIeFy',
  },
  {
    timeStamp: {
      seconds: 1629740859,
      nanoseconds: 0,
    },
    value: 50.12436,
    sensorId: 'G4sLf9DOaxBOmjGLmDU8',
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
    value: 0.02,
    timeStamp: {
      seconds: 1629744459,
      nanoseconds: 0,
    },
    sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
    id: '7VlNhKlUQT5kViRmMQu2',
  },
  {
    timeStamp: {
      seconds: 1629746817,
      nanoseconds: 0,
    },
    value: 25.12016,
    sensorId: 'j6jMOYDm3QJLkHrIrSLw',
    id: 'AlJb5lZL1choLNz3gw8X',
  },
  {
    sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
    value: 0.03,
    timeStamp: {
      seconds: 1629835880,
      nanoseconds: 0,
    },
    id: 'CGw5sbMzsS9jckxvx4tH',
  },
  {
    timeStamp: {
      seconds: 1629832280,
      nanoseconds: 0,
    },
    value: 48.0766,
    sensorId: 'G4sLf9DOaxBOmjGLmDU8',
    id: 'DIsTeqhbcXczmNEjYBGM',
  },
  {
    sensorId: 'G4sLf9DOaxBOmjGLmDU8',
    value: 53.43252,
    timeStamp: {
      seconds: 1629877745,
      nanoseconds: 0,
    },
    id: 'FDLprwZ2UFwJ113ZruYA',
  },
  {
    value: 25.59815,
    timeStamp: {
      seconds: 1629744459,
      nanoseconds: 0,
    },
    sensorId: 'j6jMOYDm3QJLkHrIrSLw',
    id: 'GvJwbTZUzw97zXF8NUZQ',
  },
  {
    value: 979.2146,
    timeStamp: {
      seconds: 1629746817,
      nanoseconds: 0,
    },
    sensorId: 'J2WEQArcfOdR67NrhcVE',
    id: 'J9ttPw4sU8x39y2y3L0A',
  },
  {
    timeStamp: {
      seconds: 1629740859,
      nanoseconds: 0,
    },
    value: 978.52429,
    sensorId: 'J2WEQArcfOdR67NrhcVE',
    id: 'KKNMoxGJ2VIqP0rkVdHe',
  },
  {
    value: 24.30037,
    timeStamp: {
      seconds: 1629877745,
      nanoseconds: 0,
    },
    sensorId: 'j6jMOYDm3QJLkHrIrSLw',
    id: 'LE984vjCgsF6VxpjE5qR',
  },
  {
    sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
    value: 0.03,
    timeStamp: {
      seconds: 1629740859,
      nanoseconds: 0,
    },
    id: 'McZZ5OTT07VYj2zsE9ix',
  },
  {
    sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
    timeStamp: {
      seconds: 1629750417,
      nanoseconds: 0,
    },
    value: 0.03,
    id: 'NXcZJH9HBLUhkNwZUATJ',
  },
  {
    sensorId: 'j6jMOYDm3QJLkHrIrSLw',
    value: 24.94926,
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
    sensorId: 'G4sLf9DOaxBOmjGLmDU8',
    value: 46.97337,
    id: 'PSn5vJCQHrvSV8GuHqbD',
  },
  {
    timeStamp: {
      seconds: 1629835880,
      nanoseconds: 0,
    },
    sensorId: 'G4sLf9DOaxBOmjGLmDU8',
    value: 48.00336,
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
    value: 0.02,
    sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
    timeStamp: {
      seconds: 1629660320,
      nanoseconds: 0,
    },
    id: 'WgVQ6QtibIjm4QR8ow9m',
  },
  {
    value: 0.02,
    sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
    timeStamp: {
      seconds: 1629746817,
      nanoseconds: 0,
    },
    id: 'XHLkgOmYXhVydMJXPUUI',
  },
  {
    value: 979.08954,
    timeStamp: {
      seconds: 1629663942,
      nanoseconds: 0,
    },
    sensorId: 'J2WEQArcfOdR67NrhcVE',
    id: 'XyKM1K9hRYpCCrzwTuHr',
  },
  {
    value: 979.65845,
    sensorId: 'J2WEQArcfOdR67NrhcVE',
    timeStamp: {
      seconds: 1629877745,
      nanoseconds: 0,
    },
    id: 'b8sLLGyXjoVTTAkQj9yR',
  },
  {
    value: 47.43725,
    timeStamp: {
      seconds: 1629750417,
      nanoseconds: 0,
    },
    sensorId: 'G4sLf9DOaxBOmjGLmDU8',
    id: 'bNd9J6Sj3IoTSmeJnS3T',
  },
  {
    timeStamp: {
      seconds: 1629663942,
      nanoseconds: 0,
    },
    value: 27.03479,
    sensorId: 'j6jMOYDm3QJLkHrIrSLw',
    id: 'cBIfOTiyiNvZoFIIZl4T',
  },
  {
    value: 49.61623,
    sensorId: 'G4sLf9DOaxBOmjGLmDU8',
    timeStamp: {
      seconds: 1629663942,
      nanoseconds: 0,
    },
    id: 'hLZqXOI2LUkAveBayItA',
  },
  {
    sensorId: 'j6jMOYDm3QJLkHrIrSLw',
    value: 25.48333,
    timeStamp: {
      seconds: 1629835880,
      nanoseconds: 0,
    },
    id: 'iqcfW7WZ4wHuYGJii1Sl',
  },
  {
    timeStamp: {
      seconds: 1629744459,
      nanoseconds: 0,
    },
    sensorId: 'G4sLf9DOaxBOmjGLmDU8',
    value: 47.62799,
    id: 'jgGrAdcKgOctJMVgztBN',
  },
  {
    timeStamp: {
      seconds: 1629660342,
      nanoseconds: 0,
    },
    sensorId: 'G4sLf9DOaxBOmjGLmDU8',
    value: 46.70787,
    id: 'kHbcVf2J0a4DXHjsQtZ6',
  },
  {
    sensorId: 'j6jMOYDm3QJLkHrIrSLw',
    value: 28.19371,
    timeStamp: {
      seconds: 1629660342,
      nanoseconds: 0,
    },
    id: 'ko6i8TmMvVPkW0zOIWac',
  },
  {
    value: 28.19371,
    sensorId: 'j6jMOYDm3QJLkHrIrSLw',
    timeStamp: {
      seconds: 1629660320,
      nanoseconds: 0,
    },
    id: 'l2XxVPqPdBUwfu9zMx3l',
  },
  {
    timeStamp: {
      seconds: 1629660342,
      nanoseconds: 0,
    },
    value: 979.29041,
    sensorId: 'J2WEQArcfOdR67NrhcVE',
    id: 'pOVxdxSSEQJhtdN322M3',
  },
  {
    timeStamp: {
      seconds: 1629750417,
      nanoseconds: 0,
    },
    sensorId: 'J2WEQArcfOdR67NrhcVE',
    value: 979.44177,
    id: 'qr1RgfXb2ryvRz7ULRgC',
  },
  {
    timeStamp: {
      seconds: 1629832280,
      nanoseconds: 0,
    },
    sensorId: 'J2WEQArcfOdR67NrhcVE',
    value: 978.13312,
    id: 'rwGmZJD80CkegEbBNRyX',
  },
  {
    timeStamp: {
      seconds: 1629839480,
      nanoseconds: 0,
    },
    sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
    value: 0.02,
    id: 'ry6xEnNEIsiuRrnU0jla',
  },
  {
    value: 0.02,
    timeStamp: {
      seconds: 1629660342,
      nanoseconds: 0,
    },
    sensorId: 'LY9xZ38Jq0iM1A4N2QZy',
    id: 'uECHnGCOBMWkHNUomFz8',
  },
  {
    timeStamp: {
      seconds: 1629746817,
      nanoseconds: 0,
    },
    value: 47.56542,
    sensorId: 'G4sLf9DOaxBOmjGLmDU8',
    id: 'ufq4vOOHiTLTT2pX3iam',
  },
  {
    value: 979.29224,
    timeStamp: {
      seconds: 1629660320,
      nanoseconds: 0,
    },
    sensorId: 'J2WEQArcfOdR67NrhcVE',
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
    value: 979.22296,
    timeStamp: {
      seconds: 1629744459,
      nanoseconds: 0,
    },
    id: 'x23GRq9Q6SAxW7xRrsUj',
  },
  {
    timeStamp: {
      seconds: 1629839480,
      nanoseconds: 0,
    },
    value: 25.62753,
    sensorId: 'j6jMOYDm3QJLkHrIrSLw',
    id: 'zJws43CJzLKJlyvNMQku',
  },
];

fdescribe('FilterReadingsForSensorPipe', () => {
  const pipe = new FilterReadingsForSensorPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('fetches readings for sensor id G4sLf9DOaxBOmjGLmDU8', () => {
    expect(pipe.transform(testData, 'G4sLf9DOaxBOmjGLmDU8')).toEqual([{"timeStamp":{"seconds":1629839480,"nanoseconds":0},"sensorId":"G4sLf9DOaxBOmjGLmDU8","value":48.11322,"id":"4MNWUK4jinCY1VbFIeFy"},{"timeStamp":{"seconds":1629740859,"nanoseconds":0},"value":50.12436,"sensorId":"G4sLf9DOaxBOmjGLmDU8","id":"6RGnLu2BO8VtdNWnelAN"},{"timeStamp":{"seconds":1629832280,"nanoseconds":0},"value":48.0766,"sensorId":"G4sLf9DOaxBOmjGLmDU8","id":"DIsTeqhbcXczmNEjYBGM"},{"sensorId":"G4sLf9DOaxBOmjGLmDU8","value":53.43252,"timeStamp":{"seconds":1629877745,"nanoseconds":0},"id":"FDLprwZ2UFwJ113ZruYA"},{"timeStamp":{"seconds":1629660320,"nanoseconds":0},"sensorId":"G4sLf9DOaxBOmjGLmDU8","value":46.97337,"id":"PSn5vJCQHrvSV8GuHqbD"},{"timeStamp":{"seconds":1629835880,"nanoseconds":0},"sensorId":"G4sLf9DOaxBOmjGLmDU8","value":48.00336,"id":"PiRmtWRbOaCZN5LWsykg"},{"value":47.43725,"timeStamp":{"seconds":1629750417,"nanoseconds":0},"sensorId":"G4sLf9DOaxBOmjGLmDU8","id":"bNd9J6Sj3IoTSmeJnS3T"},{"value":49.61623,"sensorId":"G4sLf9DOaxBOmjGLmDU8","timeStamp":{"seconds":1629663942,"nanoseconds":0},"id":"hLZqXOI2LUkAveBayItA"},{"timeStamp":{"seconds":1629744459,"nanoseconds":0},"sensorId":"G4sLf9DOaxBOmjGLmDU8","value":47.62799,"id":"jgGrAdcKgOctJMVgztBN"},{"timeStamp":{"seconds":1629660342,"nanoseconds":0},"sensorId":"G4sLf9DOaxBOmjGLmDU8","value":46.70787,"id":"kHbcVf2J0a4DXHjsQtZ6"},{"timeStamp":{"seconds":1629746817,"nanoseconds":0},"value":47.56542,"sensorId":"G4sLf9DOaxBOmjGLmDU8","id":"ufq4vOOHiTLTT2pX3iam"}]);
  });

   it('fetches readings for sensor id J2WEQArcfOdR67NrhcVE', () => {
     expect(pipe.transform(testData, 'J2WEQArcfOdR67NrhcVE')).toEqual([{"timeStamp":{"seconds":1629835880,"nanoseconds":0},"value":978.02844,"sensorId":"J2WEQArcfOdR67NrhcVE","id":"4Bexo8PzMP2ePSH2h04z"},{"value":979.2146,"timeStamp":{"seconds":1629746817,"nanoseconds":0},"sensorId":"J2WEQArcfOdR67NrhcVE","id":"J9ttPw4sU8x39y2y3L0A"},{"timeStamp":{"seconds":1629740859,"nanoseconds":0},"value":978.52429,"sensorId":"J2WEQArcfOdR67NrhcVE","id":"KKNMoxGJ2VIqP0rkVdHe"},{"value":979.08954,"timeStamp":{"seconds":1629663942,"nanoseconds":0},"sensorId":"J2WEQArcfOdR67NrhcVE","id":"XyKM1K9hRYpCCrzwTuHr"},{"value":979.65845,"sensorId":"J2WEQArcfOdR67NrhcVE","timeStamp":{"seconds":1629877745,"nanoseconds":0},"id":"b8sLLGyXjoVTTAkQj9yR"},{"timeStamp":{"seconds":1629660342,"nanoseconds":0},"value":979.29041,"sensorId":"J2WEQArcfOdR67NrhcVE","id":"pOVxdxSSEQJhtdN322M3"},{"timeStamp":{"seconds":1629750417,"nanoseconds":0},"sensorId":"J2WEQArcfOdR67NrhcVE","value":979.44177,"id":"qr1RgfXb2ryvRz7ULRgC"},{"timeStamp":{"seconds":1629832280,"nanoseconds":0},"sensorId":"J2WEQArcfOdR67NrhcVE","value":978.13312,"id":"rwGmZJD80CkegEbBNRyX"},{"value":979.29224,"timeStamp":{"seconds":1629660320,"nanoseconds":0},"sensorId":"J2WEQArcfOdR67NrhcVE","id":"uySPu7A5GRKXFFIM7itk"},{"sensorId":"J2WEQArcfOdR67NrhcVE","value":978.32471,"timeStamp":{"seconds":1629839480,"nanoseconds":0},"id":"vA23qNucSTXIVpN32MWg"},{"sensorId":"J2WEQArcfOdR67NrhcVE","value":979.22296,"timeStamp":{"seconds":1629744459,"nanoseconds":0},"id":"x23GRq9Q6SAxW7xRrsUj"}]);
   });

   it('fetches readings for sensor id LY9xZ38Jq0iM1A4N2QZy', () => {
    expect(pipe.transform(testData, 'LY9xZ38Jq0iM1A4N2QZy')).toEqual([{"sensorId":"LY9xZ38Jq0iM1A4N2QZy","timeStamp":{"seconds":1629877745,"nanoseconds":0},"value":0.02,"id":"3sDlhHz6SAhVhefvBSV2"},{"value":0.02,"timeStamp":{"seconds":1629744459,"nanoseconds":0},"sensorId":"LY9xZ38Jq0iM1A4N2QZy","id":"7VlNhKlUQT5kViRmMQu2"},{"sensorId":"LY9xZ38Jq0iM1A4N2QZy","value":0.03,"timeStamp":{"seconds":1629835880,"nanoseconds":0},"id":"CGw5sbMzsS9jckxvx4tH"},{"sensorId":"LY9xZ38Jq0iM1A4N2QZy","value":0.03,"timeStamp":{"seconds":1629740859,"nanoseconds":0},"id":"McZZ5OTT07VYj2zsE9ix"},{"sensorId":"LY9xZ38Jq0iM1A4N2QZy","timeStamp":{"seconds":1629750417,"nanoseconds":0},"value":0.03,"id":"NXcZJH9HBLUhkNwZUATJ"},{"sensorId":"LY9xZ38Jq0iM1A4N2QZy","value":0.02,"timeStamp":{"seconds":1629663942,"nanoseconds":0},"id":"SR0zMm13BegXB6hC8IZf"},{"value":0.02,"sensorId":"LY9xZ38Jq0iM1A4N2QZy","timeStamp":{"seconds":1629660320,"nanoseconds":0},"id":"WgVQ6QtibIjm4QR8ow9m"},{"value":0.02,"sensorId":"LY9xZ38Jq0iM1A4N2QZy","timeStamp":{"seconds":1629746817,"nanoseconds":0},"id":"XHLkgOmYXhVydMJXPUUI"},{"timeStamp":{"seconds":1629839480,"nanoseconds":0},"sensorId":"LY9xZ38Jq0iM1A4N2QZy","value":0.02,"id":"ry6xEnNEIsiuRrnU0jla"},{"value":0.02,"timeStamp":{"seconds":1629660342,"nanoseconds":0},"sensorId":"LY9xZ38Jq0iM1A4N2QZy","id":"uECHnGCOBMWkHNUomFz8"},{"timeStamp":{"seconds":1629832280,"nanoseconds":0},"sensorId":"LY9xZ38Jq0iM1A4N2QZy","value":0.02,"id":"vVBFvKN39zma8VwUubCT"}]);
  });

  it('fetches readings for sensor id j6jMOYDm3QJLkHrIrSLw', () => {
    expect(pipe.transform(testData, 'j6jMOYDm3QJLkHrIrSLw')).toEqual( [{"timeStamp":{"seconds":1629832280,"nanoseconds":0},"value":25.35782,"sensorId":"j6jMOYDm3QJLkHrIrSLw","id":"0DDClHvHFuNfMPqZxnar"},{"sensorId":"j6jMOYDm3QJLkHrIrSLw","timeStamp":{"seconds":1629750417,"nanoseconds":0},"value":25.49935,"id":"6Tdj8rAPY3HmnNRnegGk"},{"timeStamp":{"seconds":1629746817,"nanoseconds":0},"value":25.12016,"sensorId":"j6jMOYDm3QJLkHrIrSLw","id":"AlJb5lZL1choLNz3gw8X"},{"value":25.59815,"timeStamp":{"seconds":1629744459,"nanoseconds":0},"sensorId":"j6jMOYDm3QJLkHrIrSLw","id":"GvJwbTZUzw97zXF8NUZQ"},{"value":24.30037,"timeStamp":{"seconds":1629877745,"nanoseconds":0},"sensorId":"j6jMOYDm3QJLkHrIrSLw","id":"LE984vjCgsF6VxpjE5qR"},{"sensorId":"j6jMOYDm3QJLkHrIrSLw","value":24.94926,"timeStamp":{"seconds":1629740859,"nanoseconds":0},"id":"Na0P3H9wSjfRm3p8pf3W"},{"timeStamp":{"seconds":1629663942,"nanoseconds":0},"value":27.03479,"sensorId":"j6jMOYDm3QJLkHrIrSLw","id":"cBIfOTiyiNvZoFIIZl4T"},{"sensorId":"j6jMOYDm3QJLkHrIrSLw","value":25.48333,"timeStamp":{"seconds":1629835880,"nanoseconds":0},"id":"iqcfW7WZ4wHuYGJii1Sl"},{"sensorId":"j6jMOYDm3QJLkHrIrSLw","value":28.19371,"timeStamp":{"seconds":1629660342,"nanoseconds":0},"id":"ko6i8TmMvVPkW0zOIWac"},{"value":28.19371,"sensorId":"j6jMOYDm3QJLkHrIrSLw","timeStamp":{"seconds":1629660320,"nanoseconds":0},"id":"l2XxVPqPdBUwfu9zMx3l"},{"timeStamp":{"seconds":1629839480,"nanoseconds":0},"value":25.62753,"sensorId":"j6jMOYDm3QJLkHrIrSLw","id":"zJws43CJzLKJlyvNMQku"}]);
  });

   it('fetch null when no readings list provided', () => {
     expect(pipe.transform(undefined, 'j6jMOYDm3QJLkHrIrSLw')).toBe(null);
   });
  it('fetch null strings when no sensor id  provided', () => {
     expect(pipe.transform(testData, '')).toBe(null);
   });
});
