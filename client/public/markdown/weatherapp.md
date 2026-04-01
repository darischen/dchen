## Overview
WeatherApp is a full-stack weather application that provides real-time weather data, forecasts, and interactive map visualization for any location worldwide. The app combines multiple APIs—Google Places for intelligent location search, Open-Meteo for accurate weather data, and YouTube for location-based video content—into a seamless experience. Users can search by city name, neighborhood, ZIP code, or coordinates, and save weather records over time periods with CRUD operations for tracking seasonal patterns and trip planning. The application uses PostgreSQL with Prisma ORM for persistent data storage and supports multiple export formats.

([GitHub Link](https://github.com/darischen/weatherapp))

---

## Quick Summary
- Real-time weather display with current conditions, temperature, precipitation, and humidity for any location globally.

- Intelligent location search powered by Google Places autocomplete with fallback geocoding for addresses, cities, ZIP codes, and direct coordinate input.

- 5-day weather forecast with max/min temperatures, precipitation probability, and weather condition summaries.

- Interactive map visualization using Leaflet showing the selected location and weather context.

- YouTube integration displaying popular videos related to the searched location.

- Database-backed records system allowing users to save weather data for specific date ranges with notes for tracking patterns and planning trips.

- Multi-format export capabilities supporting CSV, PDF, and XML for data analysis and reporting.

- Geolocation support for automatic location detection using browser geolocation API.

---

## Key Features
- Location Search
  - Google Places autocomplete API with intelligent ranking for cities, neighborhoods, and districts
  - Fallback geocoding using OpenStreetMap/Open-Meteo when Places API unavailable
  - Support for coordinates (latitude, longitude format)
  - ZIP code and address input
  - Real-time suggestions with distance-based ranking
  - Session token optimization for improved user experience
  
- Current Weather Display
  - Real-time temperature, "feels like" temperature, and wind speed
  - Precipitation and humidity information
  - WMO weather code interpretation with human-readable summaries
  - Last update timestamp

- Weather Forecast
  - 5-day daily forecast with min/max temperatures
  - Weather condition predictions
  - Precipitation probability for each day
  - Grid layout for easy comparison across days

- Interactive Map
  - Leaflet-based interactive map showing location
  - Customizable map layers and styles
  - Responsive design for mobile and desktop

- Weather Records Database
  - Save weather snapshots for specific locations and date ranges
  - Full CRUD operations (Create, Read, Update, Delete)
  - Notes field for trip planning or event tracking
  - Daily temperature JSON storage for detailed tracking
  - Persistent PostgreSQL backend with Prisma ORM

- Data Export
  - CSV export for spreadsheet analysis
  - PDF export with formatted weather reports
  - XML export for data integration with other systems

- Geolocation
  - Automatic location detection on page load
  - High accuracy mode with timeout handling
  - Fallback UI when geolocation unavailable

- Responsive Design
  - Mobile-first approach with Tailwind CSS
  - Dark/light mode support
  - Glass morphism UI components for modern aesthetics

---

## Tools Used
- Next.js 15.5.4
- React 19
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL Database
- Leaflet
- React-Leaflet
- Google Places API
- Open-Meteo Weather API
- YouTube Data API
- pdfkit
- papaparse
- xmlbuilder2
- date-fns
- Zod
- Lucide React

---

## Images

### Search & Current Weather
// IMAGE 1: SEARCH_AND_WEATHER

### Forecast & Map
// IMAGE 2: FORECAST_AND_MAP

### Records & Export
// IMAGE 3: RECORDS_AND_EXPORT
