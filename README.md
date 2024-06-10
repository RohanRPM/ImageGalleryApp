# Flickr Image Gallery Mobile App

## Overview

This mobile app displays recent images from Flickr on the homepage. It features a left navbar with a "Home" option and uses image caching to ensure that the last viewed images are retained when the app is opened offline. The view refreshes automatically when there are changes in the API response, similar to Instagram's functionality.

## Features

- **Homepage**: Displays recent images fetched from Flickr.
- **Left Navbar**: Contains a "Home" option to navigate back to the homepage.
- **Image Caching**: Saves image links in async storage to ensure images are available offline. Refreshes only when the API response changes.

## API

The app uses the following API to fetch recent images from Flickr:
https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s



## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/RohanRPM/ImageGalleryApp/
cd <project-directory>
npm install
npm start


## Usage

1. Open the app on your mobile device or emulator.
2. The homepage will display recent images fetched from Flickr.
3. Use the left navbar to navigate back to the homepage if needed.
4. The app caches the images for offline use. If the app is reopened offline, the last viewed images will be displayed.
5. The view will refresh automatically when there are updates in the Flickr API response.

## Dependencies

- React Native
- AsyncStorage (for caching)
- Axios (for API calls)

## Code Structure

- `App.js`: Main component that sets up the navigation and renders the homepage.
- `HomeScreen.js`: Component that fetches and displays recent images from Flickr.
- `ImageCard.js`: Component that displays individual images.
- `storage.js`: Utility for saving and retrieving cached image links from async storage.

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-branch
git commit -m "Add new feature"
git push origin feature-branch


