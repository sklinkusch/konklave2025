import { A } from "./praenomen/A/A";
import { B } from "./praenomen/B/B";
import { C } from "./praenomen/C/C";
import { D } from "./praenomen/D/D";
import { E } from "./praenomen/E/E";
import { F } from "./praenomen/F/F";
import { G } from "./praenomen/G/G";
import { I } from "./praenomen/I/I";
import { L } from "./praenomen/L/L";
import { M } from "./praenomen/M/M";
import { N } from "./praenomen/N/N";
import { O } from "./praenomen/O/O";
import { P } from "./praenomen/P/P";
import { R } from "./praenomen/R/R";
import { S } from "./praenomen/S/S";
import { T } from "./praenomen/T/T";
import { V } from "./praenomen/V/V";
import { Z } from "./praenomen/Z/Z";

const allFirstNames: FirstName[] = [
  ...A,
  ...B,
  ...C,
  ...D,
  ...E,
  ...F,
  ...G,
  ...I,
  ...L,
  ...M,
  ...N,
  ...O,
  ...P,
  ...R,
  ...S,
  ...T,
  ...V,
  ...Z,
];

export const getCardinals = (year: string) => {
  return allFirstNames.reduce(
    (firstNames: NewFirstName[], firstName: FirstName) => {
      const newCardinals = firstName.data.reduce(
        (cardinals: NewCardinal[], cardinal: Cardinal) => {
          const nationHasYear = cardinal.nation.hasOwnProperty(`${year}`);
          const functionHasYear = cardinal.function.hasOwnProperty(`${year}`);
          if (nationHasYear && functionHasYear) {
            return cardinals.concat([
              {
                ...cardinal,
                nation: cardinal.nation[`${year}`],
                function: cardinal.function[`${year}`],
                elected: (cardinal.elected && cardinal.elected[year]) || false,
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
