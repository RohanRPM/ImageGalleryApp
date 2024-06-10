# Flickr Image Gallery Mobile App

## Overview

This mobile app displays recent images from Flickr on the homepage. It features a left navbar with a "Home" option and uses image caching to ensure that the last viewed images are retained when the app is opened offline. The view refreshes automatically when there are changes in the API response, similar to Instagram's functionality.

## Features

- **Homepage**: Displays recent images fetched from Flickr.
- **Left Navbar**: Contains a "Home" option to navigate back to the homepage.
- **Image Caching**: Saves image links in async storage to ensure images are available offline. Refreshes only when the API response changes.

## API

The app uses the following API to fetch recent images from Flickr:

