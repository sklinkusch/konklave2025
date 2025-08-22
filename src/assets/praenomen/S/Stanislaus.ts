import type { FirstName } from "@mytypes/types";

export const Stanislaus: FirstName = {
  name: "Stanislaus",
  data: [
    {
      latin: "Stanislaus Ioannes",
      firstName: "Stanisław Jan",
      lastName: "Dziwisz",
      birthday: "1939-04-27",
      nation: {
        2013: ["PL"],
      },
      function: {
        2013: "Erzbischof von Krakau",
      },
      rank: {
        2013: "priest",
      },
    },
    {
      latin: "Stanislaus Marianus",
      firstName: "Stanisław Marian",
      lastName: "Ryłko",
      birthday: "1945-07-04",
      nation: {
        2013: ["PL", "VA"],
        2025: ["PL", "VA"],
      },
      function: {
        2013: "Präsident des Päpstlichen Rates für die Laien",
        2025: "Erzpriester der Basilika Santa Maria Maggiore",
      },
      rank: {
        2013: "deacon",
        2025: "priest",
      },
    },
  ],
};
