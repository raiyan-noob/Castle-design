# Castle Design

Castle Design is a responsive interior design website for showcasing residential and commercial spaces. The site presents the brand's design philosophy, services, portfolio, and contact options in a warm editorial interface inspired by the company's slogan, **"Designing Dreams."**

## Live Links

- **Live website:** [castledesign.vercel.app](https://castledesign.vercel.app/)
- **Repository:** [github.com/raiyan-noob/Castle-design](https://github.com/raiyan-noob/Castle-design)
- **Developer:** [raiyan-noob](https://github.com/raiyan-noob)

## Features

- Responsive layouts for desktop, tablet, and mobile screens
- Shared responsive navigation bar and footer
- Home page with hero section, services, and design process steps
- Services page with Residential and Commercial offerings
- About page with company story, vision, mission, and rotating interior imagery
- Projects portfolio with Residential and Commercial filters
- Finished and Ongoing project status filters
- Three-column project card layout on desktop with responsive fallbacks
- Project cards with location labels and Facebook post links
- Contact form that opens Messenger with a formatted message:

  ```text
  Name:
  Contact Number:
  Email:
  Query:
  ```

- Direct call, WhatsApp, Facebook, and email contact links
- Font Awesome icons for interface and contact actions
- Local image assets bundled through Vite
- React Compiler and Oxlint support

## Tech Stack

- React 19
- Vite 8
- React Router DOM 7
- JavaScript (ES modules)
- CSS with responsive media queries
- Font Awesome 7 via CDN
- Google Fonts: Playfair Display and Poppins
- React Compiler
- Oxlint

## Project Structure

```text
src/
├── components/
│   ├── home/       Home page sections
│   ├── shared/     Navbar and Footer
│   ├── about.jsx   About page
│   ├── Contact.jsx Contact form and contact channels
│   ├── Projects.jsx Filterable project portfolio
│   └── Services.jsx Services page
├── assets/         Logos, interior images, and project images
├── App.jsx         Application routes
├── App.css         Global app styles
└── index.css       Design tokens and base styles
```

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

### Production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint the project

```bash
npm run lint
```

## Contact Configuration

Business contact details and social links are configured in the page components. Before deployment, replace placeholder contact values with the final business information in:

- `src/components/Contact.jsx`
- `src/components/Services.jsx`
- `src/components/shared/Footer.jsx`
- `src/components/Projects.jsx`

## Author

Designed and developed by [raiyan-noob](https://github.com/raiyan-noob).

## License

This project is private and intended for Castle Design. Add a license here if the repository will be published for reuse.
