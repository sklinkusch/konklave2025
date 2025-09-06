import type { FirstName } from "@mytypes/types";

const Palermo = "Erzbischof von Palermo";

export const Salvator: FirstName = {
  name: "Salvator",
  data: [
    {
      latin: "Salvator",
      firstName: "Salvatore",
      lastName: "De Giorgi",
      birthday: "1930-09-30",
      nation: {
        2005: ["IT"],
      },
      function: {
        2005: Palermo,
      },
      rank: {
        2005: "priest",
      },
    },
    {
      latin: "Salvator",
      firstName: "Salvatore",
      lastName: "Pappalardo",
      birthday: "1918-09-23",
      deathday: "2012-06-10",
      nation: {
        1978.1: ["IT"],
        1978.2: ["IT"],
      },
      function: {
        1978.1: Palermo,
        1978.2: Palermo,
      },
      rank: {
        1978.1: "priest",
        1978.2: "priest",
      },
    },
  ],
};
