import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

function MovieListScreen({ navigation }) {  

    const movies = [
        { 
          id: '1', 
          title: 'LEO', 
          director: ' Lokesh Kanagaraj', 
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
          },
        
      ];

    const renderMovieItem = ({ item }) => (
        <TouchableOpacity
          style={styles.movieItem}
          onPress={() => navigation.navigate('MoviesDetails', { movieId: item.id })}
        >
          <Image source={{ uri: item.imageUrl }} style={styles.movieImage} />
          <View style={styles.movieInfo}>
            <Text style={styles.movieTitle}>{item.title}</Text>
            <Text style={styles.movieDirector}>Directed by: {item.director}</Text>
            <Text style={styles.reviewText}>User Reviews:</Text>
            {item.reviews.map(review => (
              <View key={review.id} style={styles.reviewContainer}>
                <Text style={styles.reviewUser}>{review.userId}:</Text>
                <Text style={styles.reviewRating}>Rating: {review.rating}</Text>
                <Text style={styles.reviewComment}>"{review.comment}"</Text>
              </View>
            ))}
          </View>
        </TouchableOpacity>
      );

    return (
        <ScrollView contentContainerStyle={styles.container}>
        {movies.map(movie => (
          <View key={movie.id} style={styles.movieContainer}>
            {renderMovieItem({ item: movie })}
          </View>
        ))}
      </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#fff',
    },
    movieContainer: {
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    movieItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
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
    reviewText: {
      marginTop: 10,
      marginBottom: 5,
      fontSize: 16,
      fontWeight: 'bold',
    },
    reviewContainer: {
      marginLeft: 10,
      borderLeftWidth: 2,
      borderColor: '#ccc',
      paddingLeft: 10,
      marginBottom: 5,
    },
    reviewUser: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    reviewRating: {
      fontSize: 14,
      marginBottom: 3,
    },
    reviewComment: {
      fontSize: 14,
    },
  });
  
  export default MovieListScreen;
