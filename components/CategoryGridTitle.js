import {Pressable, StyleSheet, Text, View} from 'react-native';

function CategoryGridTitle(props) {
  const {title, color, onPress} = props;
  return (
    <View style={[styles.grid, {backgroundColor: color}]}>
      <Pressable
        android_ripple={{color: '#c0c0c0'}}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonpressed : null,
        ]}
        onPress={onPress}>
        <View style={styles.innercontainer}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    margin: 15,
    height: 150,
    elevation: 5,
    // borderWidth: 3,
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
  },
  buttonpressed: {
    opacity: 0.5
  },
  innercontainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryGridTitle;
