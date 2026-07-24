/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FarmTask, SoilMetric, InventoryItem, MachineryItem, HarvestRecord } from '../types';

export const INITIAL_TASKS: FarmTask[] = [
  {
    id: 'TSK-1024',
    title: 'Soil Irrigation Check & Filter Cleanout',
    description: 'Check moisture sensor data at North Plot A. Clear sediment filters on Irrigation Pump A1 and report pressure.',
    assignedTo: 'Julian Vance',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    status: 'created',
    timestamp: 'Today, 07:00 AM',
    priority: 'high',
    category: 'Irrigation',
    comments: [
      {
        user: 'System Bot',
        text: 'Task auto-generated due to scheduled soil maintenance cycle.',
        time: 'Today, 07:00 AM'
      }
    ]
  },
  {
    id: 'TSK-1025',
    title: 'Fertilizer Application - South Plot B',
    description: 'Apply 80kg of Fertilizer Grade-A using tractor-spreader. Focus on low-nitrogen zones.',
    assignedTo: 'Marcus Vance',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
    status: 'assigned',
    timestamp: 'Today, 08:30 AM',
    priority: 'medium',
    category: 'Fertilization',
    comments: [
      {
        user: 'Marcus Vance',
        text: 'Preparing tractor-spreader and loading Grade-A bags now.',
        time: 'Today, 08:45 AM'
      }
    ]
  },
  {
    id: 'TSK-1021',
    title: 'Soil Temperature Sensor Calibration - Sector Delta',
    description: 'Clean and calibrate regional moisture/temp probes. Sync local SQLite cache to the cloud.',
    assignedTo: 'Sarah Jenkins',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    status: 'in-progress',
    timestamp: 'Today, 09:15 AM',
    priority: 'medium',
    category: 'Telemetry Monitoring',
    comments: [
      {
        user: 'Sarah Jenkins',
        text: 'Calibrating North Sensor #4. Baseline temperature looks consistent at 24.2°C.',
        time: 'Today, 09:30 AM'
      }
    ]
  },
  {
    id: 'TSK-1019',
    title: 'Irrigation Pump A1 Preventative Service',
    description: 'Replaced hydraulic gasket, tested pressure relief valves. Flushed primary filter lines.',
    assignedTo: 'Julian Vance',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    status: 'done',
    timestamp: 'Yesterday, 11:00 AM',
    priority: 'high',
    category: 'Machinery Maintenance',
    comments: [
      {
        user: 'Julian Vance',
        text: 'Completed maintenance routine. Flow rate restored to 12.5 L/sec.',
        time: 'Yesterday, 11:35 AM'
      },
      {
        user: 'System Bot',
        text: 'Service log automatically appended to Irrigation Pump A1 records.',
        time: 'Yesterday, 11:36 AM'
      }
    ]
  }
];

export const INITIAL_SOIL_METRICS: SoilMetric[] = [
  {
    key: 'moisture',
    label: 'Soil Moisture',
    value: 42.5,
    unit: '% VWC',
    status: 'optimal',
    description: 'Volumetric Water Content ideal for organic tomato root intake.',
    history: [
      { day: 'Mon', value: 38 },
      { day: 'Tue', value: 40 },
      { day: 'Wed', value: 45 },
      { day: 'Thu', value: 43 },
      { day: 'Fri', value: 41 },
      { day: 'Sat', value: 42 },
      { day: 'Sun', value: 42.5 }
    ]
  },
  {
    key: 'ph',
    label: 'Soil Water Quality (pH)',
    value: 7.8,
    unit: 'pH',
    status: 'optimal',
    description: 'Earthy organic soil alkalinity, promoting high nutrient synthesis.',
    history: [
      { day: 'Mon', value: 7.5 },
      { day: 'Tue', value: 7.6 },
      { day: 'Wed', value: 7.8 },
      { day: 'Thu', value: 7.7 },
      { day: 'Fri', value: 7.8 },
      { day: 'Sat', value: 7.8 },
      { day: 'Sun', value: 7.8 }
    ]
  },
  {
    key: 'temp',
    label: 'Soil Temperature',
    value: 24.2,
    unit: '°C',
    status: 'optimal',
    description: 'Temperature at 10cm depth. Optimal biological microbe activity.',
    history: [
      { day: 'Mon', value: 22.1 },
      { day: 'Tue', value: 23.5 },
      { day: 'Wed', value: 24.0 },
      { day: 'Thu', value: 23.8 },
      { day: 'Fri', value: 24.1 },
      { day: 'Sat', value: 24.3 },
      { day: 'Sun', value: 24.2 }
    ]
  },
  {
    key: 'organic',
    label: 'Organic Matter Index',
    value: 4.8,
    unit: '% content',
    status: 'optimal',
    description: 'Calculated humus and organic compost decay density.',
    history: [
      { day: 'Mon', value: 4.5 },
      { day: 'Tue', value: 4.6 },
      { day: 'Wed', value: 4.6 },
      { day: 'Thu', value: 4.7 },
      { day: 'Fri', value: 4.7 },
      { day: 'Sat', value: 4.8 },
      { day: 'Sun', value: 4.8 }
    ]
  }
];

