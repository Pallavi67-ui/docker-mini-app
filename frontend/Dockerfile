# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files first (for efficient caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Expose React default port
EXPOSE 3000

# Start React with host binding to 0.0.0.0
CMD ["npm", "start", "--", "--host", "0.0.0.0"]
