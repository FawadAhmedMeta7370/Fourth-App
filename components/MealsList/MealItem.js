import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MealsDetail from '../MealDetails';

function MealItem({id, title, imageUrl, duration, complexity, affordability}) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate('MealsDetail', {
      mealId: id,
    });
  }

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => (pressed ? styles.buttonpressed : null)}
        onPress={selectMealItemHandler}>
        <View>
          <Image style={styles.image} source={{uri: imageUrl}} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealsDetail
          duration={duration}
          complexity={complexity}
          affordability={affordability}/>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'black',
    overflow: 'hidden',
    margin: 5,
    backgroundColor: 'white',
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    padding: 5,
  },
  buttonpressed: {
    opacity: 0.8,
  },
});

export default MealItem;
