// Mock users for authentication
export const mockUsers = [
  {
    id: 'user_1',
    name: 'John Mutara',
    email: 'johnm@example.com',
    password: 'password123',
    phone: '+250789123456',
    location: 'Kigali, Rwanda',
    language: 'en',
    farms: [
      {
        id: 'farm_1',
        name: 'Main Farm',
        size: 2.5, // hectares
        location: {
          lat: -1.9575,
          lon: 29.8598
        },
        crops: ['Maize', 'Beans', 'Cassava']
      }
    ]
  },
  {
    id: 'user_2',
    name: 'Demo User',
    email: 'demo@example.com',
    password: 'demo123',
    phone: '+250789999999',
    location: 'Musanze, Rwanda',
    language: 'en',
    farms: [
      {
        id: 'farm_2',
        name: 'Demonstration Farm',
        size: 1.8, // hectares
        location: {
          lat: -1.5032,
          lon: 29.6346
        },
        crops: ['Coffee', 'Bananas', 'Sweet Potatoes']
      }
    ]
  }
];

// Mock current weather data
export const mockWeatherData = {
  coord: {
    lon: 29.8739,
    lat: -1.9403
  },
  weather: [
    {
      id: 500,
      main: "Rain",
      description: "light rain",
      icon: "10d"
    }
  ],
  base: "stations",
  main: {
    temp: 23.5,
    feels_like: 23.94,
    temp_min: 22.78,
    temp_max: 23.5,
    pressure: 1016,
    humidity: 73
  },
  visibility: 10000,
  wind: {
    speed: 1.54,
    deg: 110
  },
  rain: {
    "1h": 0.25
  },
  clouds: {
    all: 75
  },
  dt: 1677851274,
  sys: {
    type: 2,
    id: 2042641,
    country: "RW",
    sunrise: 1677812638,
    sunset: 1677856200
  },
  timezone: 7200,
  id: 202061,
  name: "Kigali",
  cod: 200
};

// Mock forecast data
export const mockForecastData = {
  list: [
    {
      dt: 1677859200,
      main: {
        temp: 20.85,
        feels_like: 21.07,
        temp_min: 20.85,
        temp_max: 22.52,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 898,
        humidity: 80,
        temp_kf: -1.67
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 0.91,
        deg: 146,
        gust: 1.92
      },
      visibility: 10000,
      pop: 0.74,
      rain: {
        "3h": 0.94
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2023-03-03 18:00:00"
    },
    {
      dt: 1677870000,
      main: {
        temp: 19.84,
        feels_like: 20.04,
        temp_min: 19.34,
        temp_max: 19.84,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 898,
        humidity: 83,
        temp_kf: 0.5
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.14,
        deg: 182,
        gust: 1.57
      },
      visibility: 10000,
      pop: 0.7,
      rain: {
        "3h": 0.51
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2023-03-03 21:00:00"
    },
    {
      dt: 1677880800,
      main: {
        temp: 18.98,
        feels_like: 19.15,
        temp_min: 18.52,
        temp_max: 18.98,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 897,
        humidity: 85,
        temp_kf: 0.46
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 95
      },
      wind: {
        speed: 0.8,
        deg: 200,
        gust: 1.24
      },
      visibility: 10000,
      pop: 0.74,
      rain: {
        "3h": 0.32
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2023-03-04 00:00:00"
    },
    {
      dt: 1677891600,
      main: {
        temp: 18.13,
        feels_like: 18.28,
        temp_min: 18.13,
        temp_max: 18.13,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 897,
        humidity: 87,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 90
      },
      wind: {
        speed: 0.84,
        deg: 145,
        gust: 1.06
      },
      visibility: 10000,
      pop: 0.11,
      sys: {
        pod: "n"
      },
      dt_txt: "2023-03-04 03:00:00"
    },
    {
      dt: 1677902400,
      main: {
        temp: 20.19,
        feels_like: 20.24,
        temp_min: 20.19,
        temp_max: 20.19,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 901,
        humidity: 76,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      clouds: {
        all: 48
      },
      wind: {
        speed: 1.56,
        deg: 101,
        gust: 2.17
      },
      visibility: 10000,
      pop: 0.15,
      sys: {
        pod: "d"
      },
      dt_txt: "2023-03-04 06:00:00"
    }
  ],
  city: {
    id: 202061,
    name: "Kigali",
    coord: {
      lat: -1.9403,
      lon: 29.8739
    },
    country: "RW",
    population: 1132686,
    timezone: 7200,
    sunrise: 1677812638,
    sunset: 1677856200
  }
};

// Mock risk assessment data
export const mockRiskAssessments = [
  {
    id: 'risk_1',
    type: 'Drought',
    description: 'Potential drought conditions in the next 2 weeks',
    level: 'High',
    affectedCrops: ['Maize', 'Beans'],
    date: '2023-03-15',
    recommendations: [
      'Implement water conservation techniques',
      'Consider drought-resistant crop varieties for next planting',
      'Apply mulch to reduce evaporation'
    ]
  },
  {
    id: 'risk_2',
    type: 'Pest',
    description: 'Increased risk of armyworm infestation',
    level: 'Medium',
    affectedCrops: ['Maize'],
    date: '2023-03-10',
    recommendations: [
      'Monitor fields for signs of infestation',
      'Deploy pheromone traps',
      'Consider preventative biological controls'
    ]
  },
  {
    id: 'risk_3',
    type: 'Heavy Rain',
