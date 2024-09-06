# Production image

# Builder image
FROM node:20.17.0 AS builder

ENV NODE_ENV=production

RUN mkdir -p /home/app

WORKDIR /home/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm ci --only=production

USER node

COPY . .

# Final image
FROM node:20.17.0-slim

USER node

COPY --from=builder /home/app /home/app

WORKDIR /home/app

EXPOSE 3000

CMD ["npm", "start"]