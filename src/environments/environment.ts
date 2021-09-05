// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/* export const environment = {
  production: false
}; */

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBYtk_InQaDX6Ujj8CN1GDQEjPFBqn7APg',
    authDomain: 'veleri-meteo-station.firebaseapp.com',
    projectId: 'veleri-meteo-station',
    storageBucket: 'veleri-meteo-station.appspot.com',
    messagingSenderId: '295966461137',
    appId: '1:295966461137:web:d26eaee0e8141d643449f0',
    measurementId: 'G-248ZZSP23W',
  },
  gmapsKey: 'AIzaSyBr5hFs0pirPs_by-lzxUsS7KXT_ZmwqD0',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
