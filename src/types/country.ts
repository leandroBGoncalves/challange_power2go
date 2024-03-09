export interface Country {
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: { [key: string]: Currency };
    idd: IDD;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Ilanguages;
    translations: { [key: string]: Translation };
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    gini: { [key: string]: number };
    fifa: string;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: Flag;
    coatOfArms: CoatOfArms;
    startOfWeek: string;
    capitalInfo: Latlng;
    postalCode: PostalCode;
  }

  export interface Ilanguages {
      [key: string]: string;
  }
  
  interface Name {
    common: string;
    official: string;
    nativeName: { [key: string]: NativeName };
  }
  
  interface NativeName {
    official: string;
    common: string;
  }
  
  export interface Currency {
    name: string;
    symbol: string;
  }
  
  interface IDD {
    root: string;
    suffixes: string[];
  }
  
  interface Translation {
    official: string;
    common: string;
  }
  
  interface Demonyms {
    eng: Demonym;
    fra: Demonym;
  }
  
  interface Demonym {
    f: string;
    m: string;
  }
  
  interface Maps {
    googleMaps: string;
    openStreetMaps: string;
  }
  
  interface Car {
    signs: string[];
    side: string;
  }
  
  interface Flag {
    png: string;
    svg: string;
    alt: string;
  }
  
  interface CoatOfArms {
    png: string;
    svg: string;
  }
  
  interface Latlng {
    latlng: number[];
  }
  
  interface PostalCode {
    format: string;
    regex: string;
  }
  