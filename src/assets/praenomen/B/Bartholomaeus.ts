import { FirstName } from "@mytypes/types";

const Verona = "Bischof von Verona";

export const Bartholomaeus: FirstName = {
  name: "Bartholomaeus",
  data: [
    {
      latin: "Bartholomeaus",
      firstName: "Bartolomeo",
      lastName: "Bacilieri",
      birthday: "1842-03-28",
      deathday: "1923-02-14",
      nation: {
        1903: ["IT"],
        1914: ["IT"],
        1922: ["IT"],
      },
      function: {
        1903: Verona,
        1914: Verona,
        1922: Verona,
      },
      rank: {
        1903: "priest",
        1914: "priest",
        1922: "priest",
      },
    },
  ],
};
