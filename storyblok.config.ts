// storyblok.config.ts
import { defineConfig } from 'storyblok/config'

type StoryblokRegion = 'eu' | 'us' | 'ap' | 'ca' | 'cn'

export default defineConfig({
  // General settings
  region: process.env.STORYBLOK_REGION as StoryblokRegion,
  verbose: false,

  // Default space and base directory
  space: process.env.STORYBLOK_SPACE_ID,
  path: '.storyblok',

  // UI configuration
  ui: {
    enabled: true,
  },

  // API configuration
  api: {
    maxRetries: 3,
    maxConcurrency: 6,
  },

  // Logging configuration
  log: {
    console: {
      enabled: false,
      level: 'info',
    },
    file: {
      enabled: false,
      level: 'info',
      maxFiles: 10,
    },
  },

  // Report configuration
  report: {
    enabled: false,
    maxFiles: 10,
  },

  // Module-specific configuration
  modules: {
    components: {
      pull: {
        separateFiles: false,
        filename: 'components',
      },
    },

    datasources: {
      pull: {
        separateFiles: false,
      },
    },

    migrations: {
      run: {
        dryRun: false,
      },
    },

    types: {
      generate: {
        filename: 'storyblok-component-types.d.ts',
      },
    },
  },
})