FROM node:16-alpine AS builder
WORKDIR /app
RUN npm install -g npm@8.18.0
COPY server/package.json server/package-lock.json ./
COPY server/prisma ./prisma/
COPY server/.env ./
COPY server/tsconfig.json ./
RUN npm fund
RUN npm install
RUN npx prisma generate
COPY server ./
RUN npm run build
RUN npm run generate

FROM node:16-alpine AS server
ENV NODE_ENV=production
WORKDIR /app
RUN npm install -g npm@8.18.0
COPY package* ./
COPY server/prisma ./prisma/
COPY server/.env ./
COPY --from=builder ./app/prisma ./prisma
RUN npm install --omit=dev
RUN npx prisma generate
COPY --from=builder ./app/build ./build

EXPOSE 8081
CMD ["npm", "start"]
