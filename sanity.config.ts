import { defineConfig } from 'sanity';
import { structureTool } from "sanity/structure";
import schemas from './sanity/schemas';

const config = defineConfig({

    projectId: "0be46d9r",
    dataset: "production",
    title: "Teddy's Portfolio",
    apiVersion: "2025-7-31",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: { types: schemas}

})

export default config;