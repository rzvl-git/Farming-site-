export type Language = 'en' | 'ro' | 'hu' | 'bg' | 'fr' | 'de';

export interface TranslationSet {
  navFeatures: string;
  navWebVsMobile: string;
  navPricing: string;
  navCta: string;
  
  heroTitle: string;
  heroTitleSerif: string;
  heroTitleEnd: string;
  heroSubtitle: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  
  pricingTitle: string;
  pricingSubtitle: string;
  pricingStarter: string;
  pricingStarterDesc: string;
  pricingPro: string;
  pricingProDesc: string;
  pricingEnt: string;
  pricingEntDesc: string;
  pricingGetStarted: string;
  pricingCustom: string;
  pricingMonth: string;
  
  tailoredDeployments: string;
  mostPopular: string;
  pricingStarterFeats: string[];
  pricingProFeats: string[];
  pricingEntFeats: string[];
  
  selectLanguageTitle: string;
  selectLanguageSubtitle: string;
  confirmLanguage: string;
}

export const translations: Record<Language, TranslationSet> = {
  en: {
    navFeatures: "Features",
    navWebVsMobile: "Web vs Mobile",
    navPricing: "Pricing",
    navCta: "Request Live Demo",
    
    heroTitle: "Precision Farming",
    heroTitleSerif: "Management,",
    heroTitleEnd: "Cultivated with Care.",
    heroSubtitle: "Bridging the gap between farm managers and field operations. Empower your team with real-time web dashboards, offline-capable mobile tracking, and automated machinery alerts—all wrapped in a clean, unified platform.",
    heroCtaPrimary: "Schedule Demo",
    heroCtaSecondary: "Explore Plans",
    
    pricingTitle: "Enterprise Pricing Tiers",
    pricingSubtitle: "We offer flexible, tier-based seats configured perfectly for mixed farms, horticulture properties, and apiculture operations.",
    pricingStarter: "Starter",
    pricingStarterDesc: "Ideal for local family farms seeking core digital scheduling and manual logs.",
    pricingPro: "Professional",
    pricingProDesc: "Optimized for commercial farm operations requiring automated alarms & full reports.",
    pricingEnt: "Enterprise",
    pricingEntDesc: "For corporate multi-site farming operations seeking secure, bespoke configurations.",
    pricingGetStarted: "Get Started",
    pricingCustom: "Custom",
    pricingMonth: "/ month",
    
    tailoredDeployments: "Tailored Deployments",
    mostPopular: "Most Popular",
    pricingStarterFeats: [
      "Up to 3 distinct plots tracked",
      "Max 5 field worker mobile seats",
      "Standard soil moisture logging inputs",
      "Local SQLite offline caching",
      "Next-day email client support",
      "Shared cloud database hosting"
    ],
    pricingProFeats: [
      "Unlimited plots & regional sectors",
      "Unlimited field worker mobile seats",
      "Automatic IoT telemetry sensor hooks",
      "Real-time automated alarm routing",
      "Warehouse stock alerts (Terracotta rules)",
      "Machinery runtime service loggers",
      "Custom monthly harvest pricing reports",
      "Priority 4hr business hour support SLA"
    ],
    pricingEntFeats: [
      "Multi-facility aggregate dashboard console",
      "Dedicated secure PostgreSQL database",
      "Custom agricultural compliance audit logs",
      "Active Directory / SSO integrations",
      "Tailored telemetry API pipelines",
      "Dedicated 24/7 technical coordinator"
    ],
    
    selectLanguageTitle: "Select Your Language",
    selectLanguageSubtitle: "Choose your preferred language to customize your digital farm management platform experience.",
    confirmLanguage: "Confirm Selection"
  },
  ro: {
    navFeatures: "Funcționalități",
    navWebVsMobile: "Web vs Mobil",
    navPricing: "Prețuri",
    navCta: "Solicită Demo Live",
    
    heroTitle: "Agricultură de Precizie",
    heroTitleSerif: "Management,",
    heroTitleEnd: "Cultivat cu Grijă.",
    heroSubtitle: "Eliminarea decalajului dintre managerii de ferme și operațiunile de teren. Oferiți echipei dvs. tablouri de bord web în timp real, urmărire pe mobil offline și alerte automate pentru utilaje.",
    heroCtaPrimary: "Programează Demo",
    heroCtaSecondary: "Explorează Planuri",
    
    pricingTitle: "Abonamente de Întreprindere",
    pricingSubtitle: "Oferim planuri flexibile bazate pe niveluri, configurate perfect pentru ferme mixte, horticultură și apicultură.",
    pricingStarter: "Starter",
    pricingStarterDesc: "Ideal pentru ferme locale de familie care doresc planificare digitală de bază și jurnale manuale.",
    pricingPro: "Profesional",
    pricingProDesc: "Optimizat pentru operațiuni agricole comerciale care necesită alerte automate și rapoarte complete.",
    pricingEnt: "Enterprise",
    pricingEntDesc: "Pentru operațiuni agricole corporative cu mai multe locații, care doresc configurații sigure și personalizate.",
    pricingGetStarted: "Începe Acum",
    pricingCustom: "Personalizat",
    pricingMonth: "/ lună",
    
    tailoredDeployments: "Configurări Personalizate",
    mostPopular: "Cel Mai Popular",
    pricingStarterFeats: [
      "Până la 3 parcele distincte monitorizate",
      "Maximum 5 utilizatori mobili pentru lucrători",
      "Introducere standard a umidității solului",
      "Cache offline SQLite local",
      "Suport prin e-mail în următoarea zi lucrătoare",
      "Găzduire partajată a bazei de date în cloud"
    ],
    pricingProFeats: [
      "Parcele și sectoare regionale nelimitate",
      "Utilizatori mobili nelimitați pentru lucrători",
      "Conexiuni automate pentru senzori de telemetrie IoT",
      "Rutare automată în timp real a alertelor",
      "Alerte de stoc depozit (reguli Terracotta)",
      "Jurnale de service pentru orele de funcționare a utilajelor",
      "Rapoarte lunare personalizate de prețuri ale recoltelor",
      "Suport prioritar cu SLA de 4 ore în timpul programului"
    ],
    pricingEntFeats: [
      "Consolă centralizată pentru mai multe locații",
      "Bază de date securizată și dedicată PostgreSQL",
      "Jurnale de audit personalizate pentru conformitate agricolă",
      "Integrări Active Directory / SSO",
      "Fluxuri de date API personalizate pentru telemetrie",
      "Coordonator tehnic dedicat 24/7"
    ],
    
    selectLanguageTitle: "Selectează Limba",
    selectLanguageSubtitle: "Alege limba preferată pentru a personaliza experiența pe platforma digitală de management agricol.",
    confirmLanguage: "Confirmă Selecția"
  },
  hu: {
    navFeatures: "Funkciók",
    navWebVsMobile: "Web vs Mobil",
    navPricing: "Árak",
    navCta: "Kérjen Élő Bemutatót",
    
    heroTitle: "Precíziós Gazdálkodás",
    heroTitleSerif: "Menedzsment,",
    heroTitleEnd: "Gondoskodással Nevelve.",
    heroSubtitle: "Híd a gazdaságvezetők és a terepi műveletek között. Erősítse meg csapatát valós idejű webes irányítópultokkal, offline mobilkövetéssel és automatizált gépriasztásokkal.",
    heroCtaPrimary: "Bemutató Időzítése",
    heroCtaSecondary: "Csomagok Felfedezése",
    
    pricingTitle: "Vállalati Árképzés",
    pricingSubtitle: "Rugalmas, sávos licenceket kínálunk, amelyek tökéletesen alkalmasak vegyes gazdaságok, kertészetek és méhészetek számára.",
    pricingStarter: "Kezdő",
    pricingStarterDesc: "Ideális helyi családi gazdaságok számára, amelyek alapvető digitális ütemezést és kézi naplózást igényelnek.",
    pricingPro: "Professzionális",
    pricingProDesc: "Kereskedelmi mezőgazdasági műveletekre optimalizálva, automatikus riasztásokkal és teljes jelentésekkel.",
    pricingEnt: "Vállalati",
    pricingEntDesc: "Több telephelyes mezőgazdasági vállalatok számára, amelyek biztonságos, egyedi konfigurációt keresnek.",
    pricingGetStarted: "Kezdés",
    pricingCustom: "Egyedi",
    pricingMonth: "/ hónap",
    
    tailoredDeployments: "Személyre Szabott Rendszerek",
    mostPopular: "Legnépszerűbb",
    pricingStarterFeats: [
      "Akár 3 különálló parcella nyomon követése",
      "Legfeljebb 5 terepmunkás mobil hozzáférés",
      "Standard talajnedvesség-naplózási adatok",
      "Helyi offline SQLite gyorsítótárazás",
      "Következő napi e-mailes ügyfélszolgálat",
      "Megosztott felhőalapú adatbázis-gazdagép"
    ],
    pricingProFeats: [
      "Korlátlan parcella és regionális szektor",
      "Korlátlan terepmunkás mobil hozzáférés",
      "Automatikus IoT telemetriás szenzor kapcsolatok",
      "Valós idejű automatizált riasztásirányítás",
      "Raktári készletriasztások (Terracotta szabályok)",
      "Gépüzemidő karbantartás naplózás",
      "Egyedi havi betakarítási árazási jelentések",
      "Elsőbbségi 4 órás munkaidő támogatási SLA"
    ],
    pricingEntFeats: [
      "Több telephelyes összesített irányítópult konzol",
      "Dedikált, biztonságos PostgreSQL adatbázis",
      "Egyedi mezőgazdasági megfelelőségi audit naplók",
      "Active Directory / SSO integrációk",
      "Személyre szabott telemetriás API csatornák",
      "Dedikált 24/7 technikai koordinátor"
    ],
    
    selectLanguageTitle: "Válassz Nyelvet",
    selectLanguageSubtitle: "Válaszd ki a preferált nyelvet a digitális farmkezelő platform testreszabásához.",
    confirmLanguage: "Kiválasztás megerősítése"
  },
  bg: {
    navFeatures: "Функции",
    navWebVsMobile: "Уеб срещу Мобил",
    navPricing: "Цени",
    navCta: "Заявка за Демо на Живо",
    
    heroTitle: "Прецизно Земеделие",
    heroTitleSerif: "Управление,",
    heroTitleEnd: "Култивирано с Грижа.",
    heroSubtitle: "Свързване на фермерите и полевите операции. Дайте възможност на екипа си с уеб табла в реално време, офлайн мобилно проследяване и автоматични известия за машини.",
    heroCtaPrimary: "Планиране на Демо",
    heroCtaSecondary: "Разглеждане на Планове",
    
    pricingTitle: "Корпоративни Ценови Нива",
    pricingSubtitle: "Предлагаме гъвкави нива, конфигурирани перфектно за смесени ферми, градинарство и пчеларство.",
    pricingStarter: "Стартов",
    pricingStarterDesc: "Идеален за местни семейни ферми, търсещи основно цифрово планиране и ръчни дневници.",
    pricingPro: "Професионален",
    pricingProDesc: "Оптимизиран за търговски фермерски операции, изискващи автоматични аларми и пълни отчети.",
    pricingEnt: "Корпоративен",
    pricingEntDesc: "За корпоративни фермерски операции с множество обекти, търсещи сигурни, персонализирани конфигурации.",
    pricingGetStarted: "Започнете",
    pricingCustom: "По Договаряне",
    pricingMonth: "/ месец",
    
    tailoredDeployments: "Персонализирани Решения",
    mostPopular: "Най-Популярен",
    pricingStarterFeats: [
      "Проследяване на до 3 отделни парцела",
      "До 5 мобилни лиценза за полеви работници",
      "Стандартно въвеждане на данни за влажност на почвата",
      "Локално офлайн кеширане със SQLite",
      "Поддръжка по имейл на следващия ден",
      "Споделен хостинг на база данни в облака"
    ],
    pricingProFeats: [
      "Неограничен брой парцели и регионални сектори",
      "Неограничен брой мобилни лицензи за работници",
      "Автоматична връзка с IoT сензори за телеметрия",
      "Автоматично маршрутизиране на аларми в реално време",
      "Аларми за складови наличности (правила Terracotta)",
      "Сервизно вписване на работното време на машините",
      "Персонализирани месечни отчети за цените на реколтата",
      "Приоритетна поддръжка до 4 часа в рамките на работния ден"
    ],
    pricingEntFeats: [
      "Обобщена конзола за управление на множество обекти",
      "Специализирана защитена база данни PostgreSQL",
      "Персонализирани одиторски дневници за земеделско съответствие",
      "Интеграции с Active Directory / SSO",
      "Персонализирани API канали за телеметрия",
      "Специализиран денонощен технически координатор"
    ],
    
    selectLanguageTitle: "Изберете Вашия Език",
    selectLanguageSubtitle: "Изберете предпочитания от вас език, за да персонализирате работата си с платформата за управление на ферми.",
    confirmLanguage: "Потвърди Избора"
  },
  fr: {
    navFeatures: "Fonctionnalités",
    navWebVsMobile: "Web vs Mobile",
    navPricing: "Tarifs",
    navCta: "Demander une Démo",
    
    heroTitle: "Agriculture de Précision",
    heroTitleSerif: "Gestion,",
    heroTitleEnd: "Cultivée avec Soin.",
    heroSubtitle: "Combler le fossé entre les gestionnaires agricoles et les opérations sur le terrain. Donnez à vos équipes les moyens d'agir grâce à des tableaux de bord web en temps réel et un suivi mobile hors ligne.",
    heroCtaPrimary: "Planifier une Démo",
    heroCtaSecondary: "Découvrir les Offres",
    
    pricingTitle: "Grille Tarifaire Entreprise",
    pricingSubtitle: "Nous proposons des forfaits flexibles adaptés aux exploitations mixtes, à l'horticulture et à l'apiculture.",
    pricingStarter: "Débutant",
    pricingStarterDesc: "Idéal pour les fermes familiales locales recherchant une planification numérique de base.",
    pricingPro: "Professionnel",
    pricingProDesc: "Optimisé pour les exploitations commerciales nécessitant des alarmes automatisées et des rapports complets.",
    pricingEnt: "Entreprise",
    pricingEntDesc: "Pour les grandes exploitations multi-sites recherchant des configurations sur mesure et sécurisées.",
    pricingGetStarted: "Commencer",
    pricingCustom: "Sur mesure",
    pricingMonth: "/ mois",
    
    tailoredDeployments: "Déploiements sur Mesure",
    mostPopular: "Le Plus Populaire",
    pricingStarterFeats: [
      "Jusqu'à 3 parcelles distinctes suivies",
      "Max 5 accès mobiles pour les ouvriers",
      "Saisies standard de l'humidité du sol",
      "Mise en cache locale SQLite hors ligne",
      "Support client par e-mail sous 24 heures",
      "Hébergement partagé de base de données cloud"
    ],
    pricingProFeats: [
      "Parcelles et secteurs régionaux illimités",
      "Accès mobiles illimités pour les ouvriers",
      "Connexions automatiques de capteurs IoT",
      "Routage d'alertes automatisé en temps réel",
      "Alertes de stock d'entrepôt (règles Terracotta)",
      "Suivi d'entretien du temps de marche des machines",
      "Rapports mensuels personnalisés de valorisation",
      "SLA de support prioritaire en 4 heures ouvrées"
    ],
    pricingEntFeats: [
      "Console de tableau de bord agrégée multi-sites",
      "Base de données PostgreSQL sécurisée et dédiée",
      "Journaux d'audit de conformité agricole sur mesure",
      "Intégrations Active Directory / SSO",
      "Flux API de télémétrie personnalisés",
      "Coordonateur technique dédié disponible 24/7"
    ],
    
    selectLanguageTitle: "Choisissez votre langue",
    selectLanguageSubtitle: "Sélectionnez votre langue préférée pour personnaliser l'interface de votre plateforme de gestion agricole.",
    confirmLanguage: "Confirmer la Sélection"
  },
  de: {
    navFeatures: "Funktionen",
    navWebVsMobile: "Web vs Mobil",
    navPricing: "Preise",
    navCta: "Live-Demo anfordern",
    
    heroTitle: "Präzisionslandwirtschaft",
    heroTitleSerif: "Management,",
    heroTitleEnd: "mit Sorgfalt kultiviert.",
    heroSubtitle: "Schließen Sie die Lücke zwischen Betriebsleitern und Feldarbeitern. Nutzen Sie Echtzeit-Web-Dashboards, offline-fähige mobile Zeiterfassung und automatische Maschinenalarme.",
    heroCtaPrimary: "Demo vereinbaren",
    heroCtaSecondary: "Pläne ansehen",
    
    pricingTitle: "Preismodelle für Unternehmen",
    pricingSubtitle: "Wir bieten flexible, staffelbasierte Lizenzen, die perfekt auf Mischbetriebe, Gartenbau und Imkereien abgestimmt sind.",
    pricingStarter: "Einsteiger",
    pricingStarterDesc: "Ideal für lokale Familienbetriebe, die grundlegende digitale Planung und manuelle Protokolle suchen.",
    pricingPro: "Professionell",
    pricingProDesc: "Optimiert für kommerzielle Betriebe, die automatisierte Alarme und umfassende Berichte benötigen.",
    pricingEnt: "Unternehmen",
    pricingEntDesc: "Für landwirtschaftliche Großbetriebe mit mehreren Standorten, die maßgeschneiderte Setups suchen.",
    pricingGetStarted: "Jetzt starten",
    pricingCustom: "Individuell",
    pricingMonth: "/ Monat",
    
    tailoredDeployments: "Maßgeschneiderte Setups",
    mostPopular: "Sehr Beliebt",
    pricingStarterFeats: [
      "Bis zu 3 separate Parzellen überwacht",
      "Maximal 5 Mobil-Lizenzen für Feldarbeiter",
      "Standard-Eingaben für Bodenfeuchtigkeit",
      "Lokale SQLite-Offline-Zwischenspeicherung",
      "E-Mail-Support am nächsten Werktag",
      "Gemeinsames Cloud-Datenbank-Hosting"
    ],
    pricingProFeats: [
      "Unbegrenzte Parzellen & regionale Sektoren",
      "Unbegrenzte Mobil-Lizenzen für Feldarbeiter",
      "Automatische IoT-Telemetriesensor-Anbindungen",
      "Automatisierte Alarmweiterleitung in Echtzeit",
      "Lagerbestandsalarme (Terracotta-Regeln)",
      "Laufzeit-Service-Tracker für Maschinen",
      "Individuelle monatliche Erntewert-Berichte",
      "Priorisierter Support-SLA (4 Std. während der Arbeitszeit)"
    ],
    pricingEntFeats: [
      "Aggregierte Dashboard-Konsole für mehrere Betriebe",
      "Dedizierte, sichere PostgreSQL-Datenbank",
      "Individuelle Audit-Protokolle für landwirtschaftliche Vorschriften",
      "Active Directory / SSO-Integrationen",
      "Maßgeschneiderte Telemetrie-API-Schnittstellen",
      "Dedizierter technischer Koordinator rund um die Uhr (24/7)"
    ],
    
    selectLanguageTitle: "Sprache auswählen",
    selectLanguageSubtitle: "Wählen Sie Ihre bevorzugte Sprache, um das Erlebnis auf Ihrer digitalen Farm-Management-Plattform anzupassen.",
    confirmLanguage: "Auswahl bestätigen"
  }
};
