import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

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
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.latin}</TableCell>
            <TableCell>{row.firstName}</TableCell>
            <TableCell>{row.lastName}</TableCell>
            <TableCell>{row.nation}</TableCell>
            <TableCell>{row.function}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export { CustomTable as Table };
