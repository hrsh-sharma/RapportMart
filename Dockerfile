# --- Dockerfile (Angular Frontend with SSR) ---
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli
RUN npm install --legacy-peer-deps

COPY . .

# Build browser bundle AND SSR server bundle
RUN npm run build:ssr

EXPOSE 4000

# Run the SSR Express server (handles all routes, no 404 on refresh)
CMD ["node", "dist/fastkart-frontend-rest/server/main.js"]
    