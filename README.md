# Hobobar

Will be an app that allows you to see where fruit (or nut) trees are located. It will also allow the user to tag new trees in the system.

The scope is meant to be minimal. There will be no 'admin' interface, no accounts, and no editing of content. Anyone can add new trees.


## Requirements

* [git](https://git-scm.com/)
* [nodejs](https://nodejs.org/en/)
* Mobile App:
  * [Cordova](https://cordova.apache.org/)
  * [grunt-cli](https://gruntjs.com/getting-started)
* Web Server:
  * [MySQL](https://www.mysql.com/) - installation instructions will vary based on your operating system


## Getting Started 

Before continuing, be sure to download and install the project [requirements](#requirements).

The project has two parts:
* A mobile app which uses [Cordova](https://cordova.apache.org/) to build our web app for Android, iOS, and browsers.
* A web server which provides a web API for the mobile app. It stores the tree data and images.

To get the project files and start working locally, you must first "clone" the project:
```
git clone https://github.com/Learn-by-doing/hobobar.git
```

### Mobile App Setup

Below are all the commands that you will need to get the mobile app running locally:
```
cd hobobar/app
npm install -g cordova grunt-cli
npm install
grunt
cordova platform add browser
cordova run browser
```
* Note that [Google Chrome](https://www.google.com/chrome/) is required to run the app with `cordova run browser`.
* Run `cordova platform add ios` to add iOS platform. Then run the app with `cordova emulate iOS`. This requires XCode.
* You can also run `cordova platform add android` to add Android. This requires Android SDK.


### Web Server Setup

You will need [MySQL](https://www.mysql.com/) to run the server.

Once you have MySQL installed, you will need to setup the local database. Run the following SQL queries to create the database and user:
```sql
CREATE DATABASE IF NOT EXISTS hobobar_local;
GRANT USAGE ON * . * TO  'hobobar_local'@'localhost' IDENTIFIED BY 'password' WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0 ;
GRANT ALL PRIVILEGES ON  `hobobar_local` . * TO  'hobobar_local'@'localhost';
```

Below are the commands you will need to get the web server running locally:
```
cd hobobar/server
npm install
npm start
```
