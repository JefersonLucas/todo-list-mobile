import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 64,
		backgroundColor: theme.colors.base.gray500,
		borderRadius: 8,
		marginVertical: 4,
		paddingHorizontal: 12,
		paddingVertical: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderWidth: 1,
		borderColor: theme.colors.base.gray400,
	},
	textContainer: {
		width: '80%',
		marginHorizontal: 8,
		height: 40,
		alignContent: 'center',
		justifyContent: 'center',
	},
	textCreated: {
		fontSize: theme.font_size.md,
		fontFamily: theme.font_family.regular,
		color: theme.colors.base.gray100,
		textDecorationLine: 'none',
	},
	textDone: {
		fontSize: theme.font_size.md,
		fontFamily: theme.font_family.regular,
		color: theme.colors.base.gray300,
		textDecorationLine: 'line-through',
	},
})
