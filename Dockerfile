# First stage build
FROM node:20-alpine AS builder

# Create application DIR
WORKDIR /usr/src/app

# Copy app dependencies to /usr/src/app/ folder in the image.
COPY package*.json ./

# Install app dependencies.
RUN npm update && npm install --loglevel verbose

# Copy app files.
COPY . .

RUN npm run build -- --output-path=./dist/out --configuration production

# Second stage build
FROM nginx:1.25.1-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy output directory from builder to nginx image.
COPY --from=builder /usr/src/app/dist/out /usr/share/nginx/html

# Expose the port where we can find this container running
EXPOSE 80
