export = TotallyRandom;

type Color = "hex" | "rgb" | "rgba" | "hsl" | "hsla";

declare class TotallyRandom {
  constructor(randomizer?: () => number);

  randomizer: () => number;

  array<T>(arr: T[], count?: number, unique?: boolean): T | T[];

  between(num1: number, num2: number, count?: number): number | number[];

  boolean(count?: number): boolean | boolean[];

  chance<T>(arr: [T, number][], count?: number): T;

  color(option?: Color, count?: number): string | string[];

  floatTo(num: number, count?: number): number | number[];

  percent(count?: number): number | number[];

  shuffle<T>(arr: T[]): T[];

  string(
    option?: "alphanumeric" | "alpha" | "numeric",
    length?: number
  ): string;

  to(num: number, count?: number): number | number[];

  colour(option?: Color, count?: number): string | string[];
}
