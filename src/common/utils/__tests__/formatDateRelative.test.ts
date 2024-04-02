import {
  addSeconds,
  addMinutes,
  addHours,
  addDays,
  addWeeks,
  addMonths,
} from 'date-fns';
import {formatDateRelative} from '../dateUtils';

const MOCKED_NOW = 1696573824333;
describe('formatDateRelative', () => {
  beforeAll(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('returns seconds when the difference is less than 60 seconds', () => {
    const now = Date.now();
    const pastDate = addSeconds(now, -30);
    expect(formatDateRelative(pastDate.toISOString())).toBe('30 s');
  });

  it('returns minutes when the difference is less than 60 minutes', () => {
    const now = Date.now();
    const pastDate = addMinutes(now, -45);
    expect(formatDateRelative(pastDate.toISOString())).toBe('45 m');
  });

  it('returns hours when the difference is less than 24 hours', () => {
    const now = Date.now();
    const pastDate = addHours(now, -12);
    expect(formatDateRelative(pastDate.toISOString())).toBe('12 h');
  });

  it('returns days when the difference is less than 7 days', () => {
    const now = Date.now();
    const pastDate = addDays(now, -4);
    expect(formatDateRelative(pastDate.toISOString())).toBe('4 d');
  });

  it('returns weeks when the difference is less than 4 weeks', () => {
    const now = Date.now();
    const pastDate = addWeeks(now, -2);
    expect(formatDateRelative(pastDate.toISOString())).toBe('2 sem');
  });

  it('returns months when the difference is less than 12 months', () => {
    const now = Date.now();
    const pastDate = addMonths(now, -8);
    expect(formatDateRelative(pastDate.toISOString())).toBe('8 m');
  });

  it('returns formatted date when the difference is more than 12 months', () => {
    const now = Date.now();
    const pastDate = addMonths(now, -14);
    expect(formatDateRelative(pastDate.toISOString())).toBe('06/08/2022');
  });

  it('returns formatted date when the difference is negative', () => {
    const now = Date.now();
    const pastDate = addMonths(now, 14);
    expect(formatDateRelative(pastDate.toISOString())).toBe('06/12/2024');
  });
});
