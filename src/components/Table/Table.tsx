import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
} from "@mui/material";
import Flag from "react-world-flags";
import moment from "moment";
import { countries } from "@assets/countries";

const calculateDateDifference = (start: string, end: string): string => {
  const startDate = moment(start);
  const endDate = moment(end);

  const years = endDate.diff(startDate, "years");
  startDate.add(years, "years");

  const months = endDate.diff(startDate, "months");
  startDate.add(months, "months");

  const days = endDate.diff(startDate, "days");
  const yearString = `${-years} Jahre`;
  let monthString;
  switch (-months) {
    case 0:
      monthString = "";
      break;
    case 1:
      monthString = "1 Monat";
      break;
    default:
      monthString = `${-months} Monate`;
  }
  let dayString;
  switch (-days) {
    case 0:
      dayString = "";
      break;
    case 1:
      dayString = "1 Tag";
      break;
    default:
      dayString = `${-days} Tage`;
  }
  const comma = ", ";
  return `${yearString}${months ? comma : ""}${monthString}${days ? comma : ""}${dayString}`;
};

type TableData = {
  title: string;
  property: "latin" | "firstName" | "lastName" | "age" | "nation" | "function";
  width: string | string[];
};

const CustomTable = ({ data, startDate }: CustomTableProps) => {
  const tableData: TableData[] = [
    {
      title: "Lateinischer Vorname",
      property: "latin",
      width: ["100%", "16vw"],
    },
    {
      title: "Vorname",
      property: "firstName",
      width: ["100%", "16vw"],
    },
    {
      title: "Nachname",
      property: "lastName",
      width: ["100%", "16vw"],
    },
    { title: "Alter", property: "age", width: ["100%", "16vw"] },
    {
      title: "Nationalität",
      property: "nation",
      width: ["100%", "16vw"],
    },
    {
      title: "Funktion",
      property: "function",
      width: ["100%", "20vw"],
    },
  ];
  return (
    <Table>
      <TableHead sx={{ display: ["none", "none", "table-header-group"] }}>
        <TableRow>
          {tableData.map((cell) => (
            <TableCell key={cell.property} sx={{ width: cell.width }}>
              {cell.title}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => {
          const sxCell = {
            color: "black",
            fontWeight: row.elected ? "bold" : "normal",
            display: ["block", "table-cell"],
            borderBottom: "none",
          };
          const age = row.birthday
            ? calculateDateDifference(startDate, row.birthday)
            : "";
          return (
            <TableRow
              key={index}
              sx={{
                backgroundColor: row.elected ? "gold" : "transparent",
                borderBottom: "1px solid rgba(224, 224, 224, 1)",
                overflowX: "hidden",
              }}>
              {tableData.map((cell) => {
                switch (cell.property) {
                  case "age":
                    return (
                      <TableCell
                        key={cell.property}
                        sx={{ ...sxCell, width: cell.width }}>
                        {age}
                      </TableCell>
                    );
                  case "nation":
                    return (
                      <TableCell
                        key={cell.property}
                        sx={{ ...sxCell, width: cell.width }}
                        className="flag-cell">
                        {row.nation.map((singleCountry: string) => {
                          const countryObject =
                            singleCountry in countries
                              ? { title: countries[singleCountry] }
                              : {};
                          return Object.keys(countryObject).includes(
                            "title",
                          ) ? (
                            <Tooltip title={countryObject.title}>
                              <Flag code={singleCountry} key={singleCountry} />
                            </Tooltip>
                          ) : (
                            <Flag code={singleCountry} key={singleCountry} />
                          );
                        })}
                      </TableCell>
                    );
                  default:
                    return (
                      <TableCell
                        key={cell.property}
                        sx={{ ...sxCell, width: cell.width }}>
                        {row[cell.property]}
                      </TableCell>
                    );
                }
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export { CustomTable as Table };
