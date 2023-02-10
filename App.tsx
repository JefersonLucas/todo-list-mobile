import { StatusBar } from 'expo-status-bar'
import {
	useFonts,
	Inter_400Regular,
	Inter_700Bold,
} from '@expo-google-fonts/inter'
import { Home } from './src/screens/Home'
import { Loading } from './src/components/Loading'

export default function App() {
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_700Bold,
	})
	return (
		<>
			<StatusBar style="light" />
			{fontsLoaded ? <Home /> : <Loading />}
		</>
	)
}
