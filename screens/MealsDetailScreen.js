import {StyleSheet, ScrollView, View, Text, Image, Button} from 'react-native';
import {MEALS} from '../data/dummy-data';
import Meal from '../models/meal';
import MealsDetail from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import {useLayoutEffect} from 'react';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
// import {FavoritesContext} from '../store/context/favorites-context';

function MealsDetailScreen({route, navigation}) {
  // const favoriteMealCtx = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
  const dispatch = useDispatch()

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      // favoriteMealCtx.removeFavorite(mealId);
      dispatch(removeFavorite({id:mealId}))
    } else {
      // favoriteMealCtx.addFavorite(mealId);
      dispatch(addFavorite({id:mealId}))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            color="white"
            icon={ mealIsFavorite ? 'heart-circle-outline' : 'heart-dislike-circle-outline' }
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootcontainer}>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealsDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        text={styles.text}
      />
      <View style={styles.listoutercontainer}>
        <View style={styles.listinnercontainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootcontainer: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
    margin: 5,
    fontSize: 25,
  },
  text: {
    color: 'black',
  },
  listoutercontainer: {
    width: '100%',
    alignItems: 'center',
  },
  listinnercontainer: {
    width: '75%',
  },
});

export default MealsDetailScreen;
