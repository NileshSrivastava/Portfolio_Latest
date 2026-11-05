# ==============================================================================
# Multi-Stage Dockerfile for Nilesh Srivastava's React Portfolio
# Stage 1: Build the React + Vite application (Node.js Alpine)
# Stage 2: Production Web Server (NGINX Alpine)
# ==============================================================================

# ----------------- STAGE 1: Build Environment -----------------
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency manifests first to leverage Docker layer caching
COPY package.json package-lock.json ./

# Install dependencies using clean reproducible install
RUN npm ci

# Copy all source files
COPY . .

# Compile the production bundle into /app/dist
RUN npm run build

# ----------------- STAGE 2: Production Web Server -------------
FROM nginx:alpine AS runner

# Remove default NGINX website configuration
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy custom NGINX configuration optimized for React SPA, gzip, & security headers
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static assets from Stage 1 builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose standard HTTP port
EXPOSE 80

# Container Healthcheck (Monitors /healthz endpoint every 30s)
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:80/healthz || exit 1

# Start NGINX in foreground
CMD ["nginx", "-g", "daemon off;"]

