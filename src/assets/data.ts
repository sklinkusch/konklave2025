import { allFirstNames } from "./allFirstNames";

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
