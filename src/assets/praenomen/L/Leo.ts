import type { FirstName } from "@mytypes/types";

const Mecheln = "Erbischof von Mecheln-Brüssel";

export const Leo: FirstName = {
  name: "Leo",
  data: [
    {
      latin: "Leo",
      firstName: "Lev",
      lastName: "Skrbenský z Hříště",
      birthday: "1863-06-12",
      deathday: "1938-12-24",
      nation: {
        1903: ["CZ"],
        1914: ["CZ"],
      },
      function: {
        1903: "Erzbischof von Prag",
        1914: "Erzbischof von Prag",
      },
      rank: {
        1903: "priest",
        1914: "priest",
      },
    },
    {
      latin: "Leo Adolphus",
      firstName: "Léon-Adolphe",
      lastName: "Amette",
      birthday: "1850-09-06",
      deathday: "1920-08-29",
      nation: {
        1914: ["FR"],
      },
      function: {
        1914: "Erzbischof von Paris",
      },
      rank: {
        1914: "priest",
      },
    },
    {
      latin: "Leo Iosephus",
      firstName: "Léon-Joseph",
      lastName: "Suenens",
      birthday: "1904-07-16",
      deathday: "1996-05-06",
      nation: {
        1963: ["BE"],
        1978.1: ["BE"],
        1978.2: ["BE"],
      },
      function: {
        1963: Mecheln,
        1978.1: Mecheln,
        1978.2: Mecheln,
      },
      rank: {
        1963: "priest",
        1978.1: "priest",
        1978.2: "priest",
      },
    },
    {
      latin: "Leo Stephanus",
      firstName: "Léon-Étienne",
      lastName: "Duval",
      birthday: "1903-11-09",
      deathday: "1996-05-30",
      nation: {
        1978.1: ["FR", "DZ"],
        1978.2: ["FR", "DZ"],
      },
      function: {
        1978.1: "Erzbischof von Algier",
        1978.2: "Erzbischof von Algier",
      },
      rank: {
        1978.1: "priest",
        1978.2: "priest",
      },
    },
  ],
};
