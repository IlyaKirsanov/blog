import { C_BLACK, C_DARK_BLUE, C_SECONDARY, C_TERTIARY, FF_INTER } from "../../constants/style-variables";
import { getColorWithTransparency } from "../../utils/style-utils";

export const styles = {
	container: {
		width: '100%',
		height: '100%',
		padding: '20px',
		backgroundColor: '#fff',
		display: 'flex',
		flexDirection: 'column',
		color: C_BLACK,
		fontFamily: FF_INTER
	},
	topWrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '20px'
	},
	title: {
		color: C_DARK_BLUE,
		fontWeight: 'bold'
	},
	closeBtn: {
		color: C_SECONDARY,
		width: '40px',
		boxSizing: 'border-box',
		height: '40px',
		minWidth: '0px',
		":hover": {
			backgroundColor: getColorWithTransparency(C_SECONDARY, '10'),
		},
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		flex: 1,
		gap: '20px'
	},
	postTitleInput: {
		'label': {
			color: `${C_DARK_BLUE} !important`,
			borderColor: `${C_DARK_BLUE} !important`
		},
		'div fieldset': {
			border: `1px solid ${C_DARK_BLUE} !important`,
		}
	},
	postContentInput: {
		'label': {
			color: `${C_DARK_BLUE} !important`,
			borderColor: `${C_DARK_BLUE} !important`
		},
		'div fieldset': {
			border: `1px solid ${C_DARK_BLUE} !important`,
		}
	},
	submitBtn: {
		backgroundColor: C_TERTIARY,
		color: C_DARK_BLUE,
		fontWeight: 'bold',
		fontSize: '18px',
		lineHeight: '34px',
		textTransform: 'none',
		":hover": {
			backgroundColor: getColorWithTransparency(C_TERTIARY, '80'),
		},
	}

} as const;
