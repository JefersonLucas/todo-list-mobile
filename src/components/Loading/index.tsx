import { ActivityIndicator, View } from 'react-native'
import { theme } from '../../styles/theme'
import { styles } from './styles'

export function Loading() {
	return (
		<View style={styles.container}>
			<ActivityIndicator color={theme.colors.brand.blue} size="large" />
		</View>
	)
}
