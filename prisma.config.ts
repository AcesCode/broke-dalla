// LOCATION: prisma.config.ts

import { defineConfig } from '@prisma/config';

export default defineConfig({
    // Change 'datasources' to 'datasource' (Singular)
    datasource: {
        provider: "sqlite",
        url: "file:./dev.sqlite"
    }
});