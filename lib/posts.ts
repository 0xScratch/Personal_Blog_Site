import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'blogposts')

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        // Here '$' represents the end of a line or a string
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        // matterResult return two things -> front-matter and main content, which both are useful
        const matterResult = matter(fileContents);

        const blogpost:BlogPost = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date
        }

        // Combine the data with the id
        return blogpost
    })

    // Sort posts by date
    return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1)
}