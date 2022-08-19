#FROM node:16-alpine AS BUILD_IMAGE
##RUN apk update && apk add yarn curl bash && rm -rf /var/cache/apk/*
#
##RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin
#RUN npm set progress=false
#WORKDIR /app
#COPY package.json package-lock.json ./
#COPY prisma ./prisma/
#RUN npm ci --no-audit --progress=false
#
#ARG node_env=production
#ENV NODE_ENV $node_env
#
#COPY . .
#
#RUN npm run build && npm run generate
#
##RUN npm install --no-audit --progress=false
## run node prune
##RUN /usr/local/bin/node-prune
#
##FROM node:16-alpine
##WORKDIR /app
#
## copy from build image
##COPY --from=BUILD_IMAGE /app/dist ./dist
##WORKDIR /app/dist/apps/backend
#
##COPY --from=BUILD_IMAGE /app/prisma ./prisma
#
#CMD ["npm", "run", "start"]

FROM node:12-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
COPY prisma ./prisma/
COPY .env ./
RUN npm install

COPY . .
RUN npm run build && npm run generate

FROM node:12-alpine AS server
WORKDIR /app
COPY package* ./
COPY prisma ./prisma/
COPY .env ./
RUN npm install --production
COPY --from=builder ./app/build ./build
COPY --from=builder ./app/prisma ./prisma

EXPOSE 8081
CMD ["npm", "start"]