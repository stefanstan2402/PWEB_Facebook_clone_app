/**
 * Regex pentru campuri de tip nume
 * Exemplu:
 *  Ă A-b'
 */
export const REGEX_NUME_ALFABET_UNICODE: RegExp = /^[\p{L}\p{M}][\p{L}\p{M}\p{Zs}\-']*$/u;
export const REGEX_NUME_UNICODE: RegExp = /^(?:[a-zA-Z]+(?:-[a-zA-Z]+)*|[a-zA-Z]+(?: [a-zA-Z]+)*|-)$/u;
export const REGEX_NUME_ALFABET_UNICODE_ALLOW_NULL: RegExp = /^(?:[\p{L}\p{M}][\p{L}\p{M}\p{Zs}\-']*)?$/u;


export function formatDate(value) {
  if (!value) {
    return '';
  }

  if (!(value as Date)) {
    return value;
  }

    const yyyy = value.getFullYear();
    let mm = value.getMonth() + 1; // Months start at 0!
    let dd = value.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return dd + '.' + mm + '.' + yyyy;
  }


  export function formatDateTime(value) {
    if (!value) {
      return '';
    }

    if (!(value as Date)) {
      return value;
    }

    const yyyy = value.getFullYear();
    let mm = value.getMonth() + 1;
    let dd = value.getDate();

    let hh = value.getHours()
    let mi = value.getMinutes();
    let ss = value.getSeconds();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    if (hh < 10) hh = '0' + hh;
    if (mi < 10) mi = '0' + mi;
    if (ss < 10) ss = '0' + ss;

    return dd + '.' + mm + '.' + yyyy + ' ' + hh + ':' + mi + ':' + ss;
  }

  /*
    Returneaza un obiect de tipul Version cu valorile major.minor.build.revision    
  */
  export function getVersion(version: string): Version | null {
          
    const versionRegEx = /([0-9]+).([0-9]+).([0-9]+).([0-9]+)/;

    const matches = version.match(versionRegEx);
    if (matches && matches.length == 5) {
      return {
        major: parseInt(matches[1]),
        minor: parseInt(matches[2]),
        build: parseInt(matches[3]),
        revision: parseInt(matches[4])
      }
    }
    
    return null;
  }

  /*
    Compara doua obiecte Version.
    Returneaza true daca 'latest' este mai mare decat 'current'
  */
  export function isNewerVersion(current: Version | null, latest: Version | null): boolean { 
    if (!current) {
      return false;
    }

    if (!latest) {
      return false;
    }

    if (current.major != latest.major) {
          if (current.major > latest.major) {
              return false;
          }
          else {
              return true;
          }
    }

      if (current.minor != latest.minor){
          if (current.minor > latest.minor) {
            return false;
          }
          else {
              return true;
          }
      }

      if (current.build != latest.build) {
          if (current.build > latest.build) {
            return false;
          }
          else {
              return true;
          }
      }

      if (current.revision != latest.revision) {
          if (current.revision > latest.revision) {
            return false;
          }
          else {
              return true;
          }
      }

      return false;
  }

export class Version {
  major: number;
  minor: number;
  build: number;
  revision: number;
}