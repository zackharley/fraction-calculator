export default function Fraction(numerator, denominator) {
	return {
		numerator,
		denominator
	}
}

export function addFractions(fraction1, fraction2) {
	let tempDenominator = fraction1.denominator;

	fraction1.numerator *= fraction2.denominator;
	fraction1.denominator *= fraction2.denominator;
	fraction2.numerator *= tempDenominator;
	fraction2.denominator *= tempDenominator;

	let fractionToReturn = {
		numerator: fraction1.numerator + fraction2.numerator,
		denominator: fraction1.denominator
	}

	return normalizeFraction(fractionToReturn);
}

export function subtractFractions(fraction1, fraction2) {
	let tempDenominator = fraction1.denominator;

	fraction1.numerator *= fraction2.denominator;
	fraction1.denominator *= fraction2.denominator;
	fraction2.numerator *= tempDenominator;
	fraction2.denominator *= tempDenominator;

	let fractionToReturn = {
		numerator: fraction1.numerator - fraction2.numerator,
		denominator: fraction1.denominator
	}

	return normalizeFraction(fractionToReturn);
}

export function multiplyFractions(fraction1, fraction2) {
	let fractionToReturn = {
		numerator: fraction1.numerator * fraction2.numerator,
		denominator: fraction1.denominator * fraction2.denominator
	};

	return normalizeFraction(fractionToReturn);
}

export function divideFractions(fraction1, fraction2) {
	fraction2 = {
		numerator: fraction2.denominator,
		denominator: fraction2.numerator
	}

	return multiplyFractions(fraction1, fraction2);
}

function normalizeFraction(fraction) {
	const gcd = getGCD(Math.abs(fraction.numerator), Math.abs(fraction.denominator));
	fraction.numerator /= gcd;
	fraction.denominator /= gcd;
	return fraction;
}

function getGCD(n, m) {
	if(m <= n && n % m === 0) {
		return m;
	} else if(n < m) {
		return getGCD(m, n);
	} else {
		return getGCD(m, n % m);
	}
}