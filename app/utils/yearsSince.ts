export function yearsSince(date1: Date, date2: Date): number {
	return Math.abs(date2.getFullYear() - date1.getFullYear());
}
