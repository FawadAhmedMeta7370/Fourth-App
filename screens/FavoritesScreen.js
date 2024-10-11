import {StyleSheet, Text, View} from 'react-native';
import MealsList from '../components/MealsList/MealsList';
// import {useContext} from 'react';
// import { FavoritesContext } from "../store/context/favorites-context"
import {MEALS} from '../data/dummy-data';
import {useSelector} from 'react-redux';

function FavouritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext)

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You don't have any favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'brown',
    textDecorationLine: 'underline',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FavouritesScreen;
