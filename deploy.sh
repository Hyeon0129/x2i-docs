#!/bin/bash

npm run build
node deploy.js

sleep 5

rm -f build.zip unzip.php