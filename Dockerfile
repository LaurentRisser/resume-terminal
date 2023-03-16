# Use the official Node.js image with a specific version (e.g., 16) to have better control over the environment
FROM node:16

# Set a non-root user for better security
USER node

# Create and set the working directory owned by the non-root user
WORKDIR /home/node/app

# Expose the default port for the application
EXPOSE 8080

# Copy package.json and package-lock.json using a wildcard, to ensure both are copied if present
COPY --chown=node:node package*.json ./

# Set the ownership of the working directory to the 'node' user
RUN sudo chown -R node:node /home/node/app

# Install the application's dependencies without updating package-lock.json
RUN npm ci

# Copy the rest of the application's source code and resources with the non-root user's permissions
COPY --chown=node:node . ./

# Start the application in development mode
CMD [ "npm", "run", "dev"]
