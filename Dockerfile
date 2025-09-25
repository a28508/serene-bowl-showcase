# Etapa 1: Construir la aplicación
FROM node:20-alpine
WORKDIR /app
COPY .. .
RUN npm install && npm run build
RUN apk add --no-cache nginx
RUN mkdir -p /var/www/nginx/html && cp -r dist/* /var/www/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]