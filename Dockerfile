FROM node:14.8.0-stretch as build
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm install \
    && npm run-script build \
    && ls -l

# Final stage for creating the final Docker image
FROM nginx:1.19-alpine as final
COPY --from=build /app/build/ /var/www/html