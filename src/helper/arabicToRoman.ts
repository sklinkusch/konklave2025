export const arabicToRoman = (num: number) => {
  const romanNumerals: { value: number; numeral: string }[] = [
    { value: 1000, numeral: "M" },
    { value: 999, numeral: "IM" },
    { value: 990, numeral: "XM" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 499, numeral: "ID" },
    { value: 490, numeral: "XD" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 99, numeral: "IC" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 49, numeral: "IL" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];
  let result = "";
  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
};
