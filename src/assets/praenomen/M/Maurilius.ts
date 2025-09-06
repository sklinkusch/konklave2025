import { FirstName } from "@mytypes/types";

const Turin = "Erzbischof von Turin";

export const Maurilius: FirstName = {
  name: "Maurilius",
  data: [
    {
      latin: "Maurilius",
      firstName: "Maurilio",
      lastName: "Fossati",
      birthday: "1876-05-24",
      deathday: "1965-03-30",
      nation: {
        1939: ["IT"],
        1958: ["IT"],
        1963: ["IT"],
      },
      function: {
        1939: Turin,
        1958: Turin,
        1963: Turin,
      },
      rank: {
        1939: "priest",
        1958: "priest",
        1963: "priest",
      },
    },
  ],
};
