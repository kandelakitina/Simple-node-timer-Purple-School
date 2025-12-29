async function timeout(ms) {
	console.log(`Waiting for ${ms} milliseconds...`);
	return new Promise((resolve) =>
		setTimeout(() => {
			console.log(`Waited for ${ms} milliseconds.`);
			resolve();
		}, ms),
	);
}

function parseTimeString(timeStr) {
	if (typeof timeStr !== "string") {
		throw new Error("Input must be a string");
	}

	const timeParts = timeStr.split(" ");
	let totalMs = 0;

	for (const part of timeParts) {
		if (!/^\d+[hms]$/.test(part)) {
			throw new Error("Invalid time format");
		}

		const unit = part.slice(-1);
		const value = parseInt(part.slice(0, -1));

		switch (unit) {
			case "h":
				totalMs += value * 60 * 60 * 1000;
				break;
			case "m":
				totalMs += value * 60 * 1000;
				break;
			case "s":
				totalMs += value * 1000;
				break;
		}
	}

	return totalMs;
}

const args = process.argv.slice(2);
const timeStr = args.join(" ");
const ms = parseTimeString(timeStr);
timeout(ms);
