import {createContext, useState} from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: id => {},
  removeFavorite: id => {},
});

function FavoritesContextProvider({children}) {
  const [favoritesMealIds, setFavoritesMealIds] = useState([]);

  function addFavorite(id) {
    setFavoritesMealIds(currentFavIds => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoritesMealIds(currentMeals =>
        currentMeals.filter(mealId => mealId !== id),
    );
  }

  const value = {
    ids: favoritesMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
