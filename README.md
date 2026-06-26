# Navaneethan P - Links Hub

This repository contains the source code for my personal links and resources hub, built as a lightweight, fast, and responsive static site.

## Architecture
The project is built entirely with raw HTML, CSS, and vanilla JavaScript to ensure maximum performance and minimal dependency overhead. 

The application utilizes a multi-page static structure:
- index.html: The primary landing and routing page.
- style.css: A centralized stylesheet managing design tokens, fluid typography, and responsive layouts.
- main.js: Handles DOM manipulation, state management for interactive components, and staggered animations.

## Key Features
- Performance First: No heavy frameworks or libraries.
- Responsive Design: Adapts fluidly to all viewports, ensuring content accessibility on mobile and desktop devices.
- Accessible: Graceful degradation strategies, including noscript fallbacks, maintain usability for users with disabled scripts.
- Component-Driven CSS: Scalable styling using CSS variables for simple theme maintenance.

## Local Development
To run this project locally, simply clone the repository and serve the directory using any static file server.

```bash
git clone https://github.com/Navaneethan-P/link.git
cd link
python -m http.server 8000
```
Then open http://localhost:8000 in your browser.

## License
This project is open-source and available under the MIT License. Feel free to use the structure as a template for your own developer portfolio.
