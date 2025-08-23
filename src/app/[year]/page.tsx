import { redirect } from "next/navigation";
import Link from "next/link";
import { Typography } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import { FirstName } from "@components/FirstName/FirstName";
import { getCardinals, startDates, conclaves } from "@assets/data";
import { NewFirstName } from "@mytypes/types";

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
  const pope = conclave ? `(${conclave.pope}, ${conclave.cardinal})` : "";
  const allTitle = pope.length ? `${title} ${pope}` : title;
  if (!title || !startDate) {
    redirect("/");
  }
  return (
    <div style={{ paddingInline: "1rem", width: "97vw" }}>
      <Link href="/">
        <ChevronLeft sx={{ position: "relative", top: "0.25em" }} />
        Home
      </Link>
      <Typography variant="h1" component="h1" align="left">
        {allTitle}
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
