# client/Dockerfile

# Stage 1: Build the app with Webpack
FROM node:18-alpine AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Copy the built files to the shared volume location (dist directory)
VOLUME /app/dist
