import { MaterialCommunityIcons } from '@expo/vector-icons'

type IconProps = {
	name: keyof typeof MaterialCommunityIcons.glyphMap
	color: string
	size: number
}

export function Icon(props: IconProps) {
	return <MaterialCommunityIcons {...props} />
}
