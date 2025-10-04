import * as dataModule from "./data";

// Mock praenomen imports to avoid dependency issues
jest.mock("./praenomen/A/A", () => ({ A: [] }));
jest.mock("./praenomen/B/B", () => ({ B: [] }));
jest.mock("./praenomen/C/C", () => ({ C: [] }));
jest.mock("./praenomen/D/D", () => ({ D: [{ name: "TestD", data: [] }] }));
jest.mock("./praenomen/E/E", () => ({ E: [] }));
jest.mock("./praenomen/F/F", () => ({ F: [] }));
jest.mock("./praenomen/G/G", () => ({ G: [] }));
jest.mock("./praenomen/H/H", () => ({ H: [] }));
jest.mock("./praenomen/I/I", () => ({ I: [] }));
jest.mock("./praenomen/K/K", () => ({ K: [] }));
jest.mock("./praenomen/L/L", () => ({ L: [] }));
jest.mock("./praenomen/M/M", () => ({ M: [] }));
jest.mock("./praenomen/N/N", () => ({ N: [] }));
jest.mock("./praenomen/O/O", () => ({ O: [] }));
jest.mock("./praenomen/P/P", () => ({ P: [] }));
jest.mock("./praenomen/R/R", () => ({ R: [] }));
jest.mock("./praenomen/S/S", () => ({ S: [] }));
jest.mock("./praenomen/T/T", () => ({ T: [] }));
jest.mock("./praenomen/V/V", () => ({ V: [] }));
jest.mock("./praenomen/X/X", () => ({ X: [] }));
jest.mock("./praenomen/Z/Z", () => ({ Z: [] }));

describe("data.ts", () => {
  it("should import D correctly", () => {
    // D is mocked as [{ name: 'TestD', data: [] }]
    expect(dataModule.getAllCardinals()).toEqual([{ name: "TestD", data: [] }]);
  });

  it("getCardinals returns empty array for invalid year", () => {
    expect(dataModule.getCardinals("9999")).toEqual([]);
  });

  it("allKonklaveYears returns sorted array of years", () => {
    const years = dataModule.allKonklaveYears();
    expect(Array.isArray(years)).toBe(true);
    expect(years).toEqual(years.slice().sort());
  });

  it("startDates contains expected keys", () => {
    expect(Object.keys(dataModule.startDates)).toContain("1800");
    expect(dataModule.startDates["1800"]).toBe("1799-12-01");
  });

  it("conclaves contains expected pope and cardinal data", () => {
    const conclave = dataModule.conclaves.find((c) => c.key === "1800");
    expect(conclave).toBeDefined();
    expect(conclave?.pope.name).toBe("Pius");
    expect(conclave?.cardinal.firstName).toBe("Luigi Barnaba");
  });
});
