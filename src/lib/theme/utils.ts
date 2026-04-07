import { variantItemsAR } from './variants_ar';
import { variantItemsZH } from './variants_zh';
import { variantItemsKO } from './variants_ko';
import { variantItemsENUpd } from './variant_en_upd';
import { fontFamilyEN } from './font';
import { arabicLang, chineseLang, hebrewLang, koreanLang, englishLang } from './constants';

/**
 * You can tighten this type later if needed
 */
type VariantType = typeof variantItemsENUpd;
type FontFamilyType = typeof fontFamilyEN;

export function getVariant(selectedLang: string): VariantType {
    if (selectedLang === englishLang) {
        return variantItemsENUpd;
    } else if (selectedLang === arabicLang) {
        return variantItemsAR;
    } else if (
        selectedLang === chineseLang ||
        selectedLang === hebrewLang
    ) {
        return variantItemsZH;
    } else if (selectedLang === koreanLang) {
        return variantItemsKO;
    } else {
        return variantItemsENUpd;
    }
}

export function getFontFamily(selectedLang: string): FontFamilyType {
    return fontFamilyEN;
}