/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Laptop, 
  Smartphone, 
  Wifi, 
  WifiOff, 
  QrCode, 
  CheckCircle, 
  TrendingUp, 
  Sprout, 
  Clock, 
  SmartphoneNfc
} from 'lucide-react';
import { Language } from '../data/translations';

interface ExperienceSliderProps {
  language?: Language;
}

const expTrans: Record<Language, {
  tag: string;
  title1: string;
  title2: string;
  desc: string;
  btnWeb: string;
  btnMobile: string;
  
  webTitle1: string;
  webDesc1: string;
  webTitle2: string;
  webDesc2: string;
  webTitle3: string;
  webDesc3: string;
  
  mobTitle1: string;
  mobDesc1: string;
  mobTitle2: string;
  mobDesc2: string;
  mobTitle3: string;
  mobDesc3: string;
  
  chromeUrl: string;
  modeManager: string;
  kpiTag: string;
  kpiTitle: string;
  kpiCritical: string;
  kpiCurrent: string;
  totalAcreage: string;
  totalAcreageValue: string;
  totalAcreageDesc: string;
  activeWorkers: string;
  activeWorkersValue: string;
  activeWorkersDesc: string;
  
  appTitle: string;
  syncBtnOnline: string;
  syncBtnOffline: string;
  sqliteNet: string;
  sqliteActive: string;
  sqliteCached: string;
  stockBarcode: string;
  scanStateInit: string;
  scanStateSuccess: string;
  scanStateDeducted: string;
  scanStateIdle: string;
}> = {
  en: {
    tag: "Dual Workspace Synergy",
    title1: "One Monorepo.",
    title2: "Two Tailored Experiences.",
    desc: "Our agricultural workspace serves both administrative and field deployment environments from a unified codebase. This guarantees pristine data validation and zero lag between manager orders and boots on the ground.",
    btnWeb: "Manager Web App",
    btnMobile: "Worker Mobile App",
    webTitle1: "Manager Command Dashboard",
    webDesc1: "Review soil chemistry, dispatch urgent worker notifications, monitor crop yield forecasting, and view automated inventory restock alerts.",
    webTitle2: "Multi-Plot Telemetry View",
    webDesc2: "Aggregate real-time environmental data streams (soil temperature, water acidity, moisture) with color-coded warning indices.",
    webTitle3: "Audit Trail Dispatcher",
    webDesc3: "Define and delegate tasks on a clean workflow interface. Automatically update service intervals based on worker sign-offs.",
    mobTitle1: "Offline SQLite Syncer",
    mobDesc1: "Keep logging telemetry readings and check off pending tasks even in remote fields with zero cell coverage. Auto-syncs to Cloud Run on network re-entry.",
    mobTitle2: "Instant Camera Barcode Scan",
    mobDesc2: "Aim smartphone camera at warehouse bags of fertilizer or seed stocks. Deduct quantities in-app without manual keyboard input.",
    mobTitle3: "Live Worker Notification Channel",
    mobDesc3: "Receive localized push notices detailing soil anomalies in specific sectors. Quickly attach photo proof of irrigation leaks.",
    chromeUrl: "farming-management.org/analytics/north-plot",
    modeManager: "Manager Mode",
    kpiTag: "Harvest Projection KPI",
    kpiTitle: "Plot Soil Moisture Trend",
    kpiCritical: "Critical low: 30% VWC",
    kpiCurrent: "Current Status: Optimal (42.5%)",
    totalAcreage: "Total Acreage",
    totalAcreageValue: "1,420 Acres",
    totalAcreageDesc: "4 Plots fully monitored",
    activeWorkers: "Active Workers",
    activeWorkersValue: "8 Enrolled",
    activeWorkersDesc: "GPS check-ins synced",
    appTitle: "FieldWorker App",
    syncBtnOnline: "CLOUD SYNC",
    syncBtnOffline: "OFFLINE BUFFER",
    sqliteNet: "SQLite / Local State",
    sqliteActive: "✓ Telemetry changes uploaded",
    sqliteCached: "⚠️ 1 Transaction cached in background",
    stockBarcode: "Stock Barcode Scanner",
    scanStateInit: "Initializing smartphone camera...",
    scanStateSuccess: "Scan Successful",
    scanStateDeducted: "Deducted 25kg from Warehouse",
    scanStateIdle: "Tap to scan Fertilizer bag"
  },
  ro: {
    tag: "Sinergie Spațiu de Lucru Dublu",
    title1: "Un singur depozit.",
    title2: "Două experiențe adaptate.",
    desc: "Spațiul nostru de lucru deservește atât mediile administrative, cât și cele de teren dintr-o bază de cod unificată. Aceasta garantează validarea datelor și zero întârzieri.",
    btnWeb: "Aplicație Web Manager",
    btnMobile: "Aplicație Mobilă Lucrător",
    webTitle1: "Tablou de Comandă Manager",
    webDesc1: "Verificați chimia solului, trimiteți notificări urgente lucrătorilor, monitorizați prognoza recoltelor și alerte de stoc.",
    webTitle2: "Vizualizare Telemetrie Multi-Plot",
    webDesc2: "Agregați fluxuri de date de mediu în timp real (temperatura solului, aciditatea apei, umiditatea) cu indici de avertizare.",
    webTitle3: "Dispecerat Jurnal Audit",
    webDesc3: "Definiți și delegați sarcini pe o interfață curată. Actualizați automat intervalele de service în funcție de semnăturile lucrătorilor.",
    mobTitle1: "Sincronizare SQLite Offline",
    mobDesc1: "Înregistrați telemetria și finalizați sarcinile chiar și pe câmpuri izolate fără semnal. Se sincronizează la revenirea în rețea.",
    mobTitle2: "Scanare Cod de Bare cu Camera",
    mobDesc2: "Îndreptați camera telefonului spre sacii de îngrășăminte. Scădeți stocurile direct din aplicație fără tastare manuală.",
    mobTitle3: "Canal Notificări Lucrător Live",
    mobDesc3: "Primiți notificări locale despre anomaliile solului în sectoare specifice. Atașați dovezi foto ale scurgerilor de irigații.",
    chromeUrl: "farming-management.org/analytics/north-plot",
    modeManager: "Mod Manager",
    kpiTag: "KPI Proiecție Recoltă",
    kpiTitle: "Tendința Umidității Solului",
    kpiCritical: "Nivel critic scăzut: 30% VWC",
    kpiCurrent: "Status curent: Optim (42.5%)",
    totalAcreage: "Suprafață Totală",
    totalAcreageValue: "1.420 Hectare",
    totalAcreageDesc: "4 parcele monitorizate",
    activeWorkers: "Lucrători Activi",
    activeWorkersValue: "8 Înrolați",
    activeWorkersDesc: "Sincronizare check-in GPS",
    appTitle: "Aplicație Lucrător",
    syncBtnOnline: "SINCRONIZARE CLOUD",
    syncBtnOffline: "BUFFER OFFLINE",
    sqliteNet: "SQLite / Stare Locală",
    sqliteActive: "✓ Date telemetrice încărcate",
    sqliteCached: "⚠️ 1 tranzacție stocată local",
    stockBarcode: "Scaner Cod de Bare",
    scanStateInit: "Se inițializează camera...",
    scanStateSuccess: "Scanare Reușită",
    scanStateDeducted: "S-au scăzut 25 kg din depozit",
    scanStateIdle: "Atingeți pentru a scana sacul"
  },
  hu: {
    tag: "Kettős Munkakörnyezet Szinergia",
    title1: "Egy Monorepo.",
    title2: "Két Testreszabott Élmény.",
    desc: "Mezőgazdasági munkakörnyezetünk az adminisztratív és a terepi környezetet is egyetlen egységes kódbázisból szolgálja ki. Ez garantálja a tökéletes adatellenőrzést.",
    btnWeb: "Vezetői Webes Alkalmazás",
    btnMobile: "Munkatársi Mobil Alkalmazás",
    webTitle1: "Irányítópult és Parancsnokság",
    webDesc1: "Tekintse át a talajkémiát, küldjön sürgős értesítéseket, kövesse nyomon a terméshozam-előrejelzést és a készletriasztásokat.",
    webTitle2: "Több Parcellás Telemetria Nézet",
    webDesc2: "Valós idejű környezeti adatok (talajhőmérséklet, savasság, nedvesség) összesítése színkódolt figyelmeztetésekkel.",
    webTitle3: "Audit Napló Diszpécser",
    webDesc3: "Feladatok meghatározása és átruházása egy tiszta munkafolyamat-felületen. Automatikus szerviz frissítések a visszajelzések alapján.",
    mobTitle1: "Offline SQLite Szinkronizáló",
    mobDesc1: "Rögzítse a telemetriát és jelölje be a feladatokat térerő nélküli területeken is. Automatikus szinkronizálás a hálózat elérésekor.",
    mobTitle2: "Azonnali Vonalkód Szkennelés",
    mobDesc2: "Irányítsa a kamerát az műtrágyás zsákokra. Csökkentse a készletmennyiséget manuális gépelés nélkül.",
    mobTitle3: "Élő Értesítési Csatorna",
    mobDesc3: "Helyi értesítések fogadása a talaj anomáliáiról. Fényképes igazolás csatolása az öntözőrendszer szivárgásáról.",
    chromeUrl: "farming-management.org/analytics/north-plot",
    modeManager: "Vezetői Mód",
    kpiTag: "Betakarítási KPI",
    kpiTitle: "Talajnedvesség Trend",
    kpiCritical: "Kritikusan alacsony: 30% VWC",
    kpiCurrent: "Jelenlegi állapot: Optimális (42.5%)",
    totalAcreage: "Összes Terület",
    totalAcreageValue: "1,420 Hektár",
    totalAcreageDesc: "4 parcella monitorozva",
    activeWorkers: "Aktív Munkatársak",
    activeWorkersValue: "8 Regisztrálva",
    activeWorkersDesc: "GPS check-in szinkronizálva",
    appTitle: "Munkatársi Mobil App",
    syncBtnOnline: "FELHŐ SZINKRON",
    syncBtnOffline: "OFFLINE PUFFER",
    sqliteNet: "SQLite / Helyi Állapot",
    sqliteActive: "✓ Telemetria változások feltöltve",
    sqliteCached: "⚠️ 1 tranzakció pufferelve",
    stockBarcode: "Vonalkód Szkenner",
    scanStateInit: "Kamera inicializálása...",
    scanStateSuccess: "Sikeres szkennelés",
    scanStateDeducted: "Levonva 25kg a raktárból",
    scanStateIdle: "Koppintson a zsák szkenneléséhez"
  },
  bg: {
    tag: "Синергия между Две Работни Пространства",
    title1: "Едно хранилище.",
    title2: "Две персонализирани приложения.",
    desc: "Нашата система обслужва както администраторите, така и полевите работници от един уеднаквен код. Това гарантира незабавна валидация на данните.",
    btnWeb: "Уеб Приложение на Мениджъра",
    btnMobile: "Мобилно Приложение на Работника",
    webTitle1: "Командно Табло на Мениджъра",
    webDesc1: "Преглеждайте химичния състав на почвата, изпращайте известия, следете прогнозата за добивите и наличностите.",
    webTitle2: "Телеметрия за Множество Парцели",
    webDesc2: "Обобщавайте екологични данни в реално време (температура, киселинност, влажност) с цветни кодове за предупреждение.",
    webTitle3: "Диспечер за Одит и Задачи",
    webDesc3: "Дефинирайте задачи в лесен интерфейс. Автоматично обновяване на сервизните интервали при отмяна от работник.",
    mobTitle1: "Офлайн Синхронизация със SQLite",
    mobDesc1: "Продължавайте да въвеждате данни без покритие на мрежата. Автоматичен синк при връзка с интернет.",
    mobTitle2: "Бързо Сканиране на Баркод с Камера",
    mobDesc2: "Насочете камерата към чувалите с торове. Намалете количеството в склада без ръчно писане.",
    mobTitle3: "Известия за Работника на Живо",
    mobDesc3: "Получавайте известия за аномалии в почвата по сектори. Прикачвайте снимки на напоителни проблеми.",
    chromeUrl: "farming-management.org/analytics/north-plot",
    modeManager: "Режим Мениджър",
    kpiTag: "KPI Прогноза за Добив",
    kpiTitle: "Тренд на Влажност на Почвата",
    kpiCritical: "Критично ниско: 30% VWC",
    kpiCurrent: "Текущо състояние: Оптимално (42.5%)",
    totalAcreage: "Обща Площ",
    totalAcreageValue: "1,420 Акра",
    totalAcreageDesc: "4 парцела се наблюдават",
    activeWorkers: "Активни Работници",
    activeWorkersValue: "8 Регистрирани",
    activeWorkersDesc: "GPS локации синхронизирани",
    appTitle: "Работно Приложение",
    syncBtnOnline: "ОБЛАК СИНК",
    syncBtnOffline: "ОФЛАЙН БУФЕР",
    sqliteNet: "SQLite / Локално състояние",
    sqliteActive: "✓ Промените в телеметрията са качени",
    sqliteCached: "⚠️ 1 транзакция е кеширана локално",
    stockBarcode: "Баркод Скенер за Склад",
    scanStateInit: "Иницииране на камерата...",
    scanStateSuccess: "Успешно Сканиране",
    scanStateDeducted: "Извадени 25 кг от склада",
    scanStateIdle: "Докоснете, за да сканирате чувал"
  },
  fr: {
    tag: "Synergie de Double Espace de Travail",
    title1: "Un seul monorepo.",
    title2: "Deux expériences sur mesure.",
    desc: "Notre espace de travail dessert à la fois l'administration et le terrain à partir d'une base de code unifiée, garantissant une validation des données irréprochable sans latence.",
    btnWeb: "App Web Manager",
    btnMobile: "App Mobile Ouvrier",
    webTitle1: "Tableau de Bord de Commandement",
    webDesc1: "Examinez la chimie du sol, envoyez des notifications urgentes aux ouvriers, suivez les prévisions de récolte et les alertes de réapprovisionnement.",
    webTitle2: "Télémetrie Multi-Parcelles",
    webDesc2: "Regroupez les flux de données environnementales en temps réel (température du sol, humidité, acidité) avec des indices d'avertissement.",
    webTitle3: "Planificateur de Tâches & Audit",
    webDesc3: "Définissez et déléguez des tâches sur une interface claire. Mettez à jour automatiquement les intervalles d'entretien.",
    mobTitle1: "Synchronisation SQLite Hors-Ligne",
    mobDesc1: "Enregistrez la télémétrie et terminez vos tâches même dans les zones sans réseau. Synchronisation automatique lors de la reconnexion.",
    mobTitle2: "Lecture de Code-Barres Instantanée",
    mobDesc2: "Visez les sacs d'engrais avec la caméra du smartphone pour déduire les quantités en stock instantanément sans clavier.",
    mobTitle3: "Canal de Notification Ouvrier",
    mobDesc3: "Recevez des alertes locales détaillant les anomalies du sol. Joignez des photos des fuites d'irrigation.",
    chromeUrl: "farming-management.org/analytics/north-plot",
    modeManager: "Mode Manager",
    kpiTag: "KPI Projection de Récolte",
    kpiTitle: "Tendance de l'Humidité du Sol",
    kpiCritical: "Seuil critique bas: 30% VWC",
    kpiCurrent: "Statut actuel: Optimal (42.5%)",
    totalAcreage: "Superficie Totale",
    totalAcreageValue: "1 420 Acres",
    totalAcreageDesc: "4 parcelles suivies",
    activeWorkers: "Ouvriers Actifs",
    activeWorkersValue: "8 Enrôlés",
    activeWorkersDesc: "Surcharges GPS synchronisées",
    appTitle: "App Ouvrier",
    syncBtnOnline: "SYNC CLOUD",
    syncBtnOffline: "BUFFER HORS-LIGNE",
    sqliteNet: "SQLite / État Local",
    sqliteActive: "✓ Télémétrie mise en ligne",
    sqliteCached: "⚠️ 1 transaction en cache local",
    stockBarcode: "Lecteur de Code-Barres",
    scanStateInit: "Initialisation de la caméra...",
    scanStateSuccess: "Lecture réussie",
    scanStateDeducted: "Soustrait 25kg du stock",
    scanStateIdle: "Appuyez pour scanner le sac"
  },
  de: {
    tag: "Duale Arbeitsbereich-Synergie",
    title1: "Ein Monorepo.",
    title2: "Zwei maßgeschneiderte Erlebnisse.",
    desc: "Unser landwirtschaftlicher Arbeitsbereich bedient sowohl administrative Aufgaben als auch die Arbeit auf dem Feld aus einer einzigen Codebasis.",
    btnWeb: "Manager-Web-App",
    btnMobile: "Arbeiter-Mobil-App",
    webTitle1: "Manager-Kommandozentrale",
    webDesc1: "Überprüfen Sie die Bodenchemie, versenden Sie dringende Benachrichtigungen und überwachen Sie Ernteprognosen sowie Lagerbestände.",
    webTitle2: "Multi-Parzellen-Telemetrieansicht",
    webDesc2: "Bündeln Sie Echtzeit-Umweltdaten (Bodentemperatur, Säuregehalt, Feuchtigkeit) mit farbcodierten Warnindizes.",
    webTitle3: "Prüfpfad-Disponent",
    webDesc3: "Definieren und delegieren Sie Aufgaben auf einer übersichtlichen Oberfläche. Automatische Wartungsaktualisierungen nach Erledigung.",
    mobTitle1: "Offline-SQLite-Synchronisierung",
    mobDesc1: "Erfassen Sie Telemetriedaten und haken Sie Aufgaben auch ohne Netzabdeckung ab. Automatische Synchronisierung bei Wiederverbindung.",
    mobTitle2: "Sofortiger Kamera-Barcodescan",
    mobDesc2: "Richten Sie die Smartphone-Kamera auf Düngemittelsäcke. Reduzieren Sie Bestände in Echtzeit ohne manuelle Eingabe.",
    mobTitle3: "Live-Arbeiter-Benachrichtigungen",
    mobDesc3: "Erhalten Sie lokale Push-Meldungen über Bodenanomalien. Fügen Sie Fotos von Bewässerungslecks direkt hinzu.",
    chromeUrl: "farming-management.org/analytics/north-plot",
    modeManager: "Manager-Modus",
    kpiTag: "Ernteprognose-KPI",
    kpiTitle: "Bodenfeuchtigkeitstrend",
    kpiCritical: "Kritischer Tiefstand: 30% VWC",
    kpiCurrent: "Aktueller Status: Optimal (42.5%)",
    totalAcreage: "Gesamtfläche",
    totalAcreageValue: "1.420 Acres",
    totalAcreageDesc: "4 Parzellen überwacht",
    activeWorkers: "Aktive Mitarbeiter",
    activeWorkersValue: "8 Registriert",
    activeWorkersDesc: "GPS Check-ins synchronisiert",
    appTitle: "Arbeiter-App",
    syncBtnOnline: "CLOUD SYNC",
    syncBtnOffline: "OFFLINE PUFFER",
    sqliteNet: "SQLite / Lokaler Status",
    sqliteActive: "✓ Telemetrie-Änderungen hochgeladen",
    sqliteCached: "⚠️ 1 Transaktion offline gespeichert",
    stockBarcode: "Barcode-Lagerscanner",
    scanStateInit: "Kamera wird gestartet...",
    scanStateSuccess: "Scan erfolgreich",
    scanStateDeducted: "25kg aus dem Lager abgezogen",
    scanStateIdle: "Tippen zum Scannen eines Sacks"
  }
};

