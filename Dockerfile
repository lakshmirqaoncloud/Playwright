FROM mcr.microsoft.com/playwright:v1.53.0-jammy

WORKDIR /app

# Copy package files first for better Docker caching
COPY package*.json ./

# Install all dependencies (including dev dependencies for tests)
RUN npm ci

# Copy source code (includes TestConfig.ts)
COPY . .

# Copy .env file if it exists (for environment-specific configs)
COPY .env* ./

# Install Playwright browsers and dependencies (already included in base image, but ensuring deps)
RUN npx playwright install-deps

# Create directories for reports and results
RUN mkdir -p test-results playwright-report

# Set environment for CI
ENV CI=true
ENV NODE_ENV=test

# Default environment variables (can be overridden)
ENV STAGING_URL=https://advisor.forastaging.net
ENV PROD_URL=https://advisor.fora.travel

# Set proper permissions
RUN chmod -R 755 /app

# Default command (can be overridden)
CMD ["npm", "test"] 