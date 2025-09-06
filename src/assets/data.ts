import { A } from "./praenomen/A/A";
import { B } from "./praenomen/B/B";
import { C } from "./praenomen/C/C";
import { D } from "./praenomen/D/D";
import { E } from "./praenomen/E/E";
import { F } from "./praenomen/F/F";
import { G } from "./praenomen/G/G";
import { H } from "./praenomen/H/H";
import { I } from "./praenomen/I/I";
import { K } from "./praenomen/K/K";
import { L } from "./praenomen/L/L";
import { M } from "./praenomen/M/M";
import { N } from "./praenomen/N/N";
import { O } from "./praenomen/O/O";
import { P } from "./praenomen/P/P";
import { R } from "./praenomen/R/R";
import { S } from "./praenomen/S/S";
import { T } from "./praenomen/T/T";
import { V } from "./praenomen/V/V";
import { X } from "./praenomen/X/X";
import { Z } from "./praenomen/Z/Z";
import type {
  FirstName,
  NewFirstName,
  NewCardinal,
  Cardinal,
  Conclave,
  Rank,
} from "@mytypes/types";
import { ConclaveYears, DateString } from "@mytypes/types";

const allFirstNames: FirstName[] = [
  ...A,
  ...B,
  ...C,
  ...D,
  ...E,
  ...F,
  ...G,
  ...H,
  ...I,
  ...K,
  ...L,
  ...M,
  ...N,
  ...O,
  ...P,
  ...R,
  ...S,
  ...T,
  ...V,
  ...X,
  ...Z,
];

export const getCardinals = (year: string) => {
  if (Object.values(ConclaveYears).includes(year as ConclaveYears)) {
    return allFirstNames.reduce(
      (firstNames: NewFirstName[], firstName: FirstName) => {
        const newCardinals = firstName.data.reduce(
          (cardinals: NewCardinal[], cardinal: Cardinal) => {
            const nationHasYear =
              cardinal.nation[year as ConclaveYears] !== undefined;
            const functionHasYear =
              cardinal.function[year as ConclaveYears] !== undefined;
            const rankHasYear =
              cardinal.rank[year as ConclaveYears] !== undefined;
            const electedHasYear = cardinal.elected
              ? cardinal.elected[year as ConclaveYears] !== undefined
              : false;
            if (nationHasYear && functionHasYear && rankHasYear) {
              return cardinals.concat([
                {
                  ...cardinal,
                  nation: nationHasYear
                    ? (cardinal.nation[year as ConclaveYears] as string[])
                    : [],
                  function: functionHasYear
                    ? (cardinal.function[year as ConclaveYears] as string)
                    : "",
                  elected:
                    electedHasYear && typeof cardinal.elected === "object"
                      ? (cardinal.elected[year as ConclaveYears] as boolean)
                      : false,
                  rank: rankHasYear
                    ? (cardinal.rank[year as ConclaveYears] as Rank)
                    : "priest",
                },
              ]);
            }
            return cardinals;
          },
          [],
        );
        if (newCardinals.length) {
          return firstNames.concat([
            { name: firstName.name, data: newCardinals },
          ]);
        }
        return firstNames;
      },
      [],
    );
  } else {
    return [];
  }
};

export const getAllCardinals = () => {
  return allFirstNames.map((firstName) => {
    return {
      name: firstName.name,
      data: firstName.data.map((cardinal) => {
        const allNationKeys = Object.keys(cardinal.nation).filter(
          (key) => key !== "curr",
        );
        const nationNumberKeys = allNationKeys.map((key) => Number(key));
        const maximalNationKey = Math.max(...nationNumberKeys);
        const maximalNationString = `${maximalNationKey}` as ConclaveYears;
        const maximalNation = cardinal.nation[maximalNationString] as string[];
        const maximalFunction = cardinal.function[
          maximalNationString
        ] as string;
        const maximalRank = cardinal.rank[maximalNationString] as Rank;
        return {
          latin: cardinal.latin,
          firstName: cardinal.firstName,
          lastName: cardinal.lastName,
          birthday: cardinal.birthday,
          deathday:
            cardinal.deathday !== undefined ? cardinal.deathday : undefined,
          nation: cardinal.nation.curr ? cardinal.nation.curr : maximalNation,
          function:
            cardinal.function.curr !== undefined
              ? cardinal.function.curr
              : maximalFunction,
          rank: cardinal.rank.curr ? cardinal.rank.curr : maximalRank,
          elected: cardinal.elected
            ? Object.values(cardinal.elected).some(Boolean)
            : false,
        };
      }),
    };
  });
};

export const allKonklaveYears = () => {
  const yearArray = allFirstNames
    .map((firstName) =>
      firstName.data.map((cardinal) => Object.keys(cardinal.nation)).flat(),
    )
    .flat();
  const yearSet = new Set(yearArray);
  return Array.from(yearSet).sort();
};

export const startDates: { [key: string]: DateString } = {
  1800: "1799-12-01",
  1823: "1823-09-02",
  1829: "1829-02-24",
  1831: "1830-12-14",
  1846: "1846-06-14",
  1878: "1878-02-18",
  1903: "1903-07-31",
  1914: "1914-08-31",
  1922: "1922-02-02",
  1939: "1939-03-01",
  1958: "1958-10-25",
  1963: "1963-06-19",
  1978.1: "1978-08-25",
  1978.2: "1978-10-14",
  2005: "2005-04-18",
  2013: "2013-03-12",
  2025: "2025-05-07",
};

export const conclaves: Conclave[] = [
  {
    key: "1800",
    title: "Konklave 1799-1800",
    pope: {
      name: "Pius",
      number: 7,
    },
    cardinal: {
      firstName: "Luigi Barnaba",
      lastName: "Chiaramonti",
    },
  },
  {
    key: "1823",
    title: "Konklave 1823",
    pope: {
      name: "Leo",
      number: 12,
    },
    cardinal: {
      firstName: "Annibale",
      lastName: "della Genga",
    },
  },
  {
    key: "1829",
    title: "Konklave 1829",
    pope: {
      name: "Pius",
      number: 8,
    },
    cardinal: {
      firstName: "Francesco",
      lastName: "Castiglioni",
    },
  },
  {
    key: "1831",
    title: "Konklave 1830-31",
    pope: {
      name: "Gregor",
      number: 16,
    },
    cardinal: {
      firstName: "Bartolomeo",
      lastName: "Cappellari",
    },
  },
  {
    key: "1846",
    title: "Konklave 1846",
    pope: {
      name: "Pius",
      number: 9,
    },
    cardinal: {
      firstName: "Giovanni Maria",
      lastName: "Mastai Ferretti",
    },
  },
  {
    key: "1878",
    title: "Konklave 1878",
    pope: {
      name: "Leo",
      number: 13,
    },
    cardinal: {
      firstName: "Vincenzo Gioacchino",
      lastName: "Pecci",
    },
  },
  {
    key: "1903",
    title: "Konklave 1903",
    pope: {
      name: "Pius",
      number: 10,
    },
    cardinal: {
      firstName: "Giuseppe",
      lastName: "Sarto",
    },
  },
  {
    key: "1914",
    title: "Konklave 1914",
    pope: {
      name: "Benedikt",
      number: 15,
    },
    cardinal: {
      firstName: "Giacomo",
      lastName: "della Chiesa",
    },
  },
  {
    key: "1922",
    title: "Konklave 1922",
    pope: {
      name: "Pius",
      number: 11,
    },
    cardinal: {
      firstName: "Achille",
      lastName: "Ratti",
    },
  },
  {
    key: "1939",
    title: "Konklave 1939",
    pope: {
      name: "Pius",
      number: 12,
    },
    cardinal: {
      firstName: "Eugenio",
      lastName: "Pacelli",
    },
  },
  {
    key: "1958",
    title: "Konklave 1958",
    pope: {
      name: "Johannes",
      number: 23,
    },
    cardinal: {
      firstName: "Angelo",
      lastName: "Roncalli",
    },
  },
  {
    key: "1963",
    title: "Konklave 1963",
    pope: {
      name: "Paul",
      number: 6,
    },
    cardinal: {
      firstName: "Giovanni Battista",
      lastName: "Montini",
    },
  },
  {
    key: "1978.1",
    title: "Konklave August 1978",
    pope: {
      name: "Johannes Paul",
      number: 1,
    },
    cardinal: {
      firstName: "Albino",
      lastName: "Luciani",
    },
  },
  {
    key: "1978.2",
    title: "Konklave Oktober 1978",
    pope: {
      name: "Johannes Paul",
      number: 2,
    },
    cardinal: {
      firstName: "Karol",
      lastName: "Wojtyła",
    },
  },
  {
    key: "2005",
    title: "Konklave 2005",
    pope: {
      name: "Benedikt",
      number: 16,
    },
    cardinal: {
      firstName: "Joseph",
      lastName: "Ratzinger",
    },
  },
  {
    key: "2013",
    title: "Konklave 2013",
    pope: {
      name: "Franziskus",
      number: null,
    },
    cardinal: {
      firstName: "Jorge Mario",
      lastName: "Bergoglio",
    },
  },
  {
    key: "2025",
    title: "Konklave 2025",
    pope: {
      name: "Leo",
      number: 14,
    },
    cardinal: {
      firstName: "Robert Francis",
      lastName: "Prevost",
    },
  },
];
