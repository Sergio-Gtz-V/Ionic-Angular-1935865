// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {

  production: true, 

  firebaseConfig: {
    apiKey: "AIzaSyAQumGGMiJfz3Wufr-8gh8TZqjuxOXSGUU",
    authDomain: "bd-lab-appsmoviles.firebaseapp.com",
    databaseURL: "https://bd-lab-appsmoviles-default-rtdb.firebaseio.com",
    projectId: "bd-lab-appsmoviles",
    storageBucket: "bd-lab-appsmoviles.appspot.com",
    messagingSenderId: "898642465364",
    appId: "1:898642465364:web:66e0ea44ff2f28f22f53c1",
    measurementId: "G-87BYYBVLD5"
  }
  
};

const app = initializeApp(environment.firebaseConfig)

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
