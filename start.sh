#!/bin/sh
export MYSQL_HOST=127.0.0.1
export MYSQL_USERNAME=openmrs
export MYSQL_USER_PASSWORD=openmrs
export OPENMRS_MYSQL_DATABASE=openmrs
export OPENMRS_SITE=https://openmrs.domin.org/openmrs/
export PORT=8087
export SECRET_KEY=YOUR_SECRET_KEY
export SESSION_EXPIRATION=500000
cd .
npm start