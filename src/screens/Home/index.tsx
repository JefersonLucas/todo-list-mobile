import { useState } from 'react'
import { Alert, FlatList, Text, View } from 'react-native'

import { Empty } from '../../components/Empty'
import { Header } from '../../components/Header'
import { Task, TaskProps } from '../../components/Task'
import { Icon } from '../../components/Icon'

import { theme } from '../../styles/theme'
import { uuid } from '../../utils/uuid'

import { styles } from './styles'

export function Home() {
	const [tasks, setTasks] = useState<TaskProps[]>([])
	const [newTask, setNewTask] = useState('')

	function handleTaskAdd() {
		if (newTask !== '' && newTask.length >= 5) {
			setTasks((tasks) => [
				...tasks,
				{
					id: uuid(),
					title: newTask.trim(),
					isCompleted: false,
				},
			])
			setNewTask('')
		}
	}

	function handleTaskDone(id: string) {
		setTasks((tasks) =>
			tasks.map((task) => {
				task.id === id ? (task.isCompleted = !task.isCompleted) : null
				return task
			}),
		)
	}

	function handleDeleteTask(id: string) {
		return Alert.alert(
			'Remover Tarefa',
			`Realmente deseja remover a tarefa "${getTitleTaskById(id)}"?`,
			[
				{
					text: 'Sim',
					onPress: () =>
						setTasks((tasks) =>
							tasks.filter((task) => task.id !== id),
						),
					style: 'destructive',
				},
				{ text: 'Não', style: 'cancel' },
			],
		)
	}

	const getTitleTaskById = (id: string): string =>
		tasks
			.filter((task) => task.id === id && task.title)
			.map((item) => (item.title ? item.title : ''))[0]
	const tasksCreated = tasks.length
	const completeTasks = tasks.filter(({ isCompleted }) => isCompleted).length

	return (
		<View style={styles.container}>
			<Header
				task={newTask}
				onChangeText={setNewTask}
				onPress={handleTaskAdd}
			/>

			<View style={styles.tasksContainer}>
				<View style={styles.info}>
					<View style={styles.left}>
						<Icon
							name="playlist-plus"
							size={24}
							color={theme.colors.brand.blue}
						/>
						<Text style={styles.created}>Criadas</Text>
						<View style={styles.counterContainer}>
							<Text style={styles.counterText}>
								{tasksCreated}
							</Text>
						</View>
					</View>
					<View style={styles.right}>
						<Icon
							name="playlist-check"
							size={24}
							color={theme.colors.brand.purple}
						/>
						<Text style={styles.done}>Concluídas</Text>
						<View style={styles.counterContainer}>
							<Text style={styles.counterText}>
								{completeTasks}
							</Text>
						</View>
					</View>
				</View>

				<FlatList
					data={tasks}
					keyExtractor={(task) => task.id}
					renderItem={({ item }) => (
						<Task
							key={item.id}
							taskDone={() => handleTaskDone(item.id)}
							deleteTask={() => handleDeleteTask(item.id)}
							{...item}
						/>
					)}
					ListEmptyComponent={() => <Empty />}
				/>
			</View>
		</View>
	)
}
