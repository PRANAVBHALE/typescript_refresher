const movies: string[] = ['avengers', 'Batman', 'Spiderman'];

const moviesByMakers: string[][] = [
  ['avengers', 'Ironman', 'Spoderman'],
  ['Batman', 'Wonderwoman', 'Superman'],
  ['Casino Royale', 'Spectre'],
];

//flexible types

const dates: (string | Date)[] = [new Date(), '2020-12-1'];
