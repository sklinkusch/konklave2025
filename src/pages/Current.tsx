import moment from "moment-timezone";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import { FirstName } from "@components/FirstName/FirstName";
import { getAllCardinals } from "@assets/data";
import { DateString } from "@mytypes/types";

const calculateDateDifference = (start: string, end: string): boolean => {
  const years = moment(start).diff(moment(end), "years", true);
  return years <= 80.0;
};

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
        return !cardinal.elected && !cardinal.deathday && youngEnough;
      }),
    }))
    .filter((FirstName) => FirstName.data.length > 0);
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <div style={{ paddingInline: "1rem", width: "97vw" }}>
      <Link to="/">
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
          startDate={startDate as DateString}
        />
      ))}
    </div>
  );
}

export default Current;
