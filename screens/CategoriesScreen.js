import {FlatList} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';

function CategoriesScreen({ navigation }) {

  function renderCategoryItem(itemdata) {
    function pressHandler() {
        navigation.navigate('MealsOverview', {
            categoryId: itemdata.item.id
        })
    }

    return (
      <CategoryGridTitle
        title={itemdata.item.title}
        color={itemdata.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
