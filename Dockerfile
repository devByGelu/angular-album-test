
# 1ST STAGE

# Use ubuntu with npm installed
FROM node:alpine AS my-app-build
# Bundle everything inside an application folder named app
WORKDIR /app
# Copy every file of our local application folder toward this app folder
# inside the Docker container
COPY . .
# Install deps then build
RUN npm ci && npm run build

# 2ND STAGE

# Let NGINX serve
FROM nginx:alpine
# Move this build folder toward the Nginx Docker container
COPY --from=my-app-build /app/dist/album /usr/share/nginx/html
EXPOSE 80

# docker build -t angular-app .
# docker run -it --rm -p 9000:80 angular-app
