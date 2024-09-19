import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

const FavoritesScreen = ({ navigation, route }) => {
  const { favoriteMovies } = route.params;

  const renderFavoriteItem = ({ item }) => (
    <TouchableOpacity
      style={styles.movieItem}
      onPress={() => navigation.navigate('MoviesDetails', { movieId: item.id })}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.movieImage} />
      <View style={styles.movieInfo}>
        <Text style={styles.movieTitle}>{item.title}</Text>
        <Text style={styles.movieDirector}>Directed by: {item.director}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteMovies}
        renderItem={renderFavoriteItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  movieItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  movieImage: {
    width: 100,
    height: 200,
    marginRight: 20,
  },
  movieInfo: {
    flex: 1,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieDirector: {
    fontSize: 14,
    color: '#666',
  },
});

export default FavoritesScreen;
