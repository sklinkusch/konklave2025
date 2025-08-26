export enum ConclaveYears {
  Conclave1903 = "1903",
  Conclave1914 = "1914",
  Conclave1922 = "1922",
  Conclave1939 = "1939",
  Conclave1958 = "1958",
  Conclave1963 = "1963",
  Conclave1978Aug = "1978.1",
  Conclave1978Oct = "1978.2",
  Conclave2005 = "2005",
  Conclave2013 = "2013",
  Conclave2025 = "2025",
  current = "curr",
}

enum Month {
  Jan = "01",
  Feb = "02",
  Mar = "03",
  Apr = "04",
  May = "05",
  Jun = "06",
  Jul = "07",
  Aug = "08",
  Sep = "09",
  Oct = "10",
  Nov = "11",
  Dec = "12",
}

enum Day {
  One = "01",
  Two = "02",
  Three = "03",
  Four = "04",
  Five = "05",
  Six = "06",
  Seven = "07",
  Eight = "08",
  Nine = "09",
  Ten = "10",
  Eleven = "11",
  Twelve = "12",
  Thirteen = "13",
  Fourteen = "14",
  Fifteen = "15",
  Sixteen = "16",
  Seventeen = "17",
  Eighteen = "18",
  Nineteen = "19",
  Twenty = "20",
  Twentyone = "21",
  Twentytwo = "22",
  Twentythree = "23",
  Twentyfour = "24",
  Twentyfive = "25",
  Twentysix = "26",
  Twentyseven = "27",
  Twentyeight = "28",
  Twentynine = "29",
  Thirty = "30",
  Thirtyeight = "31",
}

export type DateString = `${number}-${Month}-${Day}`;

export type DateOptions = {
  year?: "numeric" | "2-digit";
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
  day?: "numeric" | "2-digit";
  hour?: "numeric" | "2-digit";
  minute?: "numeric" | "2-digit";
  second?: "numeric" | "2-digit";
  timeZoneName?: "short" | "long";
  timeZone?: "Europe/Rome";
};

export type Rank = "bishop" | "priest" | "deacon";

export interface CircleProps {
  rank: Rank;
}

export type Cardinal = {
  latin: string;
  firstName: string;
  lastName: string;
  birthday: DateString;
  deathday?: DateString;
  nation: { [key in ConclaveYears]?: string[] };
  function: { [key in ConclaveYears]?: string };
  rank: { [key in ConclaveYears]?: Rank };
  elected?: { [key in ConclaveYears]?: boolean };
};

export type FirstName = {
  name: string;
  data: Cardinal[];
};

export type CustomTableProps = {
  data: {
    latin: string;
    firstName: string;
    lastName: string;
    birthday: DateString;
    deathday?: DateString;
    nation: string[];
    function: string;
    rank: Rank;
    elected?: boolean;
  }[];
  startDate: DateString;
};

export type FirstNameProps = {
  name: string;
  data: {
    latin: string;
    firstName: string;
    lastName: string;
    birthday: DateString;
    deathday?: DateString;
    nation: string[];
    function: string;
    rank: Rank;
    elected?: boolean;
  }[];
  startDate: DateString;
};

export interface NewCardinal {
  latin: string;
  firstName: string;
  lastName: string;
  birthday: DateString;
  deathDay?: DateString;
  nation: string[];
  function: string;
  rank: Rank;
  elected?: boolean;
}

export interface NewFirstName {
  name: string;
  data: NewCardinal[];
}

export interface Conclave {
  key: string;
  title: string;
  pope: string;
  cardinal: string;
}
