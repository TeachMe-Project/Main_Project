FROM node:16-alpine AS builder
WORKDIR /app
COPY server/package.json server/package-lock.json ./server
COPY server/prisma ./prisma/
COPY server/.env ./
RUN npm install
RUN npx prisma generate
COPY . .
RUN npm run build && npm run generate

FROM node:16-alpine AS server
WORKDIR /app
COPY package* ./
COPY prisma ./prisma/
COPY .env ./
COPY --from=builder ./app/prisma ./prisma
RUN npm install --production
RUN npx prisma generate
COPY --from=builder ./app/build ./build

EXPOSE 8081
CMD ["npm", "start"]
