# 🌤️ Weather App

A clean, responsive weather application that fetches real-time weather data for any city using the OpenWeatherMap API. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20App-brightgreen?style=for-the-badge)](https://shreyash3062.github.io/Weather-App/)

**🔗 Live Demo:** [shreyash3062.github.io/Weather-App](https://shreyash3062.github.io/Weather-App/)

## Features

- 🔍 Search current weather for any city worldwide
- 🌡️ Displays temperature, humidity, and wind speed
- 🌦️ Dynamic weather icons (clear, clouds, rain, drizzle, mist)
- ⌨️ Search by pressing **Enter** or clicking the search button
- ⚠️ Graceful error handling for invalid city names or failed requests
- 📱 Fully responsive glassmorphic UI

## Tech Stack

- **HTML5** — structure
- **CSS3** — glassmorphism styling, animated gradient background, responsive layout
- **JavaScript (ES6+)** — async/await, Fetch API
- **[OpenWeatherMap API](https://openweathermap.org/api)** — weather data source

## Getting Started

### Prerequisites

- A free API key from [OpenWeatherMap](https://openweathermap.org/api)
- A local server (recommended) — e.g. VS Code's [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, or Python's built-in server

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/shreyash3062/Weather-App.git
   cd Weather-App
   ```

2. Add your API key

   Open `script.js` and replace the `apiKey` value with your own:
   ```js
   const apiKey = "YOUR_API_KEY_HERE";
   ```

3. Run it locally

   Using VS Code Live Server: right-click `index.html` → **Open with Live Server**

   Or using Python:
   ```bash
   python -m http.server
   ```
   Then open `http://localhost:8000` in your browser.

   > ⚠️ Opening `index.html` directly by double-clicking (`file://`) can block the API request due to browser CORS restrictions — always use a local server.

## Project Structure

```
Weather-App/
├── index.html      # Markup
├── style.css        # Styling
├── script.js         # Weather fetch logic
├── images/            # Weather icons
└── README.md
```

## Roadmap

- [ ] Auto-detect user's location on load
- [ ] 5-day forecast
- [ ] Recent search history
- [ ] Unit toggle (°C / °F)

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Shreyash Mali**
GitHub: [@shreyash3062](https://github.com/shreyash3062)