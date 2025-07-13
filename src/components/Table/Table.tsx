import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
} from "@mui/material";
import Flag from "react-world-flags";
import { countries } from "@assets/countries";

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
          const sxCell = {
            color: "black",
            fontWeight: row.elected ? "bold" : "normal",
          };
          return (
            <TableRow
              key={index}
              sx={{ backgroundColor: row.elected ? "gold" : "transparent" }}>
              <TableCell sx={sxCell}>{row.latin}</TableCell>
              <TableCell sx={sxCell}>{row.firstName}</TableCell>
              <TableCell sx={sxCell}>{row.lastName}</TableCell>
              {typeof row.nation === "object" && Array.isArray(row.nation) && (
                <TableCell sx={sxCell}>
                  {row.nation.map((singleCountry: string) => {
                    const countryObject = countries.hasOwnProperty(
                      singleCountry,
                    )
                      ? { title: countries[singleCountry] }
                      : {};
                    return Object.keys(countryObject).includes("title") ? (
                      <Tooltip title={countryObject.title}>
                        <Flag code={singleCountry} key={singleCountry} />
                      </Tooltip>
                    ) : (
                      <Flag code={singleCountry} key={singleCountry} />
                    );
                  })}
                </TableCell>
              )}
              <TableCell sx={sxCell}>{row.function}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export { CustomTable as Table };
