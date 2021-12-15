import fs from "fs";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";

// create an object that satisfies 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// const printMatchResult = (): MatchResult => {
//   if (match[5] === "H") return MatchResult.HomeWin;

//   return MatchResult.AwayWin;
// };

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
