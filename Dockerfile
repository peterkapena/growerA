# syntax=docker/dockerfile:1
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
RUN apk add vim
EXPOSE 80
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]

#                           docker build -t grower_x .
#                           docker run -dp 8000:80 grower_x (optional)
#                           docker tag grower_x  kapenapeter/grower_x
#                           docker push kapenapeter/grower_x

#                           sudo docker pull kapenapeter/grower_x
#                           sudo docker run -dp 81:80 kapenapeter/grower_x   