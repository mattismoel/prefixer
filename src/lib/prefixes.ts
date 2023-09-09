import type { SIPrefix } from "./types/question";

export const prefixes: Array<SIPrefix> = [
    { short: "y", long: "yotta", exponent: 24 },
    { short: "z", long: "zetta", exponent: 21 },
    { short: "e", long: "exa", exponent: 18 },
    { short: "p", long: "peta", exponent: 15 },
    { short: "t", long: "tera", exponent: 12 },
    { short: "g", long: "giga", exponent: 9 },
    { short: "m", long: "mega", exponent: 6 },
    { short: "k", long: "kilo", exponent: 3 },
    { short: "h", long: "hecto", exponent: 2 },
    { short: "da", long: "deca", exponent: 1 },
    { short: "d", long: "deci", exponent: -1 },
    { short: "c", long: "centi", exponent: -2 },
    { short: "m", long: "milli", exponent: -3 },
    { short: "µ", long: "micro", exponent: -6 },
    { short: "n", long: "nano", exponent: -9 },
    { short: "p", long: "pico", exponent: -12 },
    { short: "f", long: "femto", exponent: -15 },
    { short: "a", long: "atto", exponent: -18 },
    { short: "z", long: "zepto", exponent: -21 },
    { short: "y", long: "yocto", exponent: -24 },
  ];