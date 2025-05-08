import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
} from "@mui/material";
import Flag from "react-world-flags";
import { countries } from "../../assets/countries";

type CustomTableProps = {
  data: {
    latin: string;
    firstName: string;
    lastName: string;
    nation: string[];
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
              {typeof row.nation === "object" && Array.isArray(row.nation) && (
                <TableCell>
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
                      <Flag
                        code={singleCountry}
                        key={singleCountry}
                        {...countryObject}
                      />
                    );
                  })}
                </TableCell>
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
