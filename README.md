# Media Management App

A modern, responsive React web application for selecting and managing diverse content types. Built with [Vite](https://vitejs.dev/) and [Material-UI (MUI)](https://mui.com/), the app features an intuitive centered UI, seamless navigation, and a sleek dark theme for enhanced readability.

## 🚀 Features

- **Centered Layout:** All UI elements are perfectly centered both vertically and horizontally for a clean, professional look.
- **Dynamic Header:** Displays `Media Management` as the main title, with `Draft campaign` below, and user info ("Ali Mehroz" with user icon). The username is hidden on small screens (<600px).
- **Content Type Selection:** Choose from six categories — Fun, Education, Sports, News, Investment, Facts — using interactive buttons.
- **Sub-Options Dropdown:** Quickly select specific content sub-types (e.g., "Board games revival" under Fun) via a convenient dropdown menu.
- **Progress Bar:** Visualizes the content word count (100–1000 words), defaulting to 700 for a clear progress indication (70% completion).
- **Smooth Navigation:** "Back" and "Next" buttons ensure seamless transitions between pages.
- **Dark Mode:** Enjoy a high-contrast experience with MUI’s dark theme, a black header, and crisp white text.

## 🛠 Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)

## ⚡️ Getting Started

Follow these steps to set up and run the app locally:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd media-management-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   _This will install:_
   - `react`, `react-dom`
   - `@mui/material`, `@emotion/react`, `@emotion/styled`, `@mui/icons-material`
   - `react-router-dom`
   - `uuid`
   - Vite development dependencies

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
media-management-app/
├── public/
│   └── vite.svg                  # Vite assets
├── src/
│   ├── assets/
│   │   └── react.svg             # React logo
│   ├── components/
│   │   ├── ContentTypeSelection.jsx        # (Unused) Content type selection component
│   │   ├── ContentDisplay.jsx              # Displays content with progress bar
│   │   ├── WordCountInput.jsx              # (Unused) Word count input component
│   │   ├── HeaderContentSelection.jsx      # Header & content type selection
│   ├── pages/
│   │   ├── HomePage.jsx          # Home page with content type selection
│   │   ├── ContentPage.jsx       # Content display page
│   ├── App.jsx                   # Main app component (handles routing)
│   ├── main.jsx                  # Entry point (theme, router setup)
│   ├── index.css                 # Global styles
│   ├── App.css                   # App-specific styles
├── package.json                  # Project dependencies & scripts
├── vite.config.js                # Vite configuration
```

## 📄 License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

## ✨ Author

**Ali Mehroz**  
[GitHub Profile](https://github.com/alymehroz512)

---

Feel free to open issues or pull requests for suggestions and improvements!