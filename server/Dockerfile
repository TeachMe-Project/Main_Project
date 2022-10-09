FROM node:16-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
COPY prisma ./prisma/
COPY .env ./
RUN npm install

COPY . .
RUN npm run build && npm run generate

FROM node:16-alpine AS server
WORKDIR /app
COPY package* ./
COPY prisma ./prisma/
COPY .env ./
RUN npm install --production && npm run generate
COPY --from=builder ./app/build ./build
COPY --from=builder ./app/prisma ./prisma

EXPOSE 8081
CMD ["npm", "start"]