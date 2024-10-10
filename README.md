# Travelio - Frontend

[Live URL](https://travelio-client-dusky.vercel.app)

## Introduction

Travelio is a travel-centric platform where users can share travel stories, tips, and guides, interact with other travelers, and explore premium content. The frontend is built with modern web technologies to ensure a responsive, engaging, and performant user experience.

## Features

- Authentication: JWT-based authentication with NextAuth.
- Travel Posts: Create and share travel experiences using a rich text editor.
- User Interactions: Upvote, downvote, comment on posts, and follow other travelers.
- Infinite Scrolling: Seamless browsing of posts with infinite scroll.
- Search and Filter: Find posts by categories or users with optimized search functionality.
- PDF Download: Download posts as PDFs for offline access.
- Profile Management: Update user profiles, including uploading profile pictures.
- Dark Mode: Toggle between light and dark themes.
- Responsive Design: Fully responsive UI for mobile and desktop use.

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Ant Design](https://ant.design)
- [React Hook Form](https://react-hook-form.com)
- [Zod](https://zod.dev)
- [nexios-http](https://www.npmjs.com/package/nexios-http)
- [JWT](https://jwt.io/)
- [React Hot Toast](https://react-hot-toast.com/)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmedhimel21/travelio-client
   cd your-repo-name/frontend
   ```
2. Install dependencies::
   ```bash
   npm install
   or
   yarn install
   ```
3. Start the development server:

   ```bash
   npm run dev
   or
   yarn run dev
   The app should now be running on http://localhost:3000.
   ```

### APIs

This frontend communicates with backend APIs for handling user authentication, posts, and more. The backend APIs handle the business logic and data storage using Node.js and MongoDB. Refer to the backend repository for detailed API documentation.
[Backend Repository](https://github.com/ahmedhimel21/travelio-server)

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).
