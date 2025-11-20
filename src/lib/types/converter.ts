export type Period = { isPeriod: true; length: number } | { isPeriod: false; length?: undefined };
export type PeriodToBase = { isPeriod: true; length: number } | { isPeriod: false | null; length?: undefined };

export type FractionalPart = {
    numerator: number | bigint;
    denominator: number | bigint;
    period: Period;
    value: string;
    exact: boolean;
};

export type FractionalPartOnToBase = {
    period: PeriodToBase;
    value: string;
    steps: {
        denominator: number;
        numerator: number;
        remainder: number;
        multiplicand: number;
        result: number;
    }[];
    exact: boolean;
};

export type WholePartOnToBase = {
    value: string;
    steps: {
        dividend: number;
        divisor: number;
        quotient: number;
        remainder: number;
    }[];
};
