export interface Question {
    fromPrefix: SIPrefix;
    toPrefix: SIPrefix;
    unit: SIUnit
}

export interface SIPrefix {
    short: string;
    long: string;
    exponent: number;
}

export interface SIUnit {
    short: string;
    long: string;
}