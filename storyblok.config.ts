// storyblok.config.ts
import { defineConfig } from "storyblok/config";

export default defineConfig({
  // General settings
  region: process.env.STORYBLOK_REGION, // Storyblok region: 'eu', 'us', 'ap', 'ca', 'cn'
  verbose: false, // Enable verbose output

  space: process.env.STORYBLOK_SPACE_ID, // Default space ID for commands that require it
  path: ".storyblok", // Base directory

  // UI configuration
  ui: {
    enabled: true, // Enable UI output
  },

  // API configuration
  api: {
    maxRetries: 3, // Maximum retry attempts for failed requests
    maxConcurrency: 6, // Maximum concurrent API requests
  },

  // Logging configuration
  log: {
    console: {
      enabled: false, // Enable console logging
      level: "info", // Log level: 'info', 'warn', 'error', 'debug'
    },
    file: {
      enabled: false, // Enable file logging
      level: "info", // File log level
      maxFiles: 10, // Maximum log files to keep
    },
  },

  // Report configuration
  report: {
    enabled: false, // Enable report generation
    maxFiles: 10, // Maximum report files to keep
  },

  // Module-specific configuration
  modules: {
    components: {
      pull: {
        separateFiles: false, // Separate output per component
        filename: "components", // Filename for exports
      },
      push: {
        dryRun: false, // Preview changes without pushing
      },
    },
    datasources: {
      pull: {
        separateFiles: false,
      },
      push: {
        dryRun: false,
      },
    },
    migrations: {
      run: {
        dryRun: false,
      },
    },
    types: {
      generate: {
        filename: "storyblok-component-types.d.ts",
      },
    },
  },
});