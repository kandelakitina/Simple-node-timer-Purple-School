const UNIT_TO_MS = {
	h: 60 * 60 * 1000,
	m: 60 * 1000,
	s: 1000,
};

async function timeout(ms) {
	console.log(`Waiting for ${ms} milliseconds...`);
	await new Promise((resolve) => setTimeout(resolve, ms));
	console.log(`Waited for ${ms} milliseconds.`);
}

function parseTimeParts(parts) {
	let totalMs = 0;

	for (const part of parts) {
		const match = part.match(/^(\d+)([hms])$/);
		if (!match) {
			throw new Error(`Invalid time format: ${part}`);
		}

		const [, value, unit] = match;
		totalMs += Number(value) * UNIT_TO_MS[unit];
	}

	return totalMs;
}

const args = process.argv.slice(2);
const ms = parseTimeParts(args);
timeout(ms);
