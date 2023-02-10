import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.base.gray600,
	},
	tasksContainer: {
		flex: 1,
		marginTop: 55,
		marginHorizontal: 24,
	},
	info: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	left: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	right: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	created: {
		color: theme.colors.brand.blue,
		fontSize: theme.font_size.md,
		fontFamily: theme.font_family.bold,
		marginLeft: 4,
	},
	done: {
		color: theme.colors.brand.purple,
		fontSize: theme.font_size.md,
		fontFamily: theme.font_family.bold,
		marginLeft: 4,
	},
	counterContainer: {
		backgroundColor: theme.colors.base.gray400,
		width: 25,
		height: 19,
		borderRadius: 999,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 8,
	},
	counterText: {
		color: theme.colors.base.gray200,
		fontSize: theme.font_size.sm,
		fontFamily: theme.font_family.bold,
	},
	list: {
		marginTop: 20,
	},
})
