import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Flag from "react-world-flags";

type CustomTableProps = {
  data: {
    latin: string;
    firstName: string;
    lastName: string;
    nation: string;
    function: string;
  }[];
};

const CustomTable = ({ data }: CustomTableProps) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Lateinischer Vorname</TableCell>
          <TableCell>Vorname</TableCell>
          <TableCell>Nachname</TableCell>
          <TableCell>Nationalität</TableCell>
          <TableCell>Funktion</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => {
          return (
            <TableRow key={index}>
              <TableCell>{row.latin}</TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              {row.nation.length === 2 ? (
                <TableCell>
                  <Flag code={row.nation} />
                </TableCell>
              ) : (
                <TableCell>{row.nation}</TableCell>
              )}
              <TableCell>{row.function}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export { CustomTable as Table };
