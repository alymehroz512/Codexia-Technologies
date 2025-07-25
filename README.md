Media Management App
A React-based web application built with Vite and Material-UI, designed for selecting and managing content types with a modern, centered UI. The app features a responsive header, content type selection with sub-options via a dropdown, and a content display page with a progress bar.
Features

Centered UI: All elements are centered vertically and horizontally for a clean, responsive layout.
Header: Displays "Media Management" with "Draft campaign" below it, and "Ali Mehroz" with a user icon (username hidden on small screens <600px).
Content Type Selection: Choose from six content types (Fun, Education, Sports, News, Investment, Facts) with buttons.
Sub-Options Dropdown: Select specific content sub-types (e.g., "Board games revival" for Fun) via a dropdown.
Progress Bar: Displays on the content page with a range of 100 to 1000 words, set to 700 (70% completion).
Navigation: "Back" and "Next" buttons for seamless page transitions.
Dark Theme: Material-UI dark theme with a black header and white text for high contrast.

Prerequisites

Node.js (v16 or higher)
npm (v7 or higher)

Setup Instructions

Clone the Repository:
git clone <repository-url>
cd media-management-app


Install Dependencies:
npm install

This installs:

react, react-dom
@mui/material, @emotion/react, @emotion/styled, @mui/icons-material
react-router-dom
uuid
Vite development dependencies


Run the Development Server:
npm run dev

Open http://localhost:5173 in your browser.


Folder Structure
media-management-app/
├── public/
│   ├── vite.svg              # Vite assets
├── src/
│   ├── assets/
│   │   └── react.svg         # React logo
│   ├── components/
│   │   ├── ContentTypeSelection.jsx  # Content type selection component (unused)
│   │   ├── ContentDisplay.jsx        # Displays content with progress bar
│   │   ├── WordCountInput.jsx        # Word count input component (unused)
│   │   ├── HeaderContentSelection.jsx # Header and content type selection
│   ├── pages/
│   │   ├── HomePage.jsx      # Home page with content type selection
│   │   ├── ContentPage.jsx   # Content display page
│   ├── App.jsx               # Main app with routing
│   ├── main.jsx              # Entry point with theme and router
│   ├── index.css             # Global styles
│   ├── App.css               # App-specific styles
├── package.json              # Project dependencies and scripts
├── vite.config.js            # V }}>


System: * Today's date and time is 06:13 PM PKT on Friday, July 25, 2025.
