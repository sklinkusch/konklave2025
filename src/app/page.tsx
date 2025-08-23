import { allKonklaveYears, conclaves } from "@assets/data";
import { Typography, List, ListItem } from "@mui/material";
import Link from "next/link";

// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata() {
  return {
    title: "Liste der Papstwahlen",
  };
}

export default function Home() {
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
              <Link href={`/${year}`}>{allTitle}</Link>
            </ListItem>
          );
        })}
        <ListItem key="current">
          <Link href="/current">
            Liste der aktuell wahlberechtigten Kardinäle
          </Link>
        </ListItem>
      </List>
    </div>
  );
}
