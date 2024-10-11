import { Pressable, StyleSheet } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'

function IconButton({icon, color, onPress}) {
    return (
        <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
            <Ionicons name={icon} size={25} color={color}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5,
        color:'pink'
    }
})

export default IconButton