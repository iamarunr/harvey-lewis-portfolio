import races from '../data/races.json';

export type Race = (typeof races)[number];
export type Kind = 'win' | 'podium' | 'finish' | 'dnf';

export const ordinal = (n: number) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const isFinish = (r: Race) => r.status === 'finished';
export const raceKind = (r: Race): Kind =>
  !isFinish(r) ? 'dnf' : r.placeOverall === 1 ? 'win' : r.placeOverall <= 3 ? 'podium' : 'finish';

/** "Badwater 135 - 135 Miler" reads as "Badwater 135". */
export const raceName = (r: Race) => r.race.split(' - ')[0];
export const raceResult = (r: Race) => (isFinish(r) ? r.result : 'DNF');
export const racePlace = (r: Race) => (isFinish(r) ? ordinal(r.placeOverall) : '—');
export const raceLabel = (r: Race) =>
  `${raceName(r)} · ${isFinish(r) ? `${r.result} · ${ordinal(r.placeOverall)}` : 'DNF'}`;

/** Stable anchor for a race row, from its date and full event name (one day can hold two results). */
export const raceId = (r: Race) =>
  `r-${r.date}-${r.race.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;

export const stats = (() => {
  const finished = races.filter(isFinish);
  return {
    count: races.length,
    wins: finished.filter((r) => r.placeOverall === 1).length,
    podiums: finished.filter((r) => r.placeOverall <= 3).length,
    firstYear: Math.min(...races.map((r) => r.year)),
    lastYear: Math.max(...races.map((r) => r.year)),
  };
})();
