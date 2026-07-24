/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnimatePresence, motion } from 'motion/react';
import { Globe, Check } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface LanguageSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLanguage: Language;
  onSelectLanguage: (lang: Language) => void;
}

const availableLanguages: { code: Language; name: string; flag: string; locale: string }[] = [
  { code: 'ro', name: 'Română', flag: '🇷🇴', locale: 'România' },
  { code: 'en', name: 'English', flag: '🇬🇧', locale: 'United Kingdom / US' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺', locale: 'Magyarország' },
  { code: 'bg', name: 'Български', flag: '🇧🇬', locale: 'България' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', locale: 'France / Canada' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', locale: 'Deutschland / Österreich' },
];

export default function LanguageSelectorModal({
  isOpen,
  onClose,
  selectedLanguage,
  onSelectLanguage,
}: LanguageSelectorModalProps) {
  const text = translations[selectedLanguage];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Blur & Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal-olive/40 backdrop-blur-md"
            id="language-modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-md bg-cream-light border border-border-warm rounded-3xl shadow-xl overflow-hidden z-10 p-6 sm:p-8"
            id="language-modal-content"
          >
            {/* Header Icon */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-cream-rich border border-olive-deep/10 flex items-center justify-center text-olive-deep">
                <Globe size={20} className="animate-spin-slow" />
              </div>
              <div>
                <h3 className="font-display font-medium text-lg text-charcoal-olive">
                  {text.selectLanguageTitle}
                </h3>
                <p className="text-xs text-charcoal-olive/60 mt-0.5">
                  Farming Management App
                </p>
              </div>
            </div>

            <p className="text-xs text-charcoal-olive/75 leading-relaxed mb-6">
              {text.selectLanguageSubtitle}
            </p>

            {/* Language Grid List */}
            <div className="space-y-2.5 mb-8 max-h-[280px] overflow-y-auto pr-1.5 scrollbar-thin scrollbar-thumb-olive-deep/20 scrollbar-track-transparent" id="language-list-container">
              {availableLanguages.map((lang) => {
                const isSelected = selectedLanguage === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => onSelectLanguage(lang.code)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl transition duration-300 text-left border ${
                      isSelected
                        ? 'bg-cream-rich/80 border-olive-deep shadow-sm'
                        : 'bg-transparent border-border-warm hover:bg-cream-rich/30'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-2xl filter drop-shadow-sm select-none" role="img" aria-label={lang.name}>
                        {lang.flag}
                      </span>
                      <div>
                        <span className="text-xs font-semibold block text-charcoal-olive">
                          {lang.name}
                        </span>
                        <span className="text-[10px] font-mono text-charcoal-olive/50">
                          {lang.locale}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-olive-deep border-olive-deep text-cream-light'
                          : 'border-border-warm/80 bg-transparent'
                      }`}
                    >
                      {isSelected && <Check size={12} strokeWidth={3} />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2.5">
              <button
                onClick={onClose}
                className="w-full bg-olive-deep hover:bg-olive-dark text-cream-light text-xs font-bold py-3.5 rounded-2xl transition duration-300 shadow-sm hover:shadow-md text-center"
                id="confirm-language-btn"
              >
                {text.confirmLanguage}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
