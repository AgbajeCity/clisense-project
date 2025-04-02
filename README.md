# CliSense: AI-Powered Climate Resilience Platform for African Farmers

CliSense is a mobile-first web application designed to empower smallholder farmers in Sub-Saharan Africa with critical climate insights and adaptation strategies to address the urgent challenge of climate-driven crop losses.

## Problem Statement

Smallholder farmers in Sub-Saharan Africa, particularly in Rwanda, face devastating crop losses due to climate change:
- 50% of crops are lost to climate disruptions (World Bank, 2022)
- Only 7% of Rwanda's cultivated land is irrigated (FAO, 2020)
- Rainfall levels are projected to decline by 23% by 2050 (USAID, 2022)
- Agriculture contributes 67% to Rwanda's GDP (National Institute of Statistics Rwanda, 2021)

These farmers lack access to accurate, localized climate data and adaptation strategies, leaving them vulnerable to climate disruptions.

## Solution

CliSense provides:
- Real-time weather monitoring and forecasting
- Climate risk analysis and early warnings
- Customized agricultural recommendations
- Mobile and web interfaces for farmers and agricultural cooperatives

## Features

- User registration and profile management
- Location-based weather monitoring
- Climate risk assessments
- Crop-specific recommendations
- Offline functionality
- Multilingual support

## Live Demo

Access the live prototype: [CliSense Demo](https://clisense.netlify.app)

## Technologies Used

- Frontend: React.js, TailwindCSS
- Maps & Weather: OpenWeatherMap API, Leaflet
- Deployment: Netlify

## Setup Instructions

To run this project locally:

1. Clone this repository
   ```bash
   git clone https://github.com/yourusername/CliSense.git
   cd CliSense

   Install dependencies
bashCopynpm install

Create a .env file in the root directory and add your API keys
CopyREACT_APP_OPENWEATHER_API_KEY=your_openweather_api_key

Start the development server
bashCopynpm start

Open your browser and navigate to http://localhost:3000

Project Structure
CopyCliSense/
├── public/          # Public assets and HTML template
├── src/             # Source code
│   ├── assets/      # Images and static resources
│   ├── components/  # Reusable UI components
│   ├── contexts/    # React contexts for state management
│   ├── data/        # Mock data and constants
│   ├── hooks/       # Custom React hooks
│   ├── pages/       # Page components
│   ├── services/    # API and service functions
│   ├── styles/      # CSS and styling files
│   ├── utils/       # Utility functions
│   ├── App.js       # Main App component
│   └── index.js     # Entry point
└── package.json     # Dependencies and scripts
Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
