/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  Mail, 
  Sprout, 
  User, 
  Building2,
  RefreshCw
} from 'lucide-react';
import { Language } from '../data/translations';

interface DemoFormProps {
  language?: Language;
}

const fTrans: Record<Language, {
  tag: string;
  title: string;
  subtitle: string;
  repNameLabel: string;
  repNamePlaceholder: string;
  farmNameLabel: string;
  farmNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  typeLabel: string;
  typeCrop: string;
  typeHort: string;
  typeApiculture: string;
  typeMixed: string;
  messageLabel: string;
  messagePlaceholder: string;
  btnSubmit: string;
  btnSubmitting: string;
  successTitle: string;
  successText: string;
  successBtn: string;
  errNameRequired: string;
  errFarmNameRequired: string;
  errEmailRequired: string;
  errEmailInvalid: string;
  errMessageRequired: string;
}> = {
  en: {
    tag: "Request Operational Assessment",
    title: "Schedule a Live Platform Demo",
    subtitle: "Sync your farm operations with our multi-tenant monorepo ecosystem. Complete the form to talk with our agricultural engineering coordinators.",
    repNameLabel: "Contact Representative Name *",
    repNamePlaceholder: "Julian Vance",
    farmNameLabel: "Farming Enterprise Name *",
    farmNamePlaceholder: "Vance Organic Orchards",
    emailLabel: "Corporate Email Address *",
    emailPlaceholder: "management@vancefarms.com",
    typeLabel: "Operational Agriculture Type",
    typeCrop: "Traditional Crop Farming (Wheat, Corn, Soy)",
    typeHort: "Premium Horticulture (Tomatoes, Strawberries, Berries)",
    typeApiculture: "Apiculture (Organic Honey Production)",
    typeMixed: "Mixed Agro-Farming & Livestock",
    messageLabel: "Operational Acreage & Goals *",
    messagePlaceholder: "E.g., 850 total acres of organic crops. We want to track soil temperature levels, manage equipment checkout logs, and sync inventory counts in the mobile client.",
    btnSubmit: "Secure Demo Request",
    btnSubmitting: "Validating Enterprise Records...",
    successTitle: "We Have Cultivated Your Request!",
    successText: "Thank you. Our support representative has successfully logged your details. A live sandbox workspace access token has been generated and dispatched to your email address.",
    successBtn: "Submit Another Request",
    errNameRequired: "Contact representative name is required",
    errFarmNameRequired: "Registered farming enterprise name is required",
    errEmailRequired: "Email address is required",
    errEmailInvalid: "Please provide a valid email address",
    errMessageRequired: "Please briefly outline your acreage and operational requirements"
  },
  ro: {
    tag: "Solicită Evaluarea Operațională",
    title: "Programează un Demo Live",
    subtitle: "Sincronizează operațiunile fermei tale cu ecosistemul nostru unificat. Completează formularul pentru a discuta cu coordonatorii noștri.",
    repNameLabel: "Nume Reprezentant de Contact *",
    repNamePlaceholder: "Julian Vance",
    farmNameLabel: "Numele Întreprinderii Agricole *",
    farmNamePlaceholder: "Livezile Organice Vance",
    emailLabel: "Adresă de Email Corporativă *",
    emailPlaceholder: "management@vancefarms.com",
    typeLabel: "Tipul de Agricultură Practicat",
    typeCrop: "Cultură de Câmp Tradițională (Grâu, Porumb, Soia)",
    typeHort: "Horticultură Premium (Roșii, Căpșuni, Fructe de pădure)",
    typeApiculture: "Apicultură (Producție de Miere Organică)",
    typeMixed: "Agromixte & Creșterea Animalelor",
    messageLabel: "Suprafață Operațională & Obiective *",
    messagePlaceholder: "De ex., 850 de hectare de culturi organice. Dorim să urmărim temperatura solului, să gestionăm utilajele și să sincronizăm stocurile pe mobil.",
    btnSubmit: "Trimite Solicitarea Demo",
    btnSubmitting: "Se validează datele întreprinderii...",
    successTitle: "Am cultivat solicitarea dvs.!",
    successText: "Vă mulțumim. Reprezentantul nostru de asistență v-a înregistrat detaliile cu succes. Un token de acces a fost generat și trimis pe email.",
    successBtn: "Trimite o nouă solicitare",
    errNameRequired: "Numele reprezentantului este obligatoriu",
    errFarmNameRequired: "Numele întreprinderii agricole este obligatoriu",
    errEmailRequired: "Adresa de email este obligatorie",
    errEmailInvalid: "Vă rugăm să introduceți o adresă de email validă",
    errMessageRequired: "Vă rugăm să descrieți pe scurt suprafața și cerințele operaționale"
  },
  hu: {
    tag: "Működési Értékelés Kérése",
    title: "Ütemezzen be egy Élő Bemutatót",
    subtitle: "Szinkronizálja gazdaságának működését unifikált ökoszisztémánkkal. Töltse ki az űrlapot a mérnökeinkkel való kapcsolatfelvételhez.",
    repNameLabel: "Kapcsolattartó Képviselő Neve *",
    repNamePlaceholder: "Julian Vance",
    farmNameLabel: "Mezőgazdasági Vállalkozás Neve *",
    farmNamePlaceholder: "Vance Organikus Gyümölcsösök",
    emailLabel: "Céges E-mail Cím *",
    emailPlaceholder: "management@vancefarms.com",
    typeLabel: "Működési Mezőgazdaság Típusa",
    typeCrop: "Hagyományos Növénytermesztés (Búza, Kukorica, Szója)",
    typeHort: "Prémium Kertészet (Paradicsom, Eper, Bogyósok)",
    typeApiculture: "Méhészet (Organikus Méztermelés)",
    typeMixed: "Vegyes Agronómia és Állattenyésztés",
    messageLabel: "Működési Terület és Célok *",
    messagePlaceholder: "Pl. 850 hektár organikus növénytermesztés. Szeretnénk nyomon követni a talaj hőmérsékletét, kezelni a gépeket és szinkronizálni a készletet.",
    btnSubmit: "Biztonságos Bemutató Kérése",
    btnSubmitting: "Vállalati adatok ellenőrzése...",
    successTitle: "Kérését sikeresen rögzítettük!",
    successText: "Köszönjük. Ügyfélszolgálatunk sikeresen rögzítette adatait. Egy élő sandbox tesztkörnyezet hozzáférési tokent generáltunk és elküldtük az e-mail címére.",
    successBtn: "Új kérés benyújtása",
    errNameRequired: "Kapcsolattartó nevének megadása kötelező",
    errFarmNameRequired: "Mezőgazdasági vállalkozás nevének megadása kötelező",
    errEmailRequired: "E-mail cím megadása kötelező",
    errEmailInvalid: "Kérjük, adjon meg egy érvényes e-mail címet",
    errMessageRequired: "Kérjük, röviden vázolja fel a területet és a működési követelményeket"
  },
  bg: {
    tag: "Заявка за Оперативна Оценка",
    title: "Планирайте Демонстрация на Живо",
    subtitle: "Синхронизирайте фермата си с нашата единна екосистема. Попълнете формата, за да се свържете с нашите агроинженери.",
    repNameLabel: "Име на Представител за Контакт *",
    repNamePlaceholder: "Юлиан Ванс",
    farmNameLabel: "Име на Земеделското Предприятие *",
    farmNamePlaceholder: "Органични Овощни Градини Ванс",
    emailLabel: "Корпоративен Имейл Адрес *",
    emailPlaceholder: "management@vancefarms.com",
    typeLabel: "Тип Селско Стопанство",
    typeCrop: "Традиционно Земеделие (Пшеница, Царевица, Соя)",
    typeHort: "Премиум Овощарство и Зеленчукопроизводство",
    typeApiculture: "Пчеларство (Производство на Био Мед)",
    typeMixed: "Смесено Земеделие и Животновъдство",
    messageLabel: "Оперативна Площ и Цели *",
    messagePlaceholder: "Напр. 850 хектара био култури. Искаме да проследяваме температурата на почвата, да управляваме машините и да синхронизираме наличностите.",
    btnSubmit: "Изпрати Заявка за Демо",
    btnSubmitting: "Проверка на фирмените данни...",
    successTitle: "Заявката Ви е Приета!",
    successText: "Благодарим Ви. Наш сътрудник регистрира Вашите детайли успешно. Токен за достъп беше генериран и изпратен на имейла Ви.",
    successBtn: "Изпрати Нова Заявка",
    errNameRequired: "Името на представителя е задължително",
    errFarmNameRequired: "Името на предприятието е задължително",
    errEmailRequired: "Имейл адресът е задължителен",
    errEmailInvalid: "Моля, въведете валиден имейл адрес",
    errMessageRequired: "Моля, опишете накратко Вашата площ и изисквания"
  },
  fr: {
    tag: "Demande d'Évaluation Opérationnelle",
    title: "Planifier une Démo en Direct",
    subtitle: "Synchronisez vos opérations agricoles avec notre écosystème monorepo multi-locataire. Remplissez le formulaire pour parler avec nos coordinateurs.",
    repNameLabel: "Nom du Représentant *",
    repNamePlaceholder: "Julian Vance",
    farmNameLabel: "Nom de l'Exploitation Agricole *",
    farmNamePlaceholder: "Vergers Biologiques Vance",
    emailLabel: "Adresse E-mail Professionnelle *",
    emailPlaceholder: "management@vancefarms.com",
    typeLabel: "Type d'Agriculture Opérationnelle",
    typeCrop: "Grandes Cultures Traditionnelles (Blé, Maïs, Soja)",
    typeHort: "Horticulture Premium (Tomates, Fraises, Baies)",
    typeApiculture: "Apiculture (Production de Miel Biologique)",
    typeMixed: "Agronomie Mixte & Élevage",
    messageLabel: "Superficie Opérationnelle & Objectifs *",
    messagePlaceholder: "Ex. 850 hectares de cultures biologiques. Nous voulons suivre la température du sol, gérer les équipements et synchroniser les stocks sur mobile.",
    btnSubmit: "Demander une Démo Sécurisée",
    btnSubmitting: "Validation des données de l'entreprise...",
    successTitle: "Votre Demande a été Cultivée !",
    successText: "Merci. Notre représentant a enregistré vos informations avec succès. Un jeton d'accès au bac à sable a été généré et envoyé à votre e-mail.",
    successBtn: "Soumettre une autre demande",
    errNameRequired: "Le nom du représentant est obligatoire",
    errFarmNameRequired: "Le nom de l'exploitation est obligatoire",
    errEmailRequired: "L'adresse e-mail est obligatoire",
    errEmailInvalid: "Veuillez fournir une adresse e-mail valide",
    errMessageRequired: "Veuillez brièvement décrire votre superficie et vos besoins"
  },
  de: {
    tag: "Betriebliche Bewertung anfordern",
    title: "Planen Sie eine Live-Demo",
    subtitle: "Synchronisieren Sie Ihre landwirtschaftlichen Abläufe mit unserem einheitlichen Ökosystem. Füllen Sie das Formular aus, um mit unseren Koordinatoren zu sprechen.",
    repNameLabel: "Name des Ansprechpartners *",
    repNamePlaceholder: "Julian Vance",
    farmNameLabel: "Name des Landwirtschaftsbetriebs *",
    farmNamePlaceholder: "Vance Bio-Obsthöfe",
    emailLabel: "Geschäftliche E-Mail-Adresse *",
    emailPlaceholder: "management@vancefarms.com",
    typeLabel: "Betriebliche Landwirtschaftsart",
    typeCrop: "Ackerbau (Weizen, Mais, Soja)",
    typeHort: "Gartenbau (Tomaten, Erdbeeren, Beeren)",
    typeApiculture: "Imkerei (Bio-Honigproduktion)",
    typeMixed: "Gemischte Landwirtschaft & Viehzucht",
    messageLabel: "Betriebsfläche & Ziele *",
    messagePlaceholder: "Z.B. 850 Hektar ökologischer Anbau. Wir wollen die Bodentemperatur verfolgen, die Ausrüstung verwalten und die Bestände auf dem Smartphone synchronisieren.",
    btnSubmit: "Demo-Anfrage senden",
    btnSubmitting: "Validierung der Betriebsdaten...",
    successTitle: "Ihre Anfrage wurde kultiviert!",
    successText: "Vielen Dank. Unser Support-Mitarbeiter hat Ihre Daten erfolgreich erfasst. Ein Zugangsschlüssel für die Sandbox-Umgebung wurde generiert und an Ihre E-Mail gesendet.",
    successBtn: "Eine weitere Anfrage senden",
    errNameRequired: "Name des Ansprechpartners ist erforderlich",
    errFarmNameRequired: "Name des Landwirtschaftsbetriebs ist erforderlich",
    errEmailRequired: "E-Mail-Adresse ist erforderlich",
    errEmailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse an",
    errMessageRequired: "Bitte beschreiben Sie kurz Ihre Fläche und betrieblichen Anforderungen"
  }
};

export default function DemoForm({ language = 'en' }: DemoFormProps) {
  const t = fTrans[language] || fTrans.en;

  const [name, setName] = useState('');
  const [farmName, setFarmName] = useState('');
  const [email, setEmail] = useState('');
  const [farmType, setFarmType] = useState('Crop Farming');
  const [message, setMessage] = useState('');

  // Status flags
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = t.errNameRequired;
    if (!farmName.trim()) newErrors.farmName = t.errFarmNameRequired;
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = t.errEmailRequired;
    } else if (!emailRegex.test(email)) {
      newErrors.email = t.errEmailInvalid;
    }
    
    if (!message.trim()) newErrors.message = t.errMessageRequired;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API dispatching delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setName('');
    setFarmName('');
    setEmail('');
    setFarmType('Crop Farming');
    setMessage('');
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div id="demo-request-form" className="w-full max-w-xl mx-auto bg-cream-rich/50 border border-border-warm rounded-3xl p-6 sm:p-8 shadow-sm my-12 relative overflow-hidden">
      {/* Warm organic backgrounds */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-olive-sage/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="text-center mb-8">
        <span className="text-xs font-mono tracking-widest text-olive-medium font-bold uppercase block mb-1">{t.tag}</span>
        <h3 className="text-2xl sm:text-3xl font-display text-charcoal-olive tracking-tight">{t.title}</h3>
        <p className="text-charcoal-olive/75 text-xs sm:text-sm mt-2">
          {t.subtitle}
        </p>
      </div>

      {isSubmitted ? (
        <div className="bg-olive-moss/20 border border-olive-sage/30 rounded-2xl p-6 text-center animate-fadeIn">
          <div className="w-12 h-12 bg-olive-deep text-cream-light rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
            <CheckCircle2 size={24} />
          </div>
          <h4 className="text-lg font-serif text-charcoal-olive font-medium">{t.successTitle}</h4>
          <p className="text-xs text-charcoal-olive/80 mt-2 max-w-sm mx-auto leading-relaxed">
            {t.successText}
          </p>
          <button
            onClick={resetForm}
            className="mt-6 px-4 py-2 rounded-xl bg-olive-deep text-cream-light text-xs font-bold hover:bg-olive-dark transition duration-300"
            id="btn-form-reset-success"
          >
            {t.successBtn}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate id="form-agriculture-demo">
          
          {/* Name Field */}
          <div>
            <label htmlFor="input-name" className="text-xs text-charcoal-olive/80 font-bold block mb-1.5">
              {t.repNameLabel}
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-charcoal-olive/40 pointer-events-none">
                <User size={14} />
              </span>
              <input
                id="input-name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                }}
                placeholder={t.repNamePlaceholder}
                className={`w-full bg-cream-light border rounded-xl pl-10 pr-4 py-2.5 text-xs text-charcoal-olive focus:outline-none focus:border-olive-deep ${
                  errors.name ? 'border-terracotta focus:border-terracotta' : 'border-border-warm'
                }`}
              />
            </div>
            {errors.name && (
              <span className="text-[10px] text-terracotta flex items-center gap-1.5 mt-1 animate-fadeIn">
                <AlertCircle size={10} />
                {errors.name}
              </span>
            )}
          </div>

          {/* Farm Name Field */}
          <div>
            <label htmlFor="input-farm-name" className="text-xs text-charcoal-olive/80 font-bold block mb-1.5">
              {t.farmNameLabel}
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-charcoal-olive/40 pointer-events-none">
                <Building2 size={14} />
              </span>
              <input
                id="input-farm-name"
                type="text"
                value={farmName}
                onChange={(e) => {
                  setFarmName(e.target.value);
                  if (errors.farmName) setErrors(prev => ({ ...prev, farmName: '' }));
                }}
                placeholder={t.farmNamePlaceholder}
                className={`w-full bg-cream-light border rounded-xl pl-10 pr-4 py-2.5 text-xs text-charcoal-olive focus:outline-none focus:border-olive-deep ${
                  errors.farmName ? 'border-terracotta focus:border-terracotta' : 'border-border-warm'
                }`}
              />
            </div>
            {errors.farmName && (
              <span className="text-[10px] text-terracotta flex items-center gap-1.5 mt-1 animate-fadeIn">
                <AlertCircle size={10} />
                {errors.farmName}
              </span>
            )}
          </div>

          {/* Corporate Email Field */}
          <div>
            <label htmlFor="input-email" className="text-xs text-charcoal-olive/80 font-bold block mb-1.5">
              {t.emailLabel}
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-charcoal-olive/40 pointer-events-none">
                <Mail size={14} />
              </span>
              <input
                id="input-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                }}
                placeholder={t.emailPlaceholder}
                className={`w-full bg-cream-light border rounded-xl pl-10 pr-4 py-2.5 text-xs text-charcoal-olive focus:outline-none focus:border-olive-deep ${
                  errors.email ? 'border-terracotta focus:border-terracotta' : 'border-border-warm'
                }`}
              />
            </div>
            {errors.email && (
              <span className="text-[10px] text-terracotta flex items-center gap-1.5 mt-1 animate-fadeIn">
                <AlertCircle size={10} />
                {errors.email}
              </span>
            )}
          </div>

          {/* Farm Type Selector */}
          <div>
            <label htmlFor="input-farm-type" className="text-xs text-charcoal-olive/80 font-bold block mb-1.5">
              {t.typeLabel}
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-charcoal-olive/40 pointer-events-none">
                <Sprout size={14} />
              </span>
              <select
                id="input-farm-type"
                value={farmType}
                onChange={(e) => setFarmType(e.target.value)}
                className="w-full bg-cream-light border border-border-warm rounded-xl pl-10 pr-4 py-2.5 text-xs text-charcoal-olive focus:outline-none focus:border-olive-deep appearance-none"
              >
                <option value="Crop Farming">{t.typeCrop}</option>
                <option value="Horticulture">{t.typeHort}</option>
                <option value="Apiculture">{t.typeApiculture}</option>
                <option value="Mixed Agronomy">{t.typeMixed}</option>
              </select>
            </div>
          </div>

          {/* Message / Operational Requirements Field */}
          <div>
            <label htmlFor="input-message" className="text-xs text-charcoal-olive/80 font-bold block mb-1.5">
              {t.messageLabel}
            </label>
            <textarea
              id="input-message"
              rows={3}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) setErrors(prev => ({ ...prev, message: '' }));
              }}
              placeholder={t.messagePlaceholder}
              className={`w-full bg-cream-light border rounded-xl p-3.5 text-xs text-charcoal-olive focus:outline-none focus:border-olive-deep resize-none ${
                errors.message ? 'border-terracotta focus:border-terracotta' : 'border-border-warm'
              }`}
            />
            {errors.message && (
              <span className="text-[10px] text-terracotta flex items-center gap-1.5 mt-1 animate-fadeIn">
                <AlertCircle size={10} />
                {errors.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            id="btn-submit-demo"
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-olive-deep text-cream-light font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-olive-dark transition duration-300 disabled:opacity-50 mt-2 active:scale-98 shadow-sm hover:shadow-md"
          >
            {isSubmitting ? (
              <>
                <RefreshCw size={14} className="animate-spin" />
                {t.btnSubmitting}
              </>
            ) : (
              <>
                <Send size={14} />
                {t.btnSubmit}
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
