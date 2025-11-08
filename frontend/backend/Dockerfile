# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose frontend port
EXPOSE 3000

# Start the frontend
CMD ["npm", "start"]
