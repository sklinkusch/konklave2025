import { allKonklaveYears, conclaves } from "@assets/data";
import { Typography, List, ListItem } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  useEffect(() => {
    document.title = "Liste der Papstwahlen";
  });
  const allYears = allKonklaveYears();
  return (
    <div style={{ paddingInline: "1rem" }}>
      <Typography variant="h1" component="h1" align="left">
        Liste der Papstwahlen
      </Typography>
      <List>
        {allYears.map((year) => {
          const conclave = conclaves.find((conclave) => conclave.key === year);
          const title = conclave ? conclave.title : year;
          const pope = conclave
            ? `(${conclave.pope}, ${conclave.cardinal})`
            : "";
          const allTitle = pope.length ? `${title} ${pope}` : title;
          return (
            <ListItem key={year}>
              <Link to={`/year/${year}`}>{allTitle}</Link>
            </ListItem>
          );
        })}
        <ListItem key="current">
          <Link to="/current">
            Liste der aktuell wahlberechtigten Kardinäle
          </Link>
        </ListItem>
      </List>
    </div>
  );
};
