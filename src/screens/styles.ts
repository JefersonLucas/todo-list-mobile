import { StyleSheet } from 'react-native'
import { theme } from '../theme'

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
	tasksCreated: {
		color: theme.colors.brand.blue,
		fontSize: theme.font_size.md,
		fontFamily: theme.font_family.bold,
	},
	tasksDone: {
		color: theme.colors.brand.purple,
		fontSize: theme.font_size.md,
		fontFamily: theme.font_family.bold,
	},
	info: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
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
})
