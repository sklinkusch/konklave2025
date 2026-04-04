import { Typography } from "@mui/material";
import { Table } from "../Table/Table";
import type { FirstNameProps } from "@mytypes/types";

const FirstName = ({ name, data, startDate, deceased }: FirstNameProps) => {
  return (
    <div style={{ marginBlock: "1rem" }}>
      <Typography variant="h3" component="h3" align="left">
        {name}
      </Typography>
      <Table data={data} startDate={startDate} deceased={deceased} />
    </div>
  );
};

export { FirstName };
