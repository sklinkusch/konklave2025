import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import { FirstName } from "@components/FirstName/FirstName";
import { getCardinals, startDates, conclaves } from "@assets/data";
import { ConclaveYears } from "@mytypes/types";

function Konklave() {
  const { year } = useParams<{ year: string }>();
  const navigate = useNavigate();
  const cardinals =
    year && Object.values(ConclaveYears).includes(year as ConclaveYears)
      ? getCardinals(year)
      : [];
  const startDatePrev = year ? startDates[year] : null;
  const startDate = startDatePrev ? startDatePrev : "";
  const conclave = conclaves.find((conclave) => conclave.key === year);
  const title = conclave ? conclave.title : year;
  const pope = conclave ? `(${conclave.pope}, ${conclave.cardinal})` : "";
  const allTitle = pope.length ? `${title} ${pope}` : title;
  useEffect(() => {
    if (title) {
      document.title = title;
      if (cardinals.length === 0 || startDate === "") {
        navigate("/");
      }
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardinals, startDate]);
  if (startDate === "") {
    navigate("/");
    return null;
  }
  return (
    <div style={{ paddingInline: "1rem", width: "97vw" }}>
      <Link to="/">
        <ChevronLeft sx={{ position: "relative", top: "0.25em" }} />
        Home
      </Link>
      <Typography variant="h1" component="h1" align="left">
        {allTitle}
      </Typography>
      <Typography variant="h2" component="h2" align="left">
        Liste der beteiligten Kardinäle
      </Typography>
      {cardinals.map((cardinal, index) => (
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

export default Konklave;
