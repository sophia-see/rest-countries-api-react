export type NativeName = {
    official: string;
    common: string;
}

export type Currency = {
    name: string;
    symbol: string;
}

export type Country = {
    name: {
        common: string;
        official: string;
        nativeName: {
            [languageCode: string]: NativeName;
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
        [code: string]: Currency;
    };
    languages: {
        [code: string]: string;
    };
    borders?: string[];
}