export const INITIAL_INVENTORY: InventoryItem[] = [
  {
    id: 'INV-084',
    name: 'Fertilizer Grade-A',
    category: 'Nutrients',
    quantity: 320,
    totalCapacity: 1000,
    unit: 'kg',
    threshold: 500,
    status: 'low'
  },
  {
    id: 'INV-112',
    name: 'Eco-Treatments (Natural Neem Oil)',
    category: 'Biosecurity',
    quantity: 850,
    totalCapacity: 1200,
    unit: 'L',
    threshold: 300,
    status: 'healthy'
  },
  {
    id: 'INV-049',
    name: 'Feed Stocks (Artisanal Organic Mix)',
    category: 'Animal Welfare',
    quantity: 640,
    totalCapacity: 1500,
    unit: 'kg',
    threshold: 400,
    status: 'healthy'
  }
];

export const INITIAL_MACHINERY: MachineryItem[] = [
  {
    id: 'MAC-11',
    name: 'Irrigation Pump A1',
    type: 'Primary Hydraulics',
    operationalHours: 485,
    lastServiced: '2026-06-30',
    status: 'operational',
    serviceLogs: [
      'Gasket replaced, flow test passed at 12.5 L/sec on 2026-06-30',
      'Filter cleared of organic river sediment on 2026-06-15'
    ]
  },
  {
    id: 'MAC-15',
    name: 'Tractor-Spreader Multi',
    type: 'Field Transport',
    operationalHours: 247,
    lastServiced: '2026-05-10',
    status: 'maintenance',
    connectedTask: 'TSK-1025',
    serviceLogs: [
      'Hydraulic lift calibration executed on 2026-05-10'
    ]
  },
  {
    id: 'MAC-03',
    name: 'Automatic Compost Aerator',
    type: 'Biological Processing',
    operationalHours: 890,
    lastServiced: '2026-04-20',
    status: 'operational',
    serviceLogs: [
      'Bearing greased, motor current check normal on 2026-04-20'
    ]
  }
];

export const INITIAL_HARVESTS: HarvestRecord[] = [
  {
    id: 'HRV-401',
    plotLabel: 'North Plot A',
    crop: 'Heirloom Tomatoes',
    yieldKg: 1420,
    grading: 'Grade A',
    unitPrice: 5.40,
    productionCost: 1850,
    date: '2026-06-15'
  },
  {
    id: 'HRV-402',
    plotLabel: 'South Plot B',
    crop: 'Organic Kale',
    yieldKg: 1240,
    grading: 'Choice Premium',
    unitPrice: 3.80,
    productionCost: 1200,
    date: '2026-06-28'
  },
  {
    id: 'HRV-403',
    plotLabel: 'Orchard Plot C',
    crop: 'Sweet Strawberries',
    yieldKg: 890,
    grading: 'Grade A',
    unitPrice: 7.20,
    productionCost: 2100,
    date: '2026-06-20'
  },
  {
    id: 'HRV-404',
    plotLabel: 'Apiculture Field D',
    crop: 'Artisanal Honey',
    yieldKg: 420,
    grading: 'Choice Premium',
    unitPrice: 16.50,
    productionCost: 1450,
    date: '2026-06-24'
  }
];
