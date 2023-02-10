import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: theme.colors.base.gray700,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: 173,
		position: 'relative',
		borderBottomLeftRadius: 12,
		borderBottomRightRadius: 12,
	},
	form: {
		position: 'absolute',
		bottom: -52 / 2,
		height: 52,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		height: 52,
		width: '75%',
		backgroundColor: theme.colors.base.gray500,
		borderRadius: 5,
		color: theme.colors.base.gray100,
		padding: 16,
		fontSize: theme.font_size.lg,
		fontFamily: theme.font_family.regular,
		marginRight: 4,
		borderColor: theme.colors.base.gray700,
		borderWidth: 1,
	},
	button: {
		width: 52,
		height: 52,
		borderRadius: 5,
		backgroundColor: theme.colors.brand.blueDark,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
