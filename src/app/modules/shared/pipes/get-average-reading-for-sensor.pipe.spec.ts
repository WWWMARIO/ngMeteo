import { GetAverageReadingForSensorPipe } from './get-average-reading-for-sensor.pipe';

describe('GetAverageReadingForSensorPipe', () => {

  const testData =[
    {
      "sensorId": "j6jMOYDm3QJLkHrIrSLw",
      "value": 25.35782,
      "timeStamp": {
        "seconds": 1629832280,
        "nanoseconds": 0
      },
      "id": "0DDClHvHFuNfMPqZxnar"
    },
    {
      "value": 0.02,
      "timeStamp": {
        "seconds": 1629877745,
        "nanoseconds": 0
      },
      "sensorId": "LY9xZ38Jq0iM1A4N2QZy",
      "id": "3sDlhHz6SAhVhefvBSV2"
    },
    {
      "timeStamp": {
        "seconds": 1629835880,
        "nanoseconds": 0
      },
      "value": 978.02844,
      "sensorId": "J2WEQArcfOdR67NrhcVE",
      "id": "4Bexo8PzMP2ePSH2h04z"
    },
    {
      "value": 48.11322,
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "timeStamp": {
        "seconds": 1629839480,
        "nanoseconds": 0
      },
      "id": "4MNWUK4jinCY1VbFIeFy"
    },
    {
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "timeStamp": {
        "seconds": 1629740859,
        "nanoseconds": 0
      },
      "value": 50.12436,
      "id": "6RGnLu2BO8VtdNWnelAN"
    },
    {
      "timeStamp": {
        "seconds": 1629750417,
        "nanoseconds": 0
      },
      "sensorId": "j6jMOYDm3QJLkHrIrSLw",
      "value": 25.49935,
      "id": "6Tdj8rAPY3HmnNRnegGk"
    },
    {
      "timeStamp": {
        "seconds": 1629744459,
        "nanoseconds": 0
      },
      "value": 0.02,
      "sensorId": "LY9xZ38Jq0iM1A4N2QZy",
      "id": "7VlNhKlUQT5kViRmMQu2"
    },
    {
      "timeStamp": {
        "seconds": 1629746817,
        "nanoseconds": 0
      },
      "sensorId": "j6jMOYDm3QJLkHrIrSLw",
      "value": 25.12016,
      "id": "AlJb5lZL1choLNz3gw8X"
    },
    {
      "timeStamp": {
        "seconds": 1629835880,
        "nanoseconds": 0
      },
      "sensorId": "LY9xZ38Jq0iM1A4N2QZy",
      "value": 0.03,
      "id": "CGw5sbMzsS9jckxvx4tH"
    },
    {
      "timeStamp": {
        "seconds": 1629832280,
        "nanoseconds": 0
      },
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "value": 48.0766,
      "id": "DIsTeqhbcXczmNEjYBGM"
    },
    {
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "timeStamp": {
        "seconds": 1629877745,
        "nanoseconds": 0
      },
      "value": 53.43252,
      "id": "FDLprwZ2UFwJ113ZruYA"
    },
    {
      "value": 25.59815,
      "timeStamp": {
        "seconds": 1629744459,
        "nanoseconds": 0
      },
      "sensorId": "j6jMOYDm3QJLkHrIrSLw",
      "id": "GvJwbTZUzw97zXF8NUZQ"
    },
    {
      "value": 979.2146,
      "sensorId": "J2WEQArcfOdR67NrhcVE",
      "timeStamp": {
        "seconds": 1629746817,
        "nanoseconds": 0
      },
      "id": "J9ttPw4sU8x39y2y3L0A"
    },
    {
      "value": 978.52429,
      "sensorId": "J2WEQArcfOdR67NrhcVE",
      "timeStamp": {
        "seconds": 1629740859,
        "nanoseconds": 0
      },
      "id": "KKNMoxGJ2VIqP0rkVdHe"
    },
    {
      "value": 24.30037,
      "timeStamp": {
        "seconds": 1629877745,
        "nanoseconds": 0
      },
      "sensorId": "j6jMOYDm3QJLkHrIrSLw",
      "id": "LE984vjCgsF6VxpjE5qR"
    },
    {
      "value": 0.03,
      "timeStamp": {
        "seconds": 1629740859,
        "nanoseconds": 0
      },
      "sensorId": "LY9xZ38Jq0iM1A4N2QZy",
      "id": "McZZ5OTT07VYj2zsE9ix"
    },
    {
      "value": 0.03,
      "sensorId": "LY9xZ38Jq0iM1A4N2QZy",
      "timeStamp": {
        "seconds": 1629750417,
        "nanoseconds": 0
      },
      "id": "NXcZJH9HBLUhkNwZUATJ"
    },
    {
      "timeStamp": {
        "seconds": 1629740859,
        "nanoseconds": 0
      },
      "sensorId": "j6jMOYDm3QJLkHrIrSLw",
      "value": 24.94926,
      "id": "Na0P3H9wSjfRm3p8pf3W"
    },
    {
      "timeStamp": {
        "seconds": 1629660320,
        "nanoseconds": 0
      },
      "value": 46.97337,
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "id": "PSn5vJCQHrvSV8GuHqbD"
    },
    {
      "timeStamp": {
        "seconds": 1629835880,
        "nanoseconds": 0
      },
      "value": 48.00336,
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "id": "PiRmtWRbOaCZN5LWsykg"
    },
    {
      "timeStamp": {
        "seconds": 1629663942,
        "nanoseconds": 0
      },
      "value": 0.02,
      "sensorId": "LY9xZ38Jq0iM1A4N2QZy",
      "id": "SR0zMm13BegXB6hC8IZf"
    },
    {
      "value": 0.02,
      "timeStamp": {
        "seconds": 1629660320,
        "nanoseconds": 0
      },
      "sensorId": "LY9xZ38Jq0iM1A4N2QZy",
      "id": "WgVQ6QtibIjm4QR8ow9m"
    },
    {
      "sensorId": "LY9xZ38Jq0iM1A4N2QZy",
      "value": 0.02,
      "timeStamp": {
        "seconds": 1629746817,
        "nanoseconds": 0
      },
      "id": "XHLkgOmYXhVydMJXPUUI"
    },
    {
      "timeStamp": {
        "seconds": 1629663942,
        "nanoseconds": 0
      },
      "value": 979.08954,
      "sensorId": "J2WEQArcfOdR67NrhcVE",
      "id": "XyKM1K9hRYpCCrzwTuHr"
    },
    {
      "value": 979.65845,
      "sensorId": "J2WEQArcfOdR67NrhcVE",
      "timeStamp": {
        "seconds": 1629877745,
        "nanoseconds": 0
      },
      "id": "b8sLLGyXjoVTTAkQj9yR"
    },
    {
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "timeStamp": {
        "seconds": 1629750417,
        "nanoseconds": 0
      },
      "value": 47.43725,
      "id": "bNd9J6Sj3IoTSmeJnS3T"
    },
    {
      "sensorId": "j6jMOYDm3QJLkHrIrSLw",
      "timeStamp": {
        "seconds": 1629663942,
        "nanoseconds": 0
      },
      "value": 27.03479,
      "id": "cBIfOTiyiNvZoFIIZl4T"
    },
    {
      "timeStamp": {
        "seconds": 1629663942,
        "nanoseconds": 0
      },
      "value": 49.61623,
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "id": "hLZqXOI2LUkAveBayItA"
    },
    {
      "sensorId": "j6jMOYDm3QJLkHrIrSLw",
      "value": 25.48333,
      "timeStamp": {
        "seconds": 1629835880,
        "nanoseconds": 0
      },
      "id": "iqcfW7WZ4wHuYGJii1Sl"
    },
    {
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "timeStamp": {
        "seconds": 1629744459,
        "nanoseconds": 0
      },
      "value": 47.62799,
      "id": "jgGrAdcKgOctJMVgztBN"
    },
    {
      "timeStamp": {
        "seconds": 1629660342,
        "nanoseconds": 0
      },
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "value": 46.70787,
      "id": "kHbcVf2J0a4DXHjsQtZ6"
    },
    {
      "timeStamp": {
        "seconds": 1629660342,
        "nanoseconds": 0
      },
      "value": 28.19371,
      "sensorId": "j6jMOYDm3QJLkHrIrSLw",
      "id": "ko6i8TmMvVPkW0zOIWac"
    },
    {
      "value": 28.19371,
      "timeStamp": {
        "seconds": 1629660320,
        "nanoseconds": 0
      },
      "sensorId": "j6jMOYDm3QJLkHrIrSLw",
      "id": "l2XxVPqPdBUwfu9zMx3l"
    },
    {
      "sensorId": "J2WEQArcfOdR67NrhcVE",
      "timeStamp": {
        "seconds": 1629660342,
        "nanoseconds": 0
      },
      "value": 979.29041,
      "id": "pOVxdxSSEQJhtdN322M3"
    },
    {
      "timeStamp": {
        "seconds": 1629750417,
        "nanoseconds": 0
      },
      "sensorId": "J2WEQArcfOdR67NrhcVE",
      "value": 979.44177,
      "id": "qr1RgfXb2ryvRz7ULRgC"
    },
    {
      "value": 978.13312,
      "timeStamp": {
        "seconds": 1629832280,
        "nanoseconds": 0
      },
      "sensorId": "J2WEQArcfOdR67NrhcVE",
      "id": "rwGmZJD80CkegEbBNRyX"
    },
    {
      "timeStamp": {
        "seconds": 1629839480,
        "nanoseconds": 0
      },
      "sensorId": "LY9xZ38Jq0iM1A4N2QZy",
      "value": 0.02,
      "id": "ry6xEnNEIsiuRrnU0jla"
    },
    {
      "sensorId": "LY9xZ38Jq0iM1A4N2QZy",
      "value": 0.02,
      "timeStamp": {
        "seconds": 1629660342,
        "nanoseconds": 0
      },
      "id": "uECHnGCOBMWkHNUomFz8"
    },
    {
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "value": 47.56542,
      "timeStamp": {
        "seconds": 1629746817,
        "nanoseconds": 0
      },
      "id": "ufq4vOOHiTLTT2pX3iam"
    },
    {
      "timeStamp": {
        "seconds": 1629660320,
        "nanoseconds": 0
      },
      "value": 979.29224,
      "sensorId": "J2WEQArcfOdR67NrhcVE",
      "id": "uySPu7A5GRKXFFIM7itk"
    },
    {
      "timeStamp": {
        "seconds": 1629839480,
        "nanoseconds": 0
      },
      "value": 978.32471,
      "sensorId": "J2WEQArcfOdR67NrhcVE",
      "id": "vA23qNucSTXIVpN32MWg"
    },
    {
      "value": 0.02,
      "sensorId": "LY9xZ38Jq0iM1A4N2QZy",
      "timeStamp": {
        "seconds": 1629832280,
        "nanoseconds": 0
      },
      "id": "vVBFvKN39zma8VwUubCT"
    },
    {
      "sensorId": "J2WEQArcfOdR67NrhcVE",
      "timeStamp": {
        "seconds": 1629744459,
        "nanoseconds": 0
      },
      "value": 979.22296,
      "id": "x23GRq9Q6SAxW7xRrsUj"
    },
    {
      "value": 25.62753,
      "sensorId": "j6jMOYDm3QJLkHrIrSLw",
      "timeStamp": {
        "seconds": 1629839480,
        "nanoseconds": 0
      },
      "id": "zJws43CJzLKJlyvNMQku"
    }
  ]

  const testData2 =[
    {
      "sensorId": "j6jMOYDm3QJLkHrIrSLw",
      "value": 26,
      "timeStamp": {
        "seconds": 1629832280,
        "nanoseconds": 0
      },
      "id": "0DDClHvHFuNfMPqZxnar"
    },
    {
      "sensorId": "j6jMOYDm3QJLkHrIrSLw",
      "value": 27,
      "timeStamp": {
        "seconds": 1629832280,
        "nanoseconds": 0
      },
      "id": "0DDClHvHFuNfMPqZxnar"
    },
    {
      "sensorId": "j6jMOYDm3QJLkHrIrSLw",
      "value": 28,
      "timeStamp": {
        "seconds": 1629832280,
        "nanoseconds": 0
      },
      "id": "0DDClHvHFuNfMPqZxnar"
    },
    {
      "value": 48.11322,
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "timeStamp": {
        "seconds": 1629839480,
        "nanoseconds": 0
      },
      "id": "4MNWUK4jinCY1VbFIeFy"
    },
    {
      "sensorId": "G4sLf9DOaxBOmjGLmDU8",
      "timeStamp": {
        "seconds": 1629740859,
        "nanoseconds": 0
      },
      "value": 50.12436,
      "id": "6RGnLu2BO8VtdNWnelAN"
    },

  ]
  const pipe = new GetAverageReadingForSensorPipe();
  it('create an instance', () => {

    expect(pipe).toBeTruthy();
  });

  it('fetches average reading for sensor id G4sLf9DOaxBOmjGLmDU8', () => {
    expect(pipe.transform(testData, 'G4sLf9DOaxBOmjGLmDU8')).toEqual(48.5161990909091);
  });

  it('fetches average reading for sensor id J2WEQArcfOdR67NrhcVE', () => {
    expect(pipe.transform(testData, 'J2WEQArcfOdR67NrhcVE')).toEqual(978.9291390909092);
  });

   it('fetches average reading for sensor id LY9xZ38Jq0iM1A4N2QZy', () => {
     expect(pipe.transform(testData, 'LY9xZ38Jq0iM1A4N2QZy')).toEqual(0.02272727272727272 );
   });

  it('fetches average reading for sensor id j6jMOYDm3QJLkHrIrSLw', () => {
    expect(pipe.transform(testData, 'j6jMOYDm3QJLkHrIrSLw')).toEqual(25.94165272727272 );
  });

  it('fetches average reading for sensor id j6jMOYDm3QJLkHrIrSLw from second test data', () => {
    expect(pipe.transform(testData2, 'j6jMOYDm3QJLkHrIrSLw')).toEqual(27 );
  });

   it('fetch null when no readings list provided', () => {
     expect(pipe.transform(undefined, 'j6jMOYDm3QJLkHrIrSLw')).toBe(null);
   });
   it('fetch null strings when no sensor id  provided', () => {
     expect(pipe.transform(testData, '')).toBe(null);
   });
});
