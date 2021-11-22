import { get } from "lodash";

export const TRANSPARENCY_GRADE = {
	'100': 'ff',
	'95': 'f2',
	'90': 'e6',
	'85': 'd9',
	'80': 'cc',
	'75': 'bf',
	'70': 'b3',
	'65': 'a6',
	'60': '99',
	'55': '8c',
	'50': '80',
	'45': '73',
	'40': '66',
	'35': '59',
	'30': '4d',
	'25': '40',
	'20': '33',
	'15': '26',
	'10': '1a',
	'5': '0d',
	'0': '00',
};

export const getColorWithTransparency = (c: string, t: string): string => {
	const hexT = get(TRANSPARENCY_GRADE, t);

	return c.concat(hexT);
};
