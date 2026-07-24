/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  ClipboardList, 
  Sprout, 
  Package, 
  Wrench, 
  BadgeDollarSign, 
  ArrowRight, 
  Check, 
  MessageSquare, 
  Plus, 
  Minus, 
  AlertTriangle,
  History,
  TrendingUp,
  RefreshCw
} from 'lucide-react';
import { FarmTask, SoilMetric, InventoryItem, MachineryItem, HarvestRecord, TaskStatus } from '../types';
import { INITIAL_TASKS, INITIAL_SOIL_METRICS, INITIAL_INVENTORY, INITIAL_MACHINERY, INITIAL_HARVESTS } from '../data/mockData';
import { Language } from '../data/translations';

interface InteractiveShowcaseProps {
  language?: Language;
}

const showTrans: Record<Language, {
  liveSim: string;
  title: string;
  desc: string;
  resetBtn: string;
  tabTasks: string;
  tabSoil: string;
  tabWarehouse: string;
  tabMachinery: string;
  tabHarvest: string;
  
  // Tasks
  taskBoardTitle: string;
  laneCreated: string;
  laneAssigned: string;
  laneInProgress: string;
  laneCompleted: string;
  emptyLane: string;
  auditTrailTitle: string;
  taskTip: string;
  btnNext: string;
  
  // Soil
  soilIndicesTitle: string;
  soilHistoryTitle: string;
  soilHistorySub: string;
  soilHistoryPlot: string;
  soilTip: string;
  soilMoistureLabel: string;
  soilTempLabel: string;
  soilPhLabel: string;
  soilOrganicLabel: string;
  
  // Warehouse
  warehouseBanner: string;
  warehouseRestockBtn: string;
  warehouseStatusLow: string;
  warehouseStatusHealthy: string;
  warehouseStockedText: string;
  
  // Machinery
  machineryTitle: string;
  machineryColAsset: string;
  machineryColStatus: string;
  machineryColRuntime: string;
  machineryColChecked: string;
  machineryLedgerTitle: string;
  machineryLedgerSub: string;
  machineryTip: string;
  
  // Harvest
  harvestTitle: string;
  harvestColPlot: string;
  harvestColGrade: string;
  harvestColYield: string;
  harvestColRevenue: string;
  harvestColNetProfit: string;
  harvestMarginText: string;
  harvestCostText: string;
  financialTitle: string;
  financialSub: string;
  financialYieldLabel: string;
  financialPriceLabel: string;
  financialProceedsTitle: string;
  financialGrossLabel: string;
  financialFeasibilityTip: string;
  financialIndexText: string;

  // System Comments
  commentAssigned: string;
  commentProgress: string;
  commentCompleted: string;
  justNow: string;
}> = {
  en: {
    liveSim: "Live Platform Simulation",
    title: "See the Platform in Action",
    desc: "Experience our responsive soil telemetry, stock alarms, task transitions, and harvest scorecards right from the presentation screen.",
    resetBtn: "Reset Simulator",
    tabTasks: "📋 Task Lifecycle",
    tabSoil: "📊 Plot Telemetry",
    tabWarehouse: "📦 Warehouse Stock",
    tabMachinery: "⚙️ Machinery & Logs",
    tabHarvest: "🐟 Harvest & Yield",
    
    taskBoardTitle: "Field-Worker Task Progress Board",
    laneCreated: "Created",
    laneAssigned: "Assigned",
    laneInProgress: "In Progress",
    laneCompleted: "Completed",
    emptyLane: "Empty lane",
    auditTrailTitle: "Active System Audit Trail",
    taskTip: "Click Next on any task to transition it. The worker mobile client syncs the state immediately.",
    btnNext: "Next",
    
    soilIndicesTitle: "Soil Matrix Telemetry Indices",
    soilHistoryTitle: "Telemetry History",
    soilHistorySub: "Soil Parameters over 7 Days",
    soilHistoryPlot: "Plot Alpha-1 (North)",
    soilTip: "Intelligent Hydration: Soil Moisture of 42.5% VWC has triggered standard smart pump throttling in sector delta.",
    soilMoistureLabel: "Soil Moisture",
    soilTempLabel: "Soil Temperature",
    soilPhLabel: "Soil pH Levels",
    soilOrganicLabel: "Organic Humus Content",
    
    warehouseBanner: "Alert: Fertilizer Grade-A is low (Current: {qty}kg / Threshold: 500kg)",
    warehouseRestockBtn: "Restock 180kg",
    warehouseStatusLow: "Low Stock",
    warehouseStatusHealthy: "Healthy",
    warehouseStockedText: "stocked",
    
    machineryTitle: "Heavy Machinery Maintenance Log",
    machineryColAsset: "Asset",
    machineryColStatus: "Status",
    machineryColRuntime: "Runtime",
    machineryColChecked: "Last Checked",
    machineryLedgerTitle: "Automated Service Records",
    machineryLedgerSub: "Live Machinery Ledger Append",
    machineryTip: "Completed field tasks automatically append digital signatures and zero out operational wear-and-tear timers!",
    
    harvestTitle: "Crop Yield Logging Database",
    harvestColPlot: "Plot",
    harvestColGrade: "Grade",
    harvestColYield: "Yield",
    harvestColRevenue: "Revenue",
    harvestColNetProfit: "Net Profit",
    harvestMarginText: "Margin",
    harvestCostText: "Cost",
    financialTitle: "Financial Modelling tool",
    financialSub: "Simulate Batch Feasibility",
    financialYieldLabel: "Expected Yield Weight:",
    financialPriceLabel: "Market Unit Price:",
    financialProceedsTitle: "Projected Net Proceeds",
    financialGrossLabel: "Gross value",
    financialFeasibilityTip: "Est. Margin is 62.4% with a predicted return on organic crop compost investments.",
    financialIndexText: "Calculated on real-time Wholesale Commodity Indexes.",
    commentAssigned: "I have received the notification. Commencing field route now.",
    commentProgress: "GPS verified: Field Worker active in North Plot A boundaries.",
    commentCompleted: "Field work completed. Snapped photo proof and updated local DB.",
    justNow: "Just now"
  },
  ro: {
    liveSim: "Simulare Platformă în Direct",
    title: "Vezi Platforma în Acțiune",
    desc: "Experimentați telemetria solului, alerte de stoc, tranziții de sarcini și rapoarte de recoltă în timp real direct din ecranul de prezentare.",
    resetBtn: "Resetează Simulatorul",
    tabTasks: "📋 Fluxul Sarcinilor",
    tabSoil: "📊 Telemetrie Parcelă",
    tabWarehouse: "📦 Stoc Depozit",
    tabMachinery: "⚙️ Utilaje & Jurnale",
    tabHarvest: "🐟 Recoltă & Profit",
    
    taskBoardTitle: "Panou de Progres Lucrători Teren",
    laneCreated: "Create",
    laneAssigned: "Alocate",
    laneInProgress: "În Curs",
    laneCompleted: "Finalizate",
    emptyLane: "Nicio sarcină în acest pas",
    auditTrailTitle: "Sistem Jurnal de Audit Activ",
    taskTip: "Faceți clic pe Următorul la orice sarcină pentru a-i schimba starea. Clientul mobil se sincronizează instantaneu.",
    btnNext: "Următorul",
    
    soilIndicesTitle: "Indici Telemetrie Sol",
    soilHistoryTitle: "Istoric Telemetrie",
    soilHistorySub: "Parametrii solului pe parcursul a 7 zile",
    soilHistoryPlot: "Parcela Alpha-1 (Nord)",
    soilTip: "Hidratare Inteligentă: Umiditatea solului de 42,5% VWC a declanșat reglarea automată a pompelor în sectorul delta.",
    soilMoistureLabel: "Umiditate Sol",
    soilTempLabel: "Temperatura Solului",
    soilPhLabel: "Nivel pH Sol",
    soilOrganicLabel: "Conținut de Humus Organic",
    
    warehouseBanner: "Alertă: Îngrășământul Clasa-A este scăzut (Curent: {qty}kg / Limită: 500kg)",
    warehouseRestockBtn: "Reaprovizionează 180kg",
    warehouseStatusLow: "Stoc Scăzut",
    warehouseStatusHealthy: "Stoc Suficient",
    warehouseStockedText: "aprovizionat",
    
    machineryTitle: "Jurnal Întreținere Utilaje Grele",
    machineryColAsset: "Echipament",
    machineryColStatus: "Status",
    machineryColRuntime: "Ore Funcționare",
    machineryColChecked: "Ultima Verificare",
    machineryLedgerTitle: "Rapoarte de Service Automate",
    machineryLedgerSub: "Adăugare în Direct în Registrul Utilajelor",
    machineryTip: "Sarcinile finalizate adaugă automat semnături digitale și resetează cronometrele de uzură!",
    
    harvestTitle: "Bază de Date Înregistrări Recoltă",
    harvestColPlot: "Parcelă",
    harvestColGrade: "Grad",
    harvestColYield: "Recoltă",
    harvestColRevenue: "Venituri",
    harvestColNetProfit: "Profit Net",
    harvestMarginText: "Marjă",
    harvestCostText: "Cost",
    financialTitle: "Modelare Financiară",
    financialSub: "Simulează Viabilitatea Lotului",
    financialYieldLabel: "Greutate Recoltă Estimată:",
    financialPriceLabel: "Preț Unitar de Piață:",
    financialProceedsTitle: "Venit Net Estimat",
    financialGrossLabel: "Valoare Brută",
    financialFeasibilityTip: "Marja estimată este de 62,4% cu o rentabilitate prevăzută a investițiilor în compost organic.",
    financialIndexText: "Calculat pe baza indicilor de mărfuri en-gros în timp real.",
    commentAssigned: "Am primit notificarea. Încep deplasarea în teren acum.",
    commentProgress: "GPS verificat: Lucrător activ în limitele Parclei de Nord A.",
    commentCompleted: "Lucrări finalizate pe teren. S-a realizat dovada foto și s-a salvat în baza locală.",
    justNow: "Acum"
  },
  hu: {
    liveSim: "Élő Platform Szimuláció",
    title: "Tekintse meg a Platformot Működés Közben",
    desc: "Tapasztalja meg a talaj telemetriáját, a készletriasztásokat, a feladatok átmeneteit és a betakarítási eredményeket a bemutató képernyőn.",
    resetBtn: "Szimulátor Alaphelyzetbe",
    tabTasks: "📋 Feladat Életciklus",
    tabSoil: "📊 Parcella Telemetria",
    tabWarehouse: "📦 Raktári Készlet",
    tabMachinery: "⚙️ Gépek és Jellemzők",
    tabHarvest: "🐟 Betakarítás és Hozam",
    
    taskBoardTitle: "Terepmunkás Feladat haladási tábla",
    laneCreated: "Létrehozva",
    laneAssigned: "Kiosztva",
    laneInProgress: "Folyamatban",
    laneCompleted: "Befejezve",
    emptyLane: "Üres sáv",
    auditTrailTitle: "Aktív Rendszer Audit Napló",
    taskTip: "Kattintson a Következő gombra a feladat léptetéséhez. A mobil kliens azonnal szinkronizálja az állapotot.",
    btnNext: "Következő",
    
    soilIndicesTitle: "Talaj Telemetria Mutatók",
    soilHistoryTitle: "Telemetria Előzmények",
    soilHistorySub: "Talajparaméterek 7 nap alatt",
    soilHistoryPlot: "Alpha-1 Parcella (Észak)",
    soilTip: "Intelligens öntözés: A 42,5%-os talajnedvesség elindította az intelligens szivattyú fojtást a delta szektorban.",
    soilMoistureLabel: "Talajnedvesség",
    soilTempLabel: "Talajhőmérséklet",
    soilPhLabel: "Talaj pH Szintek",
    soilOrganicLabel: "Szerves Humusztartalom",
    
    warehouseBanner: "Riasztás: Az 'A' osztályú műtrágya szintje alacsony (Jelenleg: {qty}kg / Küszöb: 500kg)",
    warehouseRestockBtn: "Feltöltés 180kg-mal",
    warehouseStatusLow: "Alacsony Készlet",
    warehouseStatusHealthy: "Megfelelő",
    warehouseStockedText: "feltöltve",
    
    machineryTitle: "Nehézgépek Karbantartási Naplója",
    machineryColAsset: "Eszköz",
    machineryColStatus: "Állapot",
    machineryColRuntime: "Üzemidő",
    machineryColChecked: "Utoljára ellenőrizve",
    machineryLedgerTitle: "Automatizált Szervizbejegyzések",
    machineryLedgerSub: "Élő Gépkönyvi Naplózás",
    machineryTip: "A befejezett feladatok automatikusan rögzítik a digitális aláírást és lenullázzák az elhasználódási időzítőket!",
    
    harvestTitle: "Terméshozam Naplózási Adatbázis",
    harvestColPlot: "Parcella",
    harvestColGrade: "Osztály",
    harvestColYield: "Hozam",
    harvestColRevenue: "Bevétel",
    harvestColNetProfit: "Nettó Profit",
    harvestMarginText: "Árrés",
    harvestCostText: "Költség",
    financialTitle: "Pénzügyi Modellező",
    financialSub: "Tétel Megvalósíthatóságának Szimulálása",
    financialYieldLabel: "Várható Terméshozam Súly:",
    financialPriceLabel: "Piaci Egységár:",
    financialProceedsTitle: "Tervezett Nettó Bevétel",
    financialGrossLabel: "Bruttó érték",
    financialFeasibilityTip: "A becsült árrés 62,4%, a szerves komposzt beruházások előre jelzett megtérülésével.",
    financialIndexText: "Valós idejű nagykereskedelmi árupiaci indexek alapján számítva.",
    commentAssigned: "Megkaptam az értesítést. Azonnal elindulok a terepre.",
    commentProgress: "GPS megerősítve: A terepmunkás aktív az Északi Parcella A határain belül.",
    commentCompleted: "Terep munka befejezve. Fényképes igazolás csatolva és a helyi adatbázis frissítve.",
    justNow: "Éppen most"
  },
  bg: {
    liveSim: "Симулация на Живо",
    title: "Вижте Платформата в Действие",
    desc: "Изпробвайте нашата интерактивна телеметрия, аларми за склад, актуализация на задачи и карти за реколта директно от екрана.",
    resetBtn: "Нулиране на Симулатора",
    tabTasks: "📋 Жизнен Цикъл на Задачи",
    tabSoil: "📊 Телеметрия на Парцели",
    tabWarehouse: "📦 Склад и Наличности",
    tabMachinery: "⚙️ Машини и Сервиз",
    tabHarvest: "🐟 Реколта и Добив",
    
    taskBoardTitle: "Полево Табло за Прогрес на Задачите",
    laneCreated: "Създадени",
    laneAssigned: "Възложени",
    laneInProgress: "В Прогрес",
    laneCompleted: "Завършени",
    emptyLane: "Няма задачи в тази колона",
    auditTrailTitle: "Активен Системен Одит",
    taskTip: "Кликнете 'Следващ' на задача, за да промените статуса ѝ. Мобилният клиент се обновява веднага.",
    btnNext: "Следващ",
    
    soilIndicesTitle: "Показатели на Почвената Матрица",
    soilHistoryTitle: "История на Телеметрията",
    soilHistorySub: "Параметри на почвата за 7 дни",
    soilHistoryPlot: "Парцел Алфа-1 (Север)",
    soilTip: "Интелигентно Напояване: Влажност на почвата от 42.5% VWC активира автоматично пестене на вода в сектор делта.",
    soilMoistureLabel: "Влажност на Почвата",
    soilTempLabel: "Температура на Почвата",
    soilPhLabel: "Ниво на pH",
    soilOrganicLabel: "Органичен Хумус Съдържание",
    
    warehouseBanner: "Аларма: Количеството на Тор Клас-А е малко (В момента: {qty}кг / Граница: 500кг)",
    warehouseRestockBtn: "Зареди 180кг",
    warehouseStatusLow: "Нисък Склад",
    warehouseStatusHealthy: "Нормално",
    warehouseStockedText: "зареден",
    
    machineryTitle: "Дневник за Поддръжка на Тежки Машини",
    machineryColAsset: "Асет",
    machineryColStatus: "Статус",
    machineryColRuntime: "Работно Време",
    machineryColChecked: "Последно Проверен",
    machineryLedgerTitle: "Автоматични Сервизни Записи",
    machineryLedgerSub: "Въвеждане на данни за Машините в Реално Време",
    machineryTip: "Завършените задачи автоматично генерират дигитален подпис и зануляват брояча за износване на техниката!",
    
    harvestTitle: "База Данни за Регистрация на Добива",
    harvestColPlot: "Парцел",
    harvestColGrade: "Клас",
    harvestColYield: "Добив",
    harvestColRevenue: "Приходи",
    harvestColNetProfit: "Нетен Профит",
    harvestMarginText: "Марж",
    harvestCostText: "Разход",
    financialTitle: "Инструмент за Финансово Моделиране",
    financialSub: "Симулация на Икономическата Рентабилност",
    financialYieldLabel: "Очакван Добив Тегло:",
    financialPriceLabel: "Пазарна Цена за кг:",
    financialProceedsTitle: "Прогнозирани Нетни Приходи",
    financialGrossLabel: "Брутна стойност",
    financialFeasibilityTip: "Прогнозираният марж е 62.4% с очаквана възвращаемост на инвестициите за компост.",
    financialIndexText: "Изчислено на базата на индекс на цените на едро в реално време.",
    commentAssigned: "Получих известието. Тръгвам към полето сега.",
    commentProgress: "GPS потвърден: Работникът е активен в границите на Северен Парцел А.",
    commentCompleted: "Работата на терен е приключена. Прикачена е снимка и локалната база данни е актуализирана.",
    justNow: "Току-що"
  },
  fr: {
    liveSim: "Simulation de Plateforme en Direct",
    title: "Voyez la Plateforme en Action",
    desc: "Découvrez notre télémétrie réactive, nos alarmes de stock, nos transitions de tâches et nos bilans de récolte directement depuis l'écran de présentation.",
    resetBtn: "Réinitialiser le Simulateur",
    tabTasks: "📋 Cycle des Tâches",
    tabSoil: "📊 Télémétrie Parcelle",
    tabWarehouse: "📦 Stock de l'Entrepôt",
    tabMachinery: "⚙️ Équipements & Journaux",
    tabHarvest: "🐟 Récoltes & Rendement",
    
    taskBoardTitle: "Tableau de Progression des Ouvriers",
    laneCreated: "Créé",
    laneAssigned: "Assigné",
    laneInProgress: "En Cours",
    laneCompleted: "Complété",
    emptyLane: "Aucune tâche ici",
    auditTrailTitle: "Historique d'Audit Système Actif",
    taskTip: "Cliquez sur Suivant pour changer le statut d'une tâche. Le mobile synchronise l'état immédiatement.",
    btnNext: "Suivant",
    
    soilIndicesTitle: "Indices de Télémétrie des Sols",
    soilHistoryTitle: "Historique de Télémétrie",
    soilHistorySub: "Paramètres du sol sur 7 jours",
    soilHistoryPlot: "Parcelle Alpha-1 (Nord)",
    soilTip: "Hydratation Intelligente: L'humidité du sol de 42,5% VWC a déclenché l'ajustement de la pompe dans le secteur delta.",
    soilMoistureLabel: "Humidité du Sol",
    soilTempLabel: "Température du Sol",
    soilPhLabel: "Niveaux de pH du Sol",
    soilOrganicLabel: "Teneur en Humus Organique",
    
    warehouseBanner: "Alerte: L'engrais Grade-A est bas (Actuel: {qty}kg / Seuil: 500kg)",
    warehouseRestockBtn: "Réapprovisionner 180kg",
    warehouseStatusLow: "Stock Bas",
    warehouseStatusHealthy: "Sain",
    warehouseStockedText: "rempli",
    
    machineryTitle: "Registre d'Entretien des Machines",
    machineryColAsset: "Équipement",
    machineryColStatus: "Statut",
    machineryColRuntime: "Temps d'utilisation",
    machineryColChecked: "Dernier Contrôle",
    machineryLedgerTitle: "Rapports de Service Automatisés",
    machineryLedgerSub: "Mise à jour du registre des équipements en direct",
    machineryTip: "La finalisation des tâches sur le terrain génère des signatures numériques et réinitialise les compteurs d'usure !",
    
    harvestTitle: "Base de Données des Rendements",
    harvestColPlot: "Parcelle",
    harvestColGrade: "Qualité",
    harvestColYield: "Rendement",
    harvestColRevenue: "Revenu",
    harvestColNetProfit: "Bénéfice Net",
    harvestMarginText: "Marge",
    harvestCostText: "Coût",
    financialTitle: "Outil de Modélisation Financière",
    financialSub: "Simuler la Faisabilité du Lot",
    financialYieldLabel: "Poids du Rendement Attendu :",
    financialPriceLabel: "Prix Unitaire du Marché :",
    financialProceedsTitle: "Bénéfice Net Projeté",
    financialGrossLabel: "Valeur brute",
    financialFeasibilityTip: "La marge estimée est de 62,4% avec un retour prévu sur les investissements de compost organique.",
    financialIndexText: "Calculé sur les indices de prix de gros des matières premières en temps réel.",
    commentAssigned: "J'ai bien reçu la notification. Je commence le trajet de terrain.",
    commentProgress: "GPS validé : Ouvrier actif dans les limites de la parcelle Nord A.",
    commentCompleted: "Travaux terminés. Preuve photo transmise et base de données synchronisée.",
    justNow: "À l'instant"
  },
  de: {
    liveSim: "Live-Plattform-Simulation",
    title: "Sehen Sie die Plattform in Aktion",
    desc: "Erleben Sie unsere reaktionsschnelle Bodentelemetrie, Lageralarme, Aufgabenübergänge und Erntebilanzen direkt auf dem Präsentationsbildschirm.",
    resetBtn: "Simulator zurücksetzen",
    tabTasks: "📋 Aufgaben-Ablauf",
    tabSoil: "📊 Bodentelemetrie",
    tabWarehouse: "📦 Lagerbestand",
    tabMachinery: "⚙️ Maschinen & Protokolle",
    tabHarvest: "🐟 Ernte & Ertrag",
    
    taskBoardTitle: "Aufgaben-Fortschrittsboard für Feldarbeiter",
    laneCreated: "Erstellt",
    laneAssigned: "Zugewiesen",
    laneInProgress: "In Arbeit",
    laneCompleted: "Erledigt",
    emptyLane: "Keine Aufgaben",
    auditTrailTitle: "Aktiver System-Prüfpfad",
    taskTip: "Klicken Sie auf 'Weiter', um eine Aufgabe zu verschieben. Die Smartphone-App synchronisiert sich sofort.",
    btnNext: "Weiter",
    
    soilIndicesTitle: "Bodentelemetrie-Messwerte",
    soilHistoryTitle: "Telemetrieverlauf",
    soilHistorySub: "Bodenparameter über 7 Tage",
    soilHistoryPlot: "Parzelle Alpha-1 (Nord)",
    soilTip: "Intelligente Bewässerung: Eine Bodenfeuchtigkeit von 42,5% VWC hat die Standard-Drosselung der Pumpe im Sektor Delta ausgelöst.",
    soilMoistureLabel: "Bodenfeuchtigkeit",
    soilTempLabel: "Bodentemperatur",
    soilPhLabel: "Boden-pH-Wert",
    soilOrganicLabel: "Organischer Humusgehalt",
    
    warehouseBanner: "Alarm: Dünger Klasse-A ist knapp (Aktuell: {qty}kg / Grenzwert: 500kg)",
    warehouseRestockBtn: "Lager um 180kg auffüllen",
    warehouseStatusLow: "Niedriger Bestand",
    warehouseStatusHealthy: "Sicherer Bestand",
    warehouseStockedText: "gefüllt",
    
    machineryTitle: "Wartungsprotokoll für Schwermaschinen",
    machineryColAsset: "Maschine",
    machineryColStatus: "Status",
    machineryColRuntime: "Betriebsstunden",
    machineryColChecked: "Letzte Prüfung",
    machineryLedgerTitle: "Automatisierte Serviceprotokolle",
    machineryLedgerSub: "Echtzeit-Eintrag in die Maschinenakte",
    machineryTip: "Erledigte Feldaufgaben tragen automatisch digitale Signaturen ein und setzen die Verschleißtimer zurück!",
    
    harvestTitle: "Ernteertragsdatenbank",
    harvestColPlot: "Parzelle",
    harvestColGrade: "Qualität",
    harvestColYield: "Ertrag",
    harvestColRevenue: "Umsatz",
    harvestColNetProfit: "Reingewinn",
    harvestMarginText: "Marge",
    harvestCostText: "Kosten",
    financialTitle: "Finanzmodellierungstool",
    financialSub: "Ertrags-Machbarkeit simulieren",
    financialYieldLabel: "Erwartetes Erntegewicht:",
    financialPriceLabel: "Markt-Verkaufspreis:",
    financialProceedsTitle: "Projizierter Reingewinn",
    financialGrossLabel: "Bruttowert",
    financialFeasibilityTip: "Die Marge liegt bei ca. 62,4% mit einer prognostizierten Rendite auf Investitionen in Bio-Kompost.",
    financialIndexText: "Berechnet auf Basis von Echtzeit-Großhandelspreisen für Rohstoffe.",
    commentAssigned: "Ich habe die Benachrichtigung erhalten. Ich beginne jetzt die Fahrt zum Feld.",
    commentProgress: "GPS verifiziert: Feldarbeiter aktiv innerhalb der Grenzen von Nord-Parzelle A.",
    commentCompleted: "Feldarbeit abgeschlossen. Fotobeweis gesichert und lokale Datenbank aktualisiert.",
    justNow: "Gerade eben"
  }
};

