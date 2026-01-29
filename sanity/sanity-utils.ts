// all types stored here

import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

// sanity stores our projects, get projects runs client.fetch with groq
// that gets the fields we created in project.ts from stored projects and
// returns an array of projects
export async function getProjects(): Promise<Project[]> {
    const client = createClient({
    projectId: "0be46d9r",
    dataset: "production",
    apiVersion: "2025-07-31"

    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": {
                "url": image.asset->url,
                "alt": coalesce(image.alt, name)
            },
            url,
            content
        }`
    )
}
