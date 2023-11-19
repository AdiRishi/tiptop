import { formatISO, isValid, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { sql } from 'drizzle-orm';
import { customType } from 'drizzle-orm/sqlite-core';

export const dateTime = customType<{ data: Date; driverData: string }>({
  dataType() {
    return 'text';
  },
  toDriver(value: Date): string {
    if (isValid(value)) {
      return formatISO(value);
    }
    throw new Error(`DateTime is invalid`);
  },
  fromDriver(value: string): Date {
    // Try parsing as ISO first
    const result: Date = parseISO(value);
    if (isValid(result)) {
      return utcToZonedTime(result, 'UTC'); // Convert to UTC
    }

    throw new Error(`DateTime is invalid`);
  },
});

export const dateTimeDefaultSQL = sql<string>`strftime('%Y-%m-%dT%H:%M:%SZ', 'now', 'utc')`;
