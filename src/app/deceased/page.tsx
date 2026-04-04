import moment from "moment-timezone";
import Link from "next/link";
import { Typography } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import { FirstName } from "@components/FirstName/FirstName";
import { getAllCardinals } from "@assets/data";
import { DateString } from "@mytypes/types";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Liste der verstorbenen Kardinäle",
  };
}

function Deceased() {
  const startDate: DateString = moment()
    .tz("Europe/Rome")
    .format("YYYY-MM-DD") as DateString;
  const title = "Liste der verstorbenen Kardinäle";
  const cardinals = getAllCardinals();
  const allDeceased = cardinals
    .map((firstName) => ({
      name: firstName.name,
      data: firstName.data.filter((cardinal) => {
        const isNotElected: boolean = cardinal.elected !== true;
        const isDeceased: boolean = typeof cardinal.deathday === "string";
        return isNotElected && isDeceased;
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
      {allDeceased.map((cardinal, index) => (
        <FirstName
          key={index}
          name={cardinal.name}
          data={cardinal.data}
          startDate={startDate}
          deceased={true}
        />
      ))}
    </div>
  );
}

export default Deceased;
