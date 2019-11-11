#!/bin/sh

export OPENMRS_SITE=https://openmrs.domain.org/openmrs/
export PORT=8087
export SECRET_KEY=YOUR_SECRET_KEY
export SESSION_EXPIRATION=500000
cd .
npm start