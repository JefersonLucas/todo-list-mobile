import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import logo from '../../assets/img/logo.png'
import { theme } from '../../styles/theme'
import { styles } from './style'
import { Icon } from '../Icon'

type HeaderProps = {
	task: string
	onChangeText: (text: string) => void
	onPress: () => void
}

export function Header({ task, onChangeText, onPress }: HeaderProps) {
	return (
		<View style={styles.headerContainer}>
			<Image source={logo} />

			<View style={styles.form}>
				<TextInput
					placeholder="Adicione uma nova tarefa"
					placeholderTextColor={theme.colors.base.gray300}
					style={styles.input}
					cursorColor={theme.colors.base.gray100}
					value={task}
					onChangeText={onChangeText}
				/>
				<TouchableOpacity
					style={styles.button}
					activeOpacity={0.8}
					onPress={onPress}
				>
					<Icon
						name="plus"
						size={22}
						color={theme.colors.base.gray100}
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
}
