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
  return allFirstNames.reduce(
    (firstNames: NewFirstName[], firstName: FirstName) => {
      const newCardinals = firstName.data.reduce(
        (cardinals: NewCardinal[], cardinal: Cardinal) => {
          const nationHasYear = year in cardinal.nation;
          const functionHasYear = year in cardinal.function;
          if (nationHasYear && functionHasYear) {
            return cardinals.concat([
              {
                ...cardinal,
                nation: cardinal.nation[`${year}`],
                function: cardinal.function[`${year}`],
                elected: (cardinal.elected && cardinal.elected[year]) || false,
                rank: (cardinal.rank && cardinal.rank[year]) || undefined,
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

export const startDates: { [key: string]: string } = {
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
