# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies

RUN npm install 

# Copy the rest of the files from the current directory to the container's working directory
COPY . .

# Build the React app
RUN npm run build

# Set environment variable to production
ENV NODE_ENV=production

# Expose port 80 for the frontend service
EXPOSE 3000

# Serve the built React app using a simple HTTP server (like 'serve')
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
