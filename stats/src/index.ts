import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

// const csvFileReader = new CsvFileReader("football.csv");
// const matchReader = new MatchReader(csvFileReader);

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();
//
// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport()); // new ConsoleReport()

const summary = Summary.winsAnalysisWithHtmlReport("Man United");

summary.buildAndPrintReport(matchReader.matches);
