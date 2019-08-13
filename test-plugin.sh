#!/bin/bash

plugin_dir=$(pwd)
dir=/tmp/test-plugin-area

rm -rf $dir
mkdir -p $dir
cd $dir
cordova create app-preferences-app
cd app-preferences-app
cordova platform add android
cordova plugin add $plugin_dir
cordova prepare
cd platforms/android/app/src/main/res/
echo
echo "prefs xml ------"
cat xml/apppreferences.xml
echo "values xml ------"
cat values/apppreferences.xml
echo