export default function ExperienceSlider({ language = 'en' }: ExperienceSliderProps) {
  const [activeTab, setActiveTab] = useState<'web' | 'mobile'>('web');
  const [isMobileOnline, setIsMobileOnline] = useState(false);
  const [scannedCrop, setScannedCrop] = useState<string | null>(null);
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'success'>('idle');

  const t = expTrans[language] || expTrans.en;

  const simulateBarcodeScan = () => {
    setScanState('scanning');
    setScannedCrop(null);
    setTimeout(() => {
      setScanState('success');
      setScannedCrop(language === 'ro' ? 'Îngrășământ Clasa A (SKU-FERT-84)' : 'Fertilizer Grade-A (SKU-FERT-84)');
    }, 1200);
  };

  return (
    <div id="experience-slider" className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch my-16">
      {/* LEFT COLUMN: Synergy details */}
      <div className="lg:col-span-5 flex flex-col justify-center gap-6">
        <div>
          <span className="text-xs font-mono tracking-widest text-olive-medium font-bold uppercase block mb-1">{t.tag}</span>
          <h3 className="text-3xl sm:text-4xl font-display text-charcoal-olive tracking-tight leading-tight">
            {t.title1} <br />{t.title2}
          </h3>
          <p className="text-charcoal-olive/75 text-sm sm:text-base mt-4 leading-relaxed font-sans">
            {t.desc}
          </p>
        </div>

        {/* Toggle selectors with olive accents */}
        <div className="flex bg-cream-dark/40 p-1.5 rounded-2xl border border-border-warm gap-1">
          <button
            onClick={() => setActiveTab('web')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition ${
              activeTab === 'web'
                ? 'bg-olive-deep text-cream-light shadow-sm'
                : 'text-charcoal-olive/75 hover:text-charcoal-olive hover:bg-cream-dark/50'
            }`}
            id="btn-toggle-web"
          >
            <Laptop size={14} />
            {t.btnWeb}
          </button>
          <button
            onClick={() => setActiveTab('mobile')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition ${
              activeTab === 'mobile'
                ? 'bg-olive-deep text-cream-light shadow-sm'
                : 'text-charcoal-olive/75 hover:text-charcoal-olive hover:bg-cream-dark/50'
            }`}
            id="btn-toggle-mobile"
          >
            <Smartphone size={14} />
            {t.btnMobile}
          </button>
        </div>

        {/* Dynamic feature bullet points in warm palette */}
        <div className="space-y-4">
          {activeTab === 'web' ? (
            <div className="space-y-3.5 animate-fadeIn">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full border border-olive-sage text-olive-deep flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp size={12} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-charcoal-olive uppercase tracking-wider">{t.webTitle1}</h4>
                  <p className="text-xs text-charcoal-olive/70 mt-1 leading-relaxed">
                    {t.webDesc1}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full border border-olive-sage text-olive-deep flex items-center justify-center shrink-0 mt-0.5">
                  <Sprout size={12} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-charcoal-olive uppercase tracking-wider">{t.webTitle2}</h4>
                  <p className="text-xs text-charcoal-olive/70 mt-1 leading-relaxed">
                    {t.webDesc2}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full border border-olive-sage text-olive-deep flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={12} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-charcoal-olive uppercase tracking-wider">{t.webTitle3}</h4>
                  <p className="text-xs text-charcoal-olive/70 mt-1 leading-relaxed">
                    {t.webDesc3}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3.5 animate-fadeIn">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full border border-olive-sage text-olive-deep flex items-center justify-center shrink-0 mt-0.5">
                  <WifiOff size={12} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-charcoal-olive uppercase tracking-wider">{t.mobTitle1}</h4>
                  <p className="text-xs text-charcoal-olive/70 mt-1 leading-relaxed">
                    {t.mobDesc1}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full border border-olive-sage text-olive-deep flex items-center justify-center shrink-0 mt-0.5">
                  <QrCode size={12} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-charcoal-olive uppercase tracking-wider">{t.mobTitle2}</h4>
                  <p className="text-xs text-charcoal-olive/70 mt-1 leading-relaxed">
                    {t.mobDesc2}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full border border-olive-sage text-olive-deep flex items-center justify-center shrink-0 mt-0.5">
                  <SmartphoneNfc size={12} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-charcoal-olive uppercase tracking-wider">{t.mobTitle3}</h4>
                  <p className="text-xs text-charcoal-olive/70 mt-1 leading-relaxed">
                    {t.mobDesc3}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT COLUMN: Premium visual presentations */}
      <div className="lg:col-span-7 flex items-center justify-center bg-cream-rich/50 border border-border-warm rounded-3xl p-6 relative overflow-hidden">
        {activeTab === 'web' ? (
          /* Web App Dashboard Preview - Editorial Warm Design */
          <div className="w-full bg-cream-light border border-border-warm rounded-2xl shadow-md p-4 sm:p-5 relative animate-fadeIn">
            {/* Header / Chrome Menu */}
            <div className="flex items-center justify-between border-b border-border-warm/60 pb-3 mb-4 text-[10px] font-mono text-charcoal-olive/60">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-terracotta/40"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-olive-sage/40"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-olive-deep/40"></span>
                <span className="ml-2">{t.chromeUrl}</span>
              </div>
              <span className="bg-cream-rich px-2 py-0.5 rounded border border-border-warm text-[9px] font-bold">{t.modeManager}</span>
            </div>

            {/* Dashboard Mock */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-7 bg-cream-rich/30 border border-border-warm rounded-xl p-3 flex flex-col justify-between h-36">
                <div>
                  <span className="text-[9px] font-mono text-olive-medium font-bold block uppercase">{t.kpiTag}</span>
                  <h4 className="text-xs font-bold text-charcoal-olive mt-0.5">{t.kpiTitle}</h4>
                </div>
                {/* Micro Chart representation */}
                <div className="h-10 w-full flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M 0 18 Q 20 5 40 10 T 80 2 T 100 6 L 100 20 L 0 20 Z" fill="#7D8C61" fillOpacity="0.1" />
                    <path d="M 0 18 Q 20 5 40 10 T 80 2 T 100 6" fill="none" stroke="#4A5833" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="flex justify-between items-center text-[9px] font-mono text-charcoal-olive/75 border-t border-border-warm/40 pt-1">
                  <span>{t.kpiCritical}</span>
                  <span className="text-olive-deep font-bold">{t.kpiCurrent}</span>
                </div>
              </div>

              <div className="md:col-span-5 flex flex-col gap-3">
                <div className="bg-cream-rich/30 border border-border-warm rounded-xl p-3 h-[4.25rem] flex flex-col justify-between">
                  <span className="text-[9px] font-mono text-olive-medium font-bold block uppercase">{t.totalAcreage}</span>
                  <span className="text-xl font-serif text-charcoal-olive">{t.totalAcreageValue}</span>
                  <span className="text-[8px] text-charcoal-olive/50 block">{t.totalAcreageDesc}</span>
                </div>
                <div className="bg-cream-rich/30 border border-border-warm rounded-xl p-3 h-[4.25rem] flex flex-col justify-between">
                  <span className="text-[9px] font-mono text-olive-medium font-bold block uppercase">{t.activeWorkers}</span>
                  <span className="text-xl font-serif text-charcoal-olive">{t.activeWorkersValue}</span>
                  <span className="text-[8px] text-charcoal-olive/50 block">{t.activeWorkersDesc}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Mobile App Simulator Mock - Smartphone Frame */
          <div className="w-[260px] bg-cream-light border-[6px] border-charcoal-olive rounded-[36px] shadow-lg p-4 relative animate-fadeIn overflow-hidden">
            {/* Speaker notch */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-charcoal-olive rounded-full flex items-center justify-center">
              <span className="w-6 h-1 bg-cream-dark/60 rounded-full"></span>
            </div>

            {/* Simulated UI */}
            <div className="pt-4 flex flex-col gap-3.5">
              <div className="flex items-center justify-between mt-2">
                <span className="font-serif text-xs font-bold text-charcoal-olive">{t.appTitle}</span>
                <button
                  onClick={() => setIsMobileOnline(!isMobileOnline)}
                  className={`flex items-center gap-1.5 px-2 py-0.5 rounded-lg border text-[8px] font-mono font-bold transition ${
                    isMobileOnline
                      ? 'bg-olive-moss/20 border-olive-sage text-olive-deep'
                      : 'bg-terracotta/10 border-terracotta/30 text-terracotta'
                  }`}
                  id="btn-offline-simulator"
                >
                  {isMobileOnline ? <Wifi size={8} /> : <WifiOff size={8} />}
                  {isMobileOnline ? t.syncBtnOnline : t.syncBtnOffline}
                </button>
              </div>

              {/* Local database card */}
              <div className="bg-cream-rich border border-border-warm p-2.5 rounded-xl text-[10px]">
                <div className="flex items-center justify-between font-mono text-[9px] text-olive-medium font-bold mb-1">
                  <span>{t.sqliteNet}</span>
                  <span>{isMobileOnline ? 'Connected' : 'Saving locally'}</span>
                </div>
                <span className="text-charcoal-olive/70 block">
                  {isMobileOnline ? t.sqliteActive : t.sqliteCached}
                </span>
              </div>

              {/* Barcode scan preview */}
              <div className="bg-cream-rich border border-border-warm rounded-xl p-2.5">
                <span className="text-[10px] font-bold text-charcoal-olive block mb-1">{t.stockBarcode}</span>
                
                <div className="aspect-video bg-charcoal-olive rounded-lg flex flex-col items-center justify-center text-center p-2 relative overflow-hidden">
                  {scanState === 'scanning' ? (
                    <div className="text-cream-light text-[9px] font-mono animate-pulse">
                      <QrCode size={20} className="mx-auto mb-1 animate-spin-slow" />
                      {t.scanStateInit}
                    </div>
                  ) : scanState === 'success' ? (
                    <div className="text-cream-light text-[9px]">
                      <CheckCircle size={14} className="text-olive-moss mx-auto mb-1" />
                      <span className="font-bold block truncate max-w-[150px]">{scannedCrop}</span>
                      <span className="text-[8px] text-cream-dark block mt-1">{t.scanStateDeducted}</span>
                    </div>
                  ) : (
                    <button
                      onClick={simulateBarcodeScan}
                      className="text-cream-dark hover:text-cream-light text-[9px] transition flex flex-col items-center justify-center"
                      id="btn-start-barcode-scan"
                    >
                      <QrCode size={20} className="text-olive-sage mb-1" />
                      {t.scanStateIdle}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
