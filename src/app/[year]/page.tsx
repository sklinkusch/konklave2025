import { redirect } from "next/navigation";
import { Link } from "@components/Link/Link";
import { Typography } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import { FirstName } from "@components/FirstName/FirstName";
import { getCardinals, startDates, conclaves } from "@assets/data";
import { NewFirstName } from "@mytypes/types";
import { arabicToRoman } from "src/helper/arabicToRoman";

// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(props: PageProps<"/[year]">) {
  const { year } = await props.params;
  const conclave = conclaves.find((c) => c.key === year);
  return {
    title: conclave ? conclave.title : year,
  };
}

export default async function Konklave(props: PageProps<"/[year]">) {
  const { year } = await props.params;
  const data = getCardinals(year) as NewFirstName[];
  if (!data || data.length === 0) {
    redirect("/");
  }
  const startDate = startDates[year] ?? "";
  const conclave = conclaves.find((conclave) => conclave.key === year);
  const title = conclave ? conclave.title : year;
  if (!title || !startDate) {
    redirect("/");
  }
  return (
    <div style={{ paddingInline: "1rem", width: "97vw" }}>
      <Link href="/" underline="none">
        <ChevronLeft sx={{ position: "relative", top: "0.25em" }} />
        Home
      </Link>
      <Typography variant="h1" component="h1" align="left">
        {conclave ? (
          <Typography variant="inherit" component="span">
            {conclave.title}
          </Typography>
        ) : (
          <Typography variant="inherit" component="span">
            {year}
          </Typography>
        )}
        {conclave && conclave.pope && (
          <Typography
            variant="inherit"
            component="span"
            sx={{ display: "inline-block", ml: "0.3rem" }}>
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
                      borderTop: "0.2rem solid black",
                      borderBottom: "0.2rem solid black",
                      marginLeft: "0.3rem",
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
      </Typography>
      <Typography variant="h2" component="h2" align="left">
        Liste der beteiligten Kardinäle
      </Typography>
      {data.map((firstName) => (
        <FirstName
          key={firstName.name}
          name={firstName.name}
          data={firstName.data}
          startDate={startDate}
        />
      ))}
    </div>
  );
}
