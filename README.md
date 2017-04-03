# Hobobar project readme

## Getting Started 

Cordova app:
```
git clone https://github.com/Learn-by-doing/hobobar.git
cd hobobar/app
npm install -g cordova grunt-cli
npm install
grunt
cordova platform add browser
cordova run browser
```
- Run `cordova platform add ios` to add iOS platform. You can also use `cordova platform add android`
- Make sure you have Android SDK to emulate Android and XCode to emulate iOS if you choose to test there
- Run `cordova emulate iOS` to run an app in an emulator

Server:
```
cd hobobar/server
npm install
npm start
```

# Scope of the project
We're creating an app that allows you to see where fruit (nut) trees are located. We're also let the user save a new tree location. The project is meant to be quick hack, not a full product.

There is no 'admin' interface to edit content. There are no accounts. Anyone can store tree data. When a new tree is created, there is no way of editing it afterwards. 

# Components of the project:
- app
- server for storing and serving data

# Functionality

## Record tree location
We want to store:
- location
- image 
- category / type of tree

## Show tree locations and details
- we need a map for tiles
- we need to show the trees as icons on that map
- we need a popup / overlay / ... to show the details
- we won't have the option to filter the map anyhow


# Phone features we're going to use
- access GPS / loction 
- access the camera
- data connection (online only)
we won't have a fallback if these are missing

# Further features
- map - for the map data we are going to try to use OSM 
- icon(s) - we can use https://www.iconfinder.com/ if the licence allows
- UI - decide how to build it - that's still a TODO


Installation
=============

## Database Setup

Once you have MySQL installed, you will need to setup the local database. Run the following SQL queries to create the database and user:
```sql
CREATE DATABASE IF NOT EXISTS hobobar_local;
GRANT USAGE ON * . * TO  'hobobar_local'@'localhost' IDENTIFIED BY  'password' WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0 ;

GRANT ALL PRIVILEGES ON  `hobobar_local` . * TO  'hobobar_local'@'localhost';
```

