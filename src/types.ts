/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type TaskStatus = 'created' | 'assigned' | 'in-progress' | 'done';

export interface FarmTask {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  avatar: string;
  status: TaskStatus;
  timestamp: string;
  priority: 'low' | 'medium' | 'high';
  category: string;
  comments: {
    user: string;
    text: string;
    time: string;
  }[];
}

export interface SoilMetric {
  key: 'moisture' | 'ph' | 'temp' | 'organic';
  label: string;
  value: number;
  unit: string;
  status: 'optimal' | 'warning' | 'critical';
  history: { day: string; value: number }[];
  description: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  totalCapacity: number;
  unit: string;
  threshold: number;
  status: 'healthy' | 'low';
}

export interface MachineryItem {
  id: string;
  name: string;
  type: string;
  operationalHours: number;
  lastServiced: string;
  status: 'operational' | 'maintenance' | 'offline';
  connectedTask?: string;
  serviceLogs: string[];
}

export interface HarvestRecord {
  id: string;
  plotLabel: string;
  crop: 'Heirloom Tomatoes' | 'Organic Kale' | 'Sweet Strawberries' | 'Artisanal Honey';
  yieldKg: number;
  grading: 'Grade A' | 'Grade B' | 'Choice Premium';
  unitPrice: number; // USD per kg
  productionCost: number; // USD total production cost for profit calc
  date: string;
}
