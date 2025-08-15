type Rank = "bishop" | "priest" | "deacon";

interface CircleProps {
  rank: Rank;
}

type Cardinal = {
  latin: string;
  firstName: string;
  lastName: string;
  birthday: string;
  nation: { [key: string]: string[] };
  function: { [key: string]: string };
  elected?: { [key: string]: boolean };
  rank: { [key: string]: Rank };
};

type FirstName = {
  name: string;
  data: Cardinal[];
};

type CustomTableProps = {
  data: {
    latin: string;
    firstName: string;
    lastName: string;
    birthday: string;
    nation: string[];
    function: string;
    elected?: boolean;
    rank: Rank;
  }[];
  startDate: string;
};

type FirstNameProps = {
  name: string;
  data: {
    latin: string;
    firstName: string;
    lastName: string;
    birthday: string;
    nation: string[];
    function: string;
    elected?: boolean;
    rank: Rank;
  }[];
  startDate: string;
};

interface NewCardinal {
  latin: string;
  firstName: string;
  lastName: string;
  birthday: string;
  nation: string[];
  function: string;
  elected?: boolean;
  rank: Rank;
}

interface NewFirstName {
  name: string;
  data: NewCardinal[];
}

interface Conclave {
  key: string;
  title: string;
  pope: string;
  cardinal: string;
}
