import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from '../components/Navigation';
import apiKeys from '../ApiKeys' ;

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cachedImages, setCachedImages] = useState([]);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const cachedData = await AsyncStorage.getItem('images');
        if (cachedData) {
          setCachedImages(JSON.parse(cachedData));
          setImages(JSON.parse(cachedData));
          setLoading(false);
        } else {
          const response = await fetch(
            `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=${apiKeys.flickrApiKey}&format=json&nojsoncallback=1&extras=url_s`
          );
          const data = await response.json();
          setImages(data.photos.photo);
          await AsyncStorage.setItem('images', JSON.stringify(data.photos.photo));
        }
      } catch (error) {
        console.error(error);
        setIsOffline(true);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    const checkForInternetConnection = async () => {
      try {
        const response = await fetch(
          `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=${apiKeys.flickrApiKey}&format=json&nojsoncallback=1&extras=url_s`
        );
        const data = await response.json();
        if (JSON.stringify(data.photos.photo)!== JSON.stringify(cachedImages)) {
          setImages(data.photos.photo);
          await AsyncStorage.setItem('images', JSON.stringify(data.photos.photo));
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (!isOffline) {
      checkForInternetConnection();
    }
  }, [isOffline, cachedImages]);

  const renderItem = ({ item }) => {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'purple',
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 10,
      }}>
        <Image source={{ uri: item.url_s }} style={{ width: 100, height: 100, borderRadius: 10, margin:10 }} />
      </View>
    );
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      // padding: 20,
      marginTop:30,
    }}>
      <Navigation/>
      {loading? (
        <ActivityIndicator size="large" color="#4F8EF7" />
      ) : (
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      )}
      {isOffline && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No internet connection. Showing cached images.</Text>
        </View>
      )}
    </View>
  );
};

export default ImageGallery;