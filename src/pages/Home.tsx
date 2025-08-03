import { allKonklaveYears } from "@assets/data";
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
        {allYears.map((year) => (
          <ListItem key={year}>
            <Link to={`/year/${year}`}>{year}</Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
