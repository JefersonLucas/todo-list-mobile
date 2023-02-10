import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { theme } from '../../styles/theme'
import { Icon } from '../Icon'

export type TaskProps = {
	id: string
	title: string
	isCompleted: boolean
}

interface Props extends TaskProps {
	taskDone: (id: string) => void
	deleteTask: (id: string) => void
}

export function Task({ id, isCompleted, title, taskDone, deleteTask }: Props) {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPressIn={() => taskDone(id)}>
				<Icon
					name={
						isCompleted
							? 'checkbox-marked-circle-outline'
							: 'checkbox-blank-circle-outline'
					}
					size={22}
					color={
						isCompleted
							? theme.colors.brand.purple
							: theme.colors.brand.blue
					}
				/>
			</TouchableOpacity>
			<View style={styles.textContainer}>
				<Text
					style={isCompleted ? styles.textDone : styles.textCreated}
				>
					{title}
				</Text>
			</View>
			<TouchableOpacity onPressIn={() => deleteTask(id)}>
				<Icon
					name="trash-can-outline"
					size={20}
					color={theme.colors.base.gray300}
				/>
			</TouchableOpacity>
		</View>
	)
}
