import { allKonklaveYears, conclaves } from "@assets/data";
import { Typography, List, ListItem } from "@mui/material";
import { Link } from "@components/Link/Link";
import { arabicToRoman } from "src/helper/arabicToRoman";
import { Metadata } from "next";

// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(): Promise<Metadata> {
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
        <ListItem key="current">
          <Link href="/current" underline="none">
            Liste der aktuell wahlberechtigten Kardinäle
          </Link>
        </ListItem>
        {allYears.reverse().map((year) => {
          const conclave = conclaves.find((conclave) => conclave.key === year);
          return (
            <ListItem key={year}>
              <Link href={`/${year}`} underline="none">
                {conclave ? (
                  <Typography variant="inherit" component="span">
                    {conclave.title}
                  </Typography>
                ) : (
                  <Typography variant="inherit" component="span">
                    {year}
                  </Typography>
                )}
                {conclave && (
                  <Typography
                    variant="inherit"
                    component="span"
                    sx={{ display: "inline-block", marginLeft: "0.2rem" }}>
                    (
                    <Typography variant="inherit" component="span">
                      {`${conclave.pope.name}`}
                    </Typography>
                    {typeof conclave.pope.number === "number" &&
                      conclave.pope.number > 0 &&
                      conclave.pope.number % 1 === 0 && (
                        <>
                          <Typography
                            variant="inherit"
                            component="span"
                            sx={{
                              display: "inline-block",
                              lineHeight: 0.75,
                              fontSize: "0.85em",
                              borderTopColor: "inherit",
                              borderTopWidth: "0.1em",
                              borderTopStyle: "solid",
                              borderBottomColor: "inherit",
                              borderBottomStyle: "solid",
                              borderBottomWidth: "0.1em",
                              marginLeft: "0.3rem",
                              px: "0.15em",
                              mr: "0.1rem",
                            }}>
                            {`${arabicToRoman(conclave.pope.number)}`}
                          </Typography>
                          <Typography variant="inherit" component="span">
                            .
                          </Typography>
                        </>
                      )}
                    <Typography variant="inherit" component="span">
                      , {conclave.cardinal.firstName}
                    </Typography>
                    <Typography
                      variant="inherit"
                      component="span"
                      sx={{ fontVariant: "small-caps" }}>
                      {` ${conclave.cardinal.lastName}`}
                    </Typography>
                    )
                  </Typography>
                )}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
