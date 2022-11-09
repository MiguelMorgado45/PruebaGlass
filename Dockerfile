FROM node:16 AS builder

WORKDIR /app

COPY . .

RUN yarn install && yarn build

FROM nginx

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]

# FROM nginx

# WORKDIR /usr/share/react

# RUN curl -fsSL https://deb.nodesource.com/setup_17.x | bash -
# RUN apt-get install -y nodejs

# COPY package.json .

# RUN yarn install


# COPY . .

# RUN yarn build

# RUN rm -r /usr/share/nginx/html/*

# RUN cp -a dist/. /usr/share/nginx/html