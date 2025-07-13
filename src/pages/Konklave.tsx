import { useEffect } from "react";
import { Typography } from "@mui/material";
import { FirstName } from "@components/FirstName/FirstName";

type Cardinal = {
  latin: string;
  firstName: string;
  lastName: string;
  nation: string[];
  function: string;
  elected?: boolean;
};

type LatinName = {
  name: string;
  data: Cardinal[];
};

type KonklaveProps = {
  year: number;
  cardinals: LatinName[];
};

function Konklave({ year, cardinals }: KonklaveProps) {
  useEffect(() => {
    document.title = `Konklave ${year}`;
  }, []);
  return (
    <div style={{ paddingInline: "1rem" }}>
      <Typography variant="h1" component="h1" align="left">
        {`Konklave ${year}`}
      </Typography>
      <Typography variant="h2" component="h2" align="left">
        Liste der beteiligten Kardinäle
      </Typography>
      {cardinals.map((cardinal, index) => (
        <FirstName key={index} name={cardinal.name} data={cardinal.data} />
      ))}
    </div>
  );
}

export default Konklave;
