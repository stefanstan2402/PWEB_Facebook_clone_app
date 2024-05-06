// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// XXX: it will exist in JS
declare var _MASTERPROPS: any;

let localOverwriteAPIBusinessUrl: any = null;

try {
  localOverwriteAPIBusinessUrl = !!_MASTERPROPS ? _MASTERPROPS.SERVER_API_BUSINESS_URL : 'https://localhost:5000';
} catch {
  // null will break all Url
}

export const environment = {
  production: false,

  API: {
    Business:
    {
      apiUrlRelative: false,
      apiUrl: localOverwriteAPIBusinessUrl
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
