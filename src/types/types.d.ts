type Cardinal = {
  latin: string;
  firstName: string;
  lastName: string;
  nation: { [key: string]: string[] };
  function: { [key: string]: string };
  elected?: { [key: string]: boolean };
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
    nation: string[];
    function: string;
    elected?: boolean;
  }[];
};

type FirstNameProps = {
  name: string;
  data: {
    latin: string;
    firstName: string;
    lastName: string;
    nation: string[];
    function: string;
    elected?: boolean;
  }[];
};

interface NewCardinal {
  latin: string;
  firstName: string;
  lastName: string;
  nation: string[];
  function: string;
  elected?: boolean;
}

interface NewFirstName {
  name: string;
  data: NewCardinal[];
}

type KonklaveProps = {
  year: number;
  cardinals: NewFirstName[];
};
