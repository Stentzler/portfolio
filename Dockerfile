# Build the static export with the Node version pinned by package.json.
FROM node:20-alpine AS builder

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# A small unprivileged Nginx image serves the generated files; no Next.js
# runtime is required after the static export is built.
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runner

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 3001
