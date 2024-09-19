import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Alert } from "react-native";

const movies = [
  { 
    id: '1', 
    title: 'LEO', 
    director: 'Lokesh Kanagaraj', 
    imageUrl: 'https://th.bing.com/th/id/OIP.OzYvJrLmuzt5Wfznm6cUAgAAAA?rs=1&pid=ImgDetMain', 
    reviews: [
      { id: '1', userId: 'anbuS', rating: 4, comment: 'Great movie!' },
      { id: '2', userId: 'SelvanA', rating: 5, comment: 'Absolutely loved it!' }
    ]
  },
  { 
    id: '2', 
    title: 'ELECTION', 
    director: 'Thamizh', 
    imageUrl: 'https://images.ottplay.com/images/election-1715743974.jpg?impolicy=ottplay-20210210&width=1200&height=675', 
    reviews: [
      { id: '3', userId: 'user3', rating: 3, comment: 'Good but could be better' },
      { id: '4', userId: 'user4', rating: 4, comment: 'Enjoyable experience' }
    ]
  },
  { 
    id: '3', 
    title: 'STAR', 
    director: 'Elan', 
    imageUrl: 'https://th.bing.com/th/id/OIF.sQiJirpu1qTaVaH2gZalNg?rs=1&pid=ImgDetMain', 
    reviews: [
      { id: '5', userId: 'user5', rating: 4, comment: 'Great movie!' },
      { id: '6', userId: 'user6', rating: 5, comment: 'Absolutely loved it!' }
    ]
  },
  { 
    id: '4', 
    title: 'The Boys', 
    director: 'Santhosh P', 
    imageUrl: 'https://th.bing.com/th/id/OIP.d79HKOpS14-_ek1Engs4rwHaEj?w=237&h=180&c=7&r=0&o=5&pid=1.7', 
    reviews: [
      { id: '7', userId: 'user7', rating: 3, comment: 'Good but could be better' },
      { id: '8', userId: 'user8', rating: 4, comment: 'Enjoyable experience' }
    ]
  },
  { 
    id: '5', 
    title: 'Hotspot', 
    director: 'Vignesh', 
    imageUrl: 'https://static.toiimg.com/thumb/msid-108585377,width-219,height-317,imgsize-13332/108585377.jpg', 
    reviews: [
      { id: '9', userId: 'user9', rating: 4, comment: 'Great movie!' },
      { id: '10', userId: 'user10', rating: 5, comment: 'Absolutely loved it!' }
    ]
  }
];

const MoviesDetailsScreen = ({ route, navigation }) => {
  const { movieId } = route.params;
  const movieDetails = movies.find(movie => movie.id === movieId);
  const [reviewText, setReviewText] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    const message = isFavorite ? 'Removed from favorites' : 'Added to favorites';
    Alert.alert(message);
    if (!isFavorite) {
      navigation.navigate('Favorites', { favoriteMovies: [movieDetails] });
    }
  };

  const submitReview = () => {
    Alert.alert('Review Submitted', reviewText, [
      { text: 'OK', onPress: () => setReviewText('') }
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: movieDetails.imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{movieDetails.title}</Text>
        <Text style={styles.director}>Directed by: {movieDetails.director}</Text>
        <Text style={styles.reviewText}>User Reviews:</Text>
        {movieDetails.reviews.map(review => (
          <View key={review.id} style={styles.reviewContainer}>
            <Text style={styles.reviewUser}>{review.userId}:</Text>
            <Text style={styles.reviewRating}>Rating: {review.rating}</Text>
            <Text style={styles.reviewComment}>"{review.comment}"</Text>
          </View>
        ))}
        <Text style={styles.reviewText}>Write your review:</Text>
        <TextInput
          style={styles.input}
          value={reviewText}
          onChangeText={setReviewText}
          multiline={true}
          placeholder="Write your review here..."
        />
        <TouchableOpacity style={styles.button} onPress={submitReview}>
          <Text style={styles.buttonText}>Submit Review</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: isFavorite ? 'red' : 'green' }]} onPress={toggleFavorite}>
          <Text style={styles.buttonText}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  detailsContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  director: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
  },
  reviewText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  reviewContainer: {
    marginLeft: 10,
    borderLeftWidth: 2,
    borderColor: '#ccc',
    paddingLeft: 10,
    marginBottom: 10,
  },
  reviewUser: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewRating: {
    fontSize: 16,
    marginBottom: 3,
  },
  reviewComment: {
    fontSize: 16,
  },
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 200,
    alignSelf: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default MoviesDetailsScreen;
