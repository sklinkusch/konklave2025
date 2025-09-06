import moment from "moment-timezone";
import Link from "next/link";
import { Typography } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import { FirstName } from "@components/FirstName/FirstName";
import { getAllCardinals } from "@assets/data";
import { DateString } from "@mytypes/types";
import { Metadata } from "next";

const calculateDateDifference = (start: string, end: string): boolean => {
  const years = moment(start).diff(moment(end), "years", true);
  return years <= 80.0;
};

// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Liste der aktuell wahlberechtigten Kardinäle",
  };
}

function Current() {
  const startDate: DateString = moment()
    .tz("Europe/Rome")
    .format("YYYY-MM-DD") as DateString;
  const title = "Liste der aktuell wahlberechtigten Kardinäle";
  const cardinals = getAllCardinals();
  const allYoung = cardinals
    .map((firstName) => ({
      name: firstName.name,
      data: firstName.data.filter((cardinal) => {
        const youngEnough = calculateDateDifference(
          startDate,
          cardinal.birthday,
        );
        const isNotElected: boolean = cardinal.elected !== true;
        const isAlive: boolean = cardinal.deathday === undefined;
        return isNotElected && isAlive && youngEnough;
      }),
    }))
    .filter((FirstName) => FirstName.data.length > 0);
  return (
    <div style={{ paddingInline: "1rem", width: "97vw" }}>
      <Link href="/">
        <ChevronLeft sx={{ position: "relative", top: "0.25em" }} />
        Home
      </Link>
      <Typography variant="h1" component="h1" align="left">
        {title}
      </Typography>
      {allYoung.map((cardinal, index) => (
        <FirstName
          key={index}
          name={cardinal.name}
          data={cardinal.data}
          startDate={startDate}
        />
      ))}
    </div>
  );
}

export default Current;
