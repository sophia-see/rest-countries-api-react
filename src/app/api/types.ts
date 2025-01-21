export type Country = {
    name: {
        common: string;
        official: string;
        nativeName: {
            [languageCode: string]: {
            official: string;
            common: string;
            };
        };
    };
    population: number;
    flags: {
        png: string;
        svg: string;
        alt?: string;
    };
    region: string;
    subregion?: string;
    capital: string[];
    tld: string[];
    currencies: {
        [code: string]: {
            name: string;
            symbol: string;
        };
    };
    languages: {
        [code: string]: string;
    };
    borders?: string[];
}
