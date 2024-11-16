export const FARMS = [
  {
    farmId: 1,
    name: 'Green Acres Farm',
    location: 'Valley Creek, TX',
    manager: 'Anna Thompson',
    totalArea: '150 acres',
    crops: ['Wheat', 'Corn', 'Soybean'],
    revenue: 60000,
    expenses: 10500,
    netProfit: 49500,
    todaysWhether: {
      day: 'Monday',
      date: '10 Nov, 2024',
      temparature: {
        value: 20,
        unit: 'c',
      },
      windSpeed: {
        value: 25,
        unit: 'km/h',
      },
      humidity: {
        value: 10,
        unit: '%',
      },
    },
    fields: [
      {
        fieldId: 101,
        name: 'North Field',
        crop: 'Wheat',
        irrigationStatus: 'Active',
        area: '50 acres',
        soilMoistureLevels: [
          { timestamp: '2024-11-01T06:00:00Z', value: 35 },
          { timestamp: '2024-11-01T12:00:00Z', value: 40 },
          { timestamp: '2024-11-01T18:00:00Z', value: 38 },
        ],
        temperatureReadings: [
          { timestamp: '2024-11-01T06:00:00Z', value: 22 },
          { timestamp: '2024-11-01T12:00:00Z', value: 28 },
          { timestamp: '2024-11-01T18:00:00Z', value: 25 },
        ],
        humidityReadings: [
          { timestamp: '2024-11-01T06:00:00Z', value: 80 },
          { timestamp: '2024-11-01T12:00:00Z', value: 70 },
          { timestamp: '2024-11-01T18:00:00Z', value: 75 },
        ],
        fertilizerUsage: [
          { month: '2024-01', value: 20 },
          { month: '2024-02', value: 25 },
          { month: '2024-03', value: 22 },
        ],
        pesticideUsage: [
          { month: '2024-01', value: 5 },
          { month: '2024-02', value: 4 },
          { month: '2024-03', value: 6 },
        ],
        yield: [
          { year: 2023, value: 15 },
          { year: 2024, value: 18 },
        ],
      },
      {
        fieldId: 102,
        name: 'South Field',
        crop: 'Corn',
        irrigationStatus: 'Active',
        area: '60 acres',
        soilMoistureLevels: [
          { timestamp: '2024-11-01T06:00:00Z', value: 45 },
          { timestamp: '2024-11-01T12:00:00Z', value: 48 },
          { timestamp: '2024-11-01T18:00:00Z', value: 47 },
        ],
        temperatureReadings: [
          { timestamp: '2024-11-01T06:00:00Z', value: 21 },
          { timestamp: '2024-11-01T12:00:00Z', value: 27 },
          { timestamp: '2024-11-01T18:00:00Z', value: 24 },
        ],
        humidityReadings: [
          { timestamp: '2024-11-01T06:00:00Z', value: 78 },
          { timestamp: '2024-11-01T12:00:00Z', value: 73 },
          { timestamp: '2024-11-01T18:00:00Z', value: 76 },
        ],
        fertilizerUsage: [
          { month: '2024-01', value: 30 },
          { month: '2024-02', value: 32 },
          { month: '2024-03', value: 35 },
        ],
        pesticideUsage: [
          { month: '2024-01', value: 6 },
          { month: '2024-02', value: 7 },
          { month: '2024-03', value: 5 },
        ],
        yield: [
          { year: 2023, value: 25 },
          { year: 2024, value: 27 },
        ],
      },
    ],
    weather: {
      temperature: [
        { timestamp: '2024-11-01T00:00:00Z', value: 24 },
        { timestamp: '2024-11-01T06:00:00Z', value: 22 },
        { timestamp: '2024-11-01T12:00:00Z', value: 28 },
        { timestamp: '2024-11-01T18:00:00Z', value: 25 },
      ],
      humidity: [
        { timestamp: '2024-11-01T00:00:00Z', value: 85 },
        { timestamp: '2024-11-01T06:00:00Z', value: 80 },
        { timestamp: '2024-11-01T12:00:00Z', value: 70 },
        { timestamp: '2024-11-01T18:00:00Z', value: 75 },
      ],
      rainfall: [
        { month: '2024-01', value: 120 },
        { month: '2024-02', value: 90 },
        { month: '2024-03', value: 85 },
      ],
    },
    alerts: [
      {
        timestamp: '2024-11-01T05:00:00Z',
        type: 'Irrigation Required',
        severity: 'High',
        details: 'Soil moisture level below threshold in North Field.',
      },
      {
        timestamp: '2024-11-01T12:00:00Z',
        type: 'Temperature Drop',
        severity: 'Medium',
        details: 'Sudden temperature drop detected in South Field.',
      },
    ],
    financials: {
      fertilizerCost: [
        { month: '2024-01', value: 1000 },
        { month: '2024-02', value: 1200 },
        { month: '2024-03', value: 1100 },
      ],
      pesticideCost: [
        { month: '2024-01', value: 500 },
        { month: '2024-02', value: 550 },
        { month: '2024-03', value: 600 },
      ],
      totalRevenue: [
        { year: 2023, value: 50000 },
        { year: 2024, value: 60000 },
      ],
    },
  },
];
