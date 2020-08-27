export class CompanyStock {
    constructor(
        public averageDailyVolume10Day?: string,
        public marketCap?: string, 
        public regularMarketChangePercent?: string,
        public regularMarketDayHigh?: string, 
        public regularMarketDayLow?: string,
        public regularMarketOpen?: string,
        public regularMarketPreviousClose?: string,
        public regularMarketPrice?: string,
        public regularMarketVolume?: string) { }
}
