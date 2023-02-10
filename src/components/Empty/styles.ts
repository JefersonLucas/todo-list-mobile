import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
	emptyContainer: {
		flex: 1,
		alignItems: 'center',
		width: '100%',
		paddingVertical: 48,
		paddingHorizontal: 20,
		borderTopColor: theme.colors.base.gray400,
		borderEndColor: theme.colors.base.gray600,
		borderStartColor: theme.colors.base.gray600,
		borderBottomColor: theme.colors.base.gray600,
		borderWidth: 1,
	},
	clipboard: {
		marginBottom: 16,
	},
	firstText: {
		fontSize: theme.font_size.md,
		fontFamily: theme.font_family.bold,
		color: theme.colors.base.gray300,
	},
	secondText: {
		fontSize: theme.font_size.md,
		fontFamily: theme.font_family.regular,
		color: theme.colors.base.gray300,
	},
})
