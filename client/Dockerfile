# client/Dockerfile

# Use a recent Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app (if you are using Webpack)
RUN npm run build

# Expose the port the app runs on
EXPOSE 8081

# Command to run the app
CMD ["npm", "start"]
