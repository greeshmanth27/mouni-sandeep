# Wedding Invitation Website

## About This Project

This is a beautiful, interactive wedding invitation website built with modern web technologies. The site features photo galleries, countdown timers, venue information, and background music for an engaging user experience.

## Technologies Used

This project is built with:

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- shadcn/ui
- Zustand (for state management)

## Getting Started

### Prerequisites

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- Git

### Local Development

```sh
# Clone the repository
git clone <YOUR_REPOSITORY_URL>

# Navigate to the project directory
cd Wedding

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will start at `http://localhost:5173` with hot-reload enabled.

## Project Structure

```
src/
├── assets/         # Images, music, and other static files
├── components/     # React components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── pages/         # Page components
└── types/         # TypeScript type definitions
```

## Features

- 💑 Couple introduction section
- 🎵 Background music with toggle control
- 📅 Wedding countdown timer
- 📍 Venue information with maps
- 🖼️ Photo gallery with lightbox
- 📹 Video section
- 💌 Digital invitation cards
- 💝 Animated elements

## Building for Production

```sh
# Create a production build
npm run build

# Preview the production build locally
npm run preview
```

## Deployment

The site can be deployed to any static hosting service like:

- Vercel
- Netlify
- GitHub Pages

## Customization

To customize the website for your needs:

1. Update images in `src/assets/`
2. Modify content in component files
3. Adjust colors in `tailwind.config.js`
4. Change fonts in `index.css`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
