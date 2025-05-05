import { Typography } from "@mui/material";
import { Table } from "../Table/Table";

type FirstNameProps = {
  name: string;
  data: {
    latin: string;
    firstName: string;
    lastName: string;
    nation: string;
    function: string;
  }[]
}

const FirstName = ({ name, data}: FirstNameProps) => {
  return (
    <div style={{ marginBlock: "1rem" }}>
      <Typography variant="h3" component="h3" align="left">{name}</Typography>
      <Table data={data} />
    </div>
  )
}

export { FirstName };