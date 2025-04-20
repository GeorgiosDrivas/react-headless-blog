# Headless Blog

This is a React-based headless blog application that fetches data from a WordPress backend using its REST API. The project is built with TypeScript, React Router, and Vite, and styled using SCSS.

## Features

- **Home Page**: A simple landing page.
- **Blog Page**: Displays a list of blog posts and categories fetched from the WordPress API.
- **Category Posts**: Shows posts filtered by category.
- **Article Page**: Displays the full content of a single blog post.
- **Contact Page**: A placeholder contact page.
- **Responsive Navigation**: Includes a navigation bar with links to different sections of the site.

## API Endpoints

The application fetches data from the following WordPress REST API endpoints:

- **Categories**: http://headless-blog.local/wp-json/wp/v2/categories
- **Posts**: http://headless-blog.local/wp-json/wp/v2/posts?_embed

## Technologies Used

- **Frontend**: React, React Router, TypeScript, SCSS
- **Build Tool**: Vite
- **Linting**: ESLint
- **Backend**: WordPress REST API
