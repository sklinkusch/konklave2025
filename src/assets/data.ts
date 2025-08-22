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
            const nationHasYear = year in cardinal.nation;
            const functionHasYear = year in cardinal.function;
            const rankHasYear = year in cardinal.rank;
            if (nationHasYear && functionHasYear && rankHasYear) {
              return cardinals.concat([
                {
                  ...cardinal,
                  nation: cardinal.nation[year as ConclaveYears] || [],
                  function: cardinal.function[year as ConclaveYears] || "",
                  elected:
                    (cardinal.elected &&
                      cardinal.elected[year as ConclaveYears]) ||
                    false,
                  rank:
                    (cardinal.rank && cardinal.rank[year as ConclaveYears]) ||
                    "priest",
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
          deathday: cardinal.deathday ? cardinal.deathday : undefined,
          nation: cardinal.nation.curr ? cardinal.nation.curr : maximalNation,
          function: cardinal.function.curr
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
    key: "1903",
    title: "Konklave 1903",
    pope: "Pius X.",
    cardinal: "Giuseppe SARTO",
  },
  {
    key: "1914",
    title: "Konklave 1914",
    pope: "Benedikt XV.",
    cardinal: "Giacomo DELLA CHIESA",
  },
  {
    key: "1922",
    title: "Konklave 1922",
    pope: "Pius XI.",
    cardinal: "Achille RATTI",
  },
  {
    key: "1939",
    title: "Konklave 1939",
    pope: "Pius XII.",
    cardinal: "Eugenio PACELLI",
  },
  {
    key: "1958",
    title: "Konklave 1958",
    pope: "Johannes XXIII.",
    cardinal: "Angelo RONCALLI",
  },
  {
    key: "1963",
    title: "Konklave 1963",
    pope: "Paul VI.",
    cardinal: "Giovanni Battista MONTINI",
  },
  {
    key: "1978.1",
    title: "Konklave August 1978",
    pope: "Johannes Paul I.",
    cardinal: "Albino LUCIANI",
  },
  {
    key: "1978.2",
    title: "Konklave Oktober 1978",
    pope: "Johannes Paul II.",
    cardinal: "Karol WOJTYŁA",
  },
  {
    key: "2005",
    title: "Konklave 2005",
    pope: "Benedikt XVI.",
    cardinal: "Joseph RATZINGER",
  },
  {
    key: "2013",
    title: "Konklave 2013",
    pope: "Franziskus",
    cardinal: "Jorge Mario BERGOGLIO",
  },
  {
    key: "2025",
    title: "Konklave 2025",
    pope: "Leo XIV.",
    cardinal: "Robert Francis PREVOST",
  },
];