export default function InteractiveShowcase({ language = 'en' }: InteractiveShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'tasks' | 'soil' | 'warehouse' | 'machinery' | 'harvest'>('tasks');
  
  // State variables for simulation
  const [tasks, setTasks] = useState<FarmTask[]>(INITIAL_TASKS);
  const [soilMetrics, setSoilMetrics] = useState<SoilMetric[]>(INITIAL_SOIL_METRICS);
  const [inventory, setInventory] = useState<InventoryItem[]>(INITIAL_INVENTORY);
  const [machinery, setMachinery] = useState<MachineryItem[]>(INITIAL_MACHINERY);
  const [harvestRecords, setHarvestRecords] = useState<HarvestRecord[]>(INITIAL_HARVESTS);

  const t = showTrans[language] || showTrans.en;

  // Interaction handlers
  const advanceTask = (taskId: string) => {
    setTasks(prev => prev.map(task => {
      if (task.id === taskId) {
        let nextStatus: TaskStatus = task.status;
        if (task.status === 'created') nextStatus = 'assigned';
        else if (task.status === 'assigned') nextStatus = 'in-progress';
        else if (task.status === 'in-progress') nextStatus = 'done';
        
        const nextComments = [...task.comments];
        if (nextStatus === 'assigned') {
          nextComments.push({
            user: 'Julian Vance',
            text: t.commentAssigned,
            time: t.justNow
          });
        } else if (nextStatus === 'in-progress') {
          nextComments.push({
            user: 'System Bot',
            text: t.commentProgress,
            time: t.justNow
          });
        } else if (nextStatus === 'done') {
          nextComments.push({
            user: 'Julian Vance',
            text: t.commentCompleted,
            time: t.justNow
          });
          // Automatically append maintenance logs if this is a machinery related task
          if (task.category === 'Machinery Maintenance' || task.title.includes('Pump A1')) {
            setMachinery(prevMac => prevMac.map(m => {
              if (m.id === 'MAC-11') {
                return {
                  ...m,
                  status: 'operational',
                  operationalHours: 0,
                  serviceLogs: ['Service successfully resolved via completed task ' + task.id, ...m.serviceLogs]
                };
              }
              return m;
            }));
          }
        }

        return {
          ...task,
          status: nextStatus,
          timestamp: t.justNow,
          comments: nextComments
        };
      }
      return task;
    }));
  };

  const adjustSoilValue = (key: 'moisture' | 'ph' | 'temp', delta: number) => {
    setSoilMetrics(prev => prev.map(m => {
      if (m.key === key) {
        const newValue = Math.round((m.value + delta) * 10) / 10;
        let nextStatus: 'optimal' | 'warning' | 'critical' = 'optimal';
        if (key === 'moisture' && (newValue < 30 || newValue > 60)) nextStatus = 'warning';
        if (key === 'ph' && (newValue < 6.5 || newValue > 8.5)) nextStatus = 'warning';
        if (key === 'temp' && (newValue < 18 || newValue > 30)) nextStatus = 'warning';
        
        const updatedHistory = [...m.history.slice(1), { day: 'Sun', value: newValue }];
        return {
          ...m,
          value: newValue,
          status: nextStatus,
          history: updatedHistory
        };
      }
      return m;
    }));
  };

  const adjustStock = (itemId: string, amount: number) => {
    setInventory(prev => prev.map(item => {
      if (item.id === itemId) {
        const newQty = Math.max(0, Math.min(item.totalCapacity, item.quantity + amount));
        const status = newQty < item.threshold ? 'low' : 'healthy';
        return { ...item, quantity: newQty, status };
      }
      return item;
    }));
  };

  const resetAllData = () => {
    setTasks(INITIAL_TASKS);
    setSoilMetrics(INITIAL_SOIL_METRICS);
    setInventory(INITIAL_INVENTORY);
    setMachinery(INITIAL_MACHINERY);
    setHarvestRecords(INITIAL_HARVESTS);
  };

  return (
    <div id="interactive-showcase" className="w-full bg-cream-rich border border-border-warm rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
      {/* Decorative Warm Accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-olive-sage/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-terracotta/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-olive-deep animate-pulse"></span>
            <span className="font-mono text-[10px] tracking-wider text-olive-medium font-bold uppercase">{t.liveSim}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display text-charcoal-olive tracking-tight">
            {t.title}
          </h3>
          <p className="text-charcoal-olive/75 text-sm mt-1 max-w-2xl">
            {t.desc}
          </p>
        </div>
        <div>
          <button 
            onClick={resetAllData}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cream-light border border-border-warm text-charcoal-olive hover:text-white hover:bg-olive-deep transition text-xs font-semibold"
            id="btn-reset-simulator"
          >
            <RefreshCw size={12} className="animate-spin-slow" />
            {t.resetBtn}
          </button>
        </div>
      </div>

      {/* Modern Tabs Row */}
      <div className="flex overflow-x-auto pb-3 mb-8 border-b border-border-warm/60 scrollbar-thin gap-1.5 sm:gap-2">
        <button
          onClick={() => setActiveTab('tasks')}
          className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
            activeTab === 'tasks'
              ? 'bg-olive-deep text-cream-light shadow-sm'
              : 'text-charcoal-olive/75 hover:text-charcoal-olive hover:bg-cream-dark/40'
          }`}
          id="showcase-tab-tasks"
        >
          {t.tabTasks}
        </button>
        <button
          onClick={() => setActiveTab('soil')}
          className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
            activeTab === 'soil'
              ? 'bg-olive-deep text-cream-light shadow-sm'
              : 'text-charcoal-olive/75 hover:text-charcoal-olive hover:bg-cream-dark/40'
          }`}
          id="showcase-tab-soil"
        >
          {t.tabSoil}
        </button>
        <button
          onClick={() => setActiveTab('warehouse')}
          className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
            activeTab === 'warehouse'
              ? 'bg-olive-deep text-cream-light shadow-sm'
              : 'text-charcoal-olive/75 hover:text-charcoal-olive hover:bg-cream-dark/40'
          }`}
          id="showcase-tab-warehouse"
        >
          {t.tabWarehouse}
        </button>
        <button
          onClick={() => setActiveTab('machinery')}
          className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
            activeTab === 'machinery'
              ? 'bg-olive-deep text-cream-light shadow-sm'
              : 'text-charcoal-olive/75 hover:text-charcoal-olive hover:bg-cream-dark/40'
          }`}
          id="showcase-tab-machinery"
        >
          {t.tabMachinery}
        </button>
        <button
          onClick={() => setActiveTab('harvest')}
          className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
            activeTab === 'harvest'
              ? 'bg-olive-deep text-cream-light shadow-sm'
              : 'text-charcoal-olive/75 hover:text-charcoal-olive hover:bg-cream-dark/40'
          }`}
          id="showcase-tab-harvest"
        >
          {t.tabHarvest}
        </button>
      </div>

      {/* Tab Panels with Elegant Organic Card Borders */}
      <div className="w-full bg-cream-light rounded-2xl border border-border-warm p-5 sm:p-6 shadow-inner min-h-[350px]">
        
        {/* TAB 1: TASK LIFECYCLE & ASSIGNMENTS */}
        {activeTab === 'tasks' && (
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 animate-fadeIn">
            {/* Task columns (4 steps) */}
            <div className="xl:col-span-8 flex flex-col gap-4">
              <span className="text-[10px] font-mono tracking-wider text-olive-medium uppercase font-bold">{t.taskBoardTitle}</span>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {(['created', 'assigned', 'in-progress', 'done'] as TaskStatus[]).map(status => {
                  const filtered = tasks.filter(task => task.status === status);
                  const meta: Record<TaskStatus, { title: string; color: string; bg: string }> = {
                    created: { title: t.laneCreated, color: 'text-charcoal-olive', bg: 'bg-cream-dark/50' },
                    assigned: { title: t.laneAssigned, color: 'text-olive-deep', bg: 'bg-olive-sage/10' },
                    'in-progress': { title: t.laneInProgress, color: 'text-amber-ochre', bg: 'bg-amber-ochre/10' },
                    done: { title: t.laneCompleted, color: 'text-olive-deep', bg: 'bg-olive-moss/20' }
                  };

                  return (
                    <div key={status} className="bg-cream-rich/30 border border-border-warm/60 rounded-xl p-3 flex flex-col min-h-[180px]">
                      <div className="flex items-center justify-between border-b border-border-warm/40 pb-2 mb-2">
                        <span className={`text-[10px] font-bold uppercase font-sans tracking-wide px-1.5 py-0.5 rounded ${meta[status].bg} ${meta[status].color}`}>
                          {meta[status].title}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-charcoal-olive/60">{filtered.length}</span>
                      </div>

                      <div className="flex flex-col gap-2">
                        {filtered.length === 0 ? (
                          <div className="py-8 text-center text-charcoal-olive/30 text-[11px] italic">
                            {t.emptyLane}
                          </div>
                        ) : (
                          filtered.map(task => (
                            <div key={task.id} className="bg-cream-light border border-border-warm rounded-lg p-2.5 shadow-sm hover:shadow-md transition">
                              <div className="flex items-start justify-between gap-1.5 mb-1">
                                <span className="font-mono text-[9px] text-olive-medium font-bold">{task.id}</span>
                                <span className={`text-[8px] px-1 rounded font-bold uppercase ${
                                  task.priority === 'high' ? 'bg-terracotta/10 text-terracotta' : 'bg-olive-sage/10 text-olive-deep'
                                }`}>
                                  {task.priority}
                                </span>
                              </div>
                              <h5 className="text-[11px] font-semibold text-charcoal-olive line-clamp-1">{task.title}</h5>
                              <div className="flex items-center justify-between mt-3 pt-2 border-t border-border-warm/40">
                                <span className="text-[9px] text-charcoal-olive/70 flex items-center gap-1 font-medium">
                                  <span className="w-1.5 h-1.5 rounded-full bg-olive-medium"></span>
                                  {task.assignedTo.split(' ')[0]}
                                </span>
                                {task.status !== 'done' && (
                                  <button
                                    onClick={() => advanceTask(task.id)}
                                    className="text-[9px] bg-olive-deep text-cream-light font-bold px-2 py-0.5 rounded flex items-center gap-1 hover:bg-olive-dark transition"
                                  >
                                    {t.btnNext}
                                    <ArrowRight size={8} />
                                  </button>
                                )}
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Audit Log / Detail Panel */}
            <div className="xl:col-span-4 bg-cream-rich/50 border border-border-warm rounded-xl p-4 flex flex-col justify-between h-[340px]">
              <div className="flex flex-col overflow-y-auto max-h-[250px] pr-1 scrollbar-thin">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-olive-medium uppercase">{t.auditTrailTitle}</span>
                  <History size={12} className="text-olive-medium" />
                </div>
                
                <div className="flex flex-col gap-2">
                  {tasks[0].comments.map((comment, index) => (
                    <div key={index} className="bg-cream-light border border-border-warm/80 p-2.5 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between text-[9px] font-bold text-olive-deep mb-1">
                        <span className="flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-terracotta"></span>
                          {comment.user}
                        </span>
                        <span className="font-mono text-charcoal-olive/40">{comment.time}</span>
                      </div>
                      <p className="text-[11px] text-charcoal-olive/80 leading-normal">{comment.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-border-warm flex flex-col gap-2">
                <span className="text-[10px] text-charcoal-olive/60">
                  {t.taskTip}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PLOT TELEMETRY */}
        {activeTab === 'soil' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn">
            {/* Live widgets */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="text-[10px] font-mono tracking-wider text-olive-medium uppercase font-bold">{t.soilIndicesTitle}</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {soilMetrics.map(m => {
                  let localizedLabel = m.label;
                  if (m.key === 'moisture') localizedLabel = t.soilMoistureLabel;
                  if (m.key === 'temp') localizedLabel = t.soilTempLabel;
                  if (m.key === 'ph') localizedLabel = t.soilPhLabel;
                  if (m.key === 'organic') localizedLabel = t.soilOrganicLabel;

                  return (
                    <div key={m.key} className="bg-cream-rich border border-border-warm rounded-xl p-3.5 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-charcoal-olive/70">{localizedLabel}</span>
                        <span className="w-2 h-2 rounded-full bg-olive-medium animate-pulse"></span>
                      </div>

                      <div className="my-3 flex items-baseline gap-1">
                        <span className="text-2xl font-serif text-charcoal-olive font-medium">{m.value}</span>
                        <span className="text-[10px] text-charcoal-olive/50 font-mono">{m.unit}</span>
                      </div>

                      {/* Simulation buttons */}
                      {['moisture', 'ph', 'temp'].includes(m.key) && (
                        <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-border-warm/40 justify-between">
                          <span className="text-[8px] font-mono text-olive-deep font-semibold uppercase">{m.status}</span>
                          <div className="flex gap-1">
                            <button
                              onClick={() => adjustSoilValue(m.key as any, -1)}
                              className="bg-cream-light hover:bg-cream-dark w-5 h-5 rounded border border-border-warm flex items-center justify-center text-xs text-charcoal-olive hover:text-white hover:bg-olive-deep transition"
                            >
                              <Minus size={10} />
                            </button>
                            <button
                              onClick={() => adjustSoilValue(m.key as any, 1)}
                              className="bg-cream-light hover:bg-cream-dark w-5 h-5 rounded border border-border-warm flex items-center justify-center text-xs text-charcoal-olive hover:text-white hover:bg-olive-deep transition"
                            >
                              <Plus size={10} />
                            </button>
                          </div>
                        </div>
                      )}

                      {!['moisture', 'ph', 'temp'].includes(m.key) && (
                        <div className="pt-2 border-t border-border-warm/40 text-[9px] text-charcoal-olive/50 italic">
                          Calculated Humus Index
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Custom SVG telemetry Chart */}
            <div className="lg:col-span-7 bg-cream-rich/30 border border-border-warm rounded-xl p-4 flex flex-col justify-between min-h-[280px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-mono text-olive-medium uppercase font-bold block">{t.soilHistoryTitle}</span>
                    <h4 className="text-xs text-charcoal-olive">{t.soilHistorySub}</h4>
                  </div>
                  <span className="text-[9px] font-mono bg-cream-rich border border-border-warm text-olive-deep px-2 py-0.5 rounded-md font-bold">
                    {t.soilHistoryPlot}
                  </span>
                </div>

                {/* SVG Chart */}
                <div className="relative w-full h-32 bg-cream-light/60 rounded-lg border border-border-warm/50 p-2 overflow-hidden flex items-end">
                  <svg className="absolute inset-0 w-full h-full p-2 overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="soilChartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4A5833" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#4A5833" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Chart path for soil metrics */}
                    {(() => {
                      const data = [38, 40, 45, 43, 41, 42, 42.5];
                      const stepX = 500 / 6;
                      const coords = data.map((val, idx) => {
                        const pct = (val - 30) / (50 - 30); // scale between 30 and 50
                        const y = 120 - (pct * 80); // scale to height
                        const x = idx * stepX;
                        return { x, y };
                      });

                      const pathD = coords.reduce((acc, curr, i) => {
                        return i === 0 ? `M ${curr.x} ${curr.y}` : `${acc} L ${curr.x} ${curr.y}`;
                      }, '');

                      const areaD = `${pathD} L ${coords[coords.length - 1].x} 120 L ${coords[0].x} 120 Z`;

                      return (
                        <>
                          <path d={areaD} fill="url(#soilChartGrad)" />
                          <path d={pathD} fill="none" stroke="#4A5833" strokeWidth="2" />
                          {coords.map((c, i) => (
                            <circle
                              key={i}
                              cx={c.x}
                              cy={c.y}
                              r="3"
                              fill="#FAF7F2"
                              stroke="#4A5833"
                              strokeWidth="1.5"
                            />
                          ))}
                        </>
                      );
                    })()}
                  </svg>
                  <div className="absolute bottom-1 left-0 right-0 px-2 flex justify-between text-[8px] font-mono text-charcoal-olive/60">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 text-[10px] bg-olive-sage/10 text-olive-deep p-2.5 rounded-lg border border-olive-sage/20">
                <TrendingUp size={14} />
                <span>
                  {t.soilTip}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SMART WAREHOUSE & INVENTORY */}
        {activeTab === 'warehouse' && (
          <div className="animate-fadeIn">
            {/* Terracotta Alert Banner */}
            <div className="mb-4 bg-terracotta/10 border border-terracotta/20 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <AlertTriangle size={15} className="text-terracotta animate-bounce" />
                <span className="text-charcoal-olive font-semibold">
                  ⚠️ {t.warehouseBanner.replace('{qty}', String(inventory[0].quantity))}
                </span>
              </div>
              <button
                onClick={() => adjustStock('INV-084', 180)}
                className="bg-terracotta hover:bg-terracotta/90 text-cream-light font-bold px-3 py-1 rounded shadow-sm text-[11px] transition active:scale-98"
              >
                {t.warehouseRestockBtn}
              </button>
            </div>

            {/* Inventory Listing */}
            <div className="bg-cream-rich/30 border border-border-warm rounded-xl overflow-hidden">
              <div className="divide-y divide-border-warm">
                {inventory.map(item => {
                  const pct = Math.min(100, Math.round((item.quantity / item.totalCapacity) * 100));
                  const isLow = item.quantity < item.threshold;

                  let itemDisplayName = item.name;
                  if (item.id === 'INV-084' && language === 'ro') {
                    itemDisplayName = 'Îngrășământ Clasa A (Compost organic azotat)';
                  }

                  return (
                    <div key={item.id} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-3 md:w-1/3">
                        <div className={`p-2 rounded-lg ${isLow ? 'bg-terracotta/10 text-terracotta' : 'bg-olive-sage/10 text-olive-deep'}`}>
                          <Package size={16} />
                        </div>
                        <div>
                          <h5 className="text-[11px] font-mono tracking-wider text-charcoal-olive/60 uppercase">{item.id}</h5>
                          <h4 className="text-xs font-bold text-charcoal-olive">{itemDisplayName}</h4>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="flex-1 max-w-sm">
                        <div className="flex justify-between text-[10px] font-mono text-charcoal-olive/60 mb-1">
                          <span>{item.quantity} {item.unit} / {item.totalCapacity} {item.unit}</span>
                          <span>{pct}% {t.warehouseStockedText}</span>
                        </div>
                        <div className="w-full h-1.5 bg-cream-dark/60 rounded-full overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-300 ${isLow ? 'bg-terracotta' : 'bg-olive-deep'}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center gap-2">
                        <span className={`text-[9px] font-bold uppercase font-mono px-2 py-0.5 rounded ${
                          isLow ? 'bg-terracotta/10 text-terracotta' : 'bg-olive-moss/25 text-olive-deep'
                        }`}>
                          {isLow ? t.warehouseStatusLow : t.warehouseStatusHealthy}
                        </span>
                        <div className="flex gap-1">
                          <button
                            onClick={() => adjustStock(item.id, -40)}
                            className="bg-cream-light hover:bg-cream-dark border border-border-warm text-charcoal-olive font-bold w-6 h-6 rounded flex items-center justify-center text-xs transition"
                          >
                            <Minus size={10} />
                          </button>
                          <button
                            onClick={() => adjustStock(item.id, 40)}
                            className="bg-cream-light hover:bg-cream-dark border border-border-warm text-charcoal-olive font-bold w-6 h-6 rounded flex items-center justify-center text-xs transition"
                          >
                            <Plus size={10} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: MACHINERY & MAINTENANCE */}
        {activeTab === 'machinery' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn">
            <div className="lg:col-span-8 flex flex-col">
              <span className="text-[10px] font-mono tracking-wider text-olive-medium uppercase font-bold mb-2 block">{t.machineryTitle}</span>
              
              <div className="bg-cream-rich/30 border border-border-warm rounded-xl overflow-hidden">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-border-warm bg-cream-rich/50 text-[10px] font-mono uppercase tracking-wider text-olive-medium">
                      <th className="p-3 pl-4">{t.machineryColAsset}</th>
                      <th className="p-3">{t.machineryColStatus}</th>
                      <th className="p-3">{t.machineryColRuntime}</th>
                      <th className="p-3">{t.machineryColChecked}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-warm/60">
                    {machinery.map(m => (
                      <tr key={m.id} className="hover:bg-cream-rich/20 transition">
                        <td className="p-3 pl-4">
                          <div>
                            <span className="font-bold text-charcoal-olive block">{m.name}</span>
                            <span className="text-[9px] font-mono text-charcoal-olive/50">{m.type}</span>
                          </div>
                        </td>
                        <td className="p-3">
                          <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold uppercase ${
                            m.status === 'operational' ? 'bg-olive-moss/20 text-olive-deep' : 'bg-amber-ochre/15 text-amber-ochre'
                          }`}>
                            {m.status}
                          </span>
                        </td>
                        <td className="p-3">
                          <span className="font-mono">{m.operationalHours} / 500 hrs</span>
                        </td>
                        <td className="p-3 text-charcoal-olive/70 font-sans">
                          {m.lastServiced}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Auto-Generated Maintenance Card */}
            <div className="lg:col-span-4 bg-cream-rich/50 border border-border-warm rounded-xl p-4 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-wider text-olive-medium uppercase font-bold block mb-2">{t.machineryLedgerTitle}</span>
                <h5 className="text-xs font-bold text-charcoal-olive mb-3">{t.machineryLedgerSub}</h5>
                
                <div className="flex flex-col gap-2">
                  {machinery[0].serviceLogs.map((log, i) => (
                    <div key={i} className="bg-cream-light border border-border-warm/80 p-2.5 rounded-lg shadow-sm">
                      <div className="flex items-center gap-1.5 text-[9px] font-bold text-olive-deep mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-olive-medium"></span>
                        Service Append Success
                      </div>
                      <p className="text-[10px] text-charcoal-olive/80 font-mono leading-tight">{log}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[10px] text-charcoal-olive/60 mt-3 pt-3 border-t border-border-warm">
                {t.machineryTip}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: HARVESTS & PROFITS */}
        {activeTab === 'harvest' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn">
            {/* Harvest Scores */}
            <div className="lg:col-span-8 flex flex-col gap-3">
              <span className="text-[10px] font-mono tracking-wider text-olive-medium uppercase font-bold">{t.harvestTitle}</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {harvestRecords.map(rec => {
                  const revenue = rec.yieldKg * rec.unitPrice;
                  const profit = revenue - rec.productionCost;
                  const profitMargin = Math.round((profit / revenue) * 100);

                  return (
                    <div key={rec.id} className="bg-cream-rich/40 border border-border-warm rounded-xl p-4 flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-olive-deep font-bold px-1.5 py-0.2 rounded bg-cream-light border border-border-warm">
                          {t.harvestColPlot}: {rec.plotLabel}
                        </span>
                        <span className="text-[10px] text-charcoal-olive/50 font-mono">{rec.date}</span>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-charcoal-olive">{rec.crop}</h4>
                        <span className="text-[10px] text-charcoal-olive/60 block mt-0.5">{t.harvestColGrade}: <b>{rec.grading}</b></span>
                      </div>

                      <div className="my-3 pt-2 border-t border-border-warm/40 grid grid-cols-3 gap-1 text-center">
                        <div>
                          <span className="text-[8px] uppercase tracking-wider font-mono text-charcoal-olive/50 block">{t.harvestColYield}</span>
                          <span className="text-xs font-bold font-mono text-charcoal-olive">{rec.yieldKg}kg</span>
                        </div>
                        <div>
                          <span className="text-[8px] uppercase tracking-wider font-mono text-charcoal-olive/50 block">{t.harvestColRevenue}</span>
                          <span className="text-xs font-bold font-mono text-olive-deep">${revenue.toLocaleString()}</span>
                        </div>
                        <div>
                          <span className="text-[8px] uppercase tracking-wider font-mono text-charcoal-olive/50 block">{t.harvestColNetProfit}</span>
                          <span className="text-xs font-bold font-mono text-terracotta">${profit.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="w-full h-1 bg-cream-dark/60 rounded-full overflow-hidden mt-1 flex">
                        <div className="h-full bg-terracotta" style={{ width: `${100 - profitMargin}%` }} title={t.harvestCostText} />
                        <div className="h-full bg-olive-deep" style={{ width: `${profitMargin}%` }} title={t.harvestMarginText} />
                      </div>
                      <div className="flex justify-between items-center text-[8px] font-mono text-charcoal-olive/50 mt-1">
                        <span>{t.harvestCostText}: {100 - profitMargin}%</span>
                        <span className="text-olive-deep font-bold">{t.harvestMarginText}: {profitMargin}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Smart Financial Projection Model */}
            <div className="lg:col-span-4 bg-cream-rich border border-border-warm rounded-xl p-4 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-wider text-olive-medium uppercase font-bold block mb-1">{t.financialTitle}</span>
                <h5 className="text-xs font-bold text-charcoal-olive mb-2">{t.financialSub}</h5>
                
                <div className="space-y-3.5 mt-4">
                  <div>
                    <label className="text-[10px] text-charcoal-olive/70 font-semibold flex justify-between">
                      <span>{t.financialYieldLabel}</span>
                      <span className="font-mono font-bold text-olive-deep">2,500 kg</span>
                    </label>
                    <input
                      type="range"
                      min="500"
                      max="5000"
                      step="100"
                      defaultValue="2500"
                      className="w-full h-1 bg-cream-dark rounded-lg appearance-none cursor-pointer accent-olive-deep"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-charcoal-olive/70 font-semibold flex justify-between">
                      <span>{t.financialPriceLabel}</span>
                      <span className="font-mono font-bold text-olive-deep">$6.50 / kg</span>
                    </label>
                    <input
                      type="range"
                      min="2.00"
                      max="20.00"
                      step="0.10"
                      defaultValue="6.50"
                      className="w-full h-1 bg-cream-dark rounded-lg appearance-none cursor-pointer accent-olive-deep"
                    />
                  </div>
                </div>

                <div className="mt-5 p-3 bg-cream-light border border-border-warm rounded-lg">
                  <span className="text-[8px] font-mono text-charcoal-olive/50 block uppercase">{t.financialProceedsTitle}</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-serif font-medium text-charcoal-olive">$16,250</span>
                    <span className="text-[9px] text-olive-medium font-mono">{t.financialGrossLabel}</span>
                  </div>
                  <p className="text-[9px] text-charcoal-olive/60 mt-1">
                    {t.financialFeasibilityTip}
                  </p>
                </div>
              </div>

              <div className="text-[9px] text-charcoal-olive/50 mt-3 italic text-center">
                {t.financialIndexText}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
