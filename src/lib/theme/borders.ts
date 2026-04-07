import { mixins } from 'theme/mixins';
import { common } from 'theme/palette';

const colorMixins = mixins();

type BorderValue = string;

export const borders: Record<string, BorderValue> = {
    divider: `1px solid ${colorMixins.Black(200)}`,
    collageBorder: `40px solid ${colorMixins.White()}`,
    tab: `4px solid ${colorMixins.AbuDhabiOrange()}`,
    fieldBorder: `1px solid ${colorMixins.Grey()}`,
    dropDownBorder: `1px solid ${colorMixins.Grey(400)}`,
    redBorder: `1px solid ${colorMixins.AbuDhabiOrange()}`,

    formCollectionMobile: `32px solid ${common.Sunrise}`,
    formCollectionDesktop: `46px solid ${common.Sunrise}`,

    categoryTagBorder: `1px solid ${common.CategortTagColor}`,
    categoryTagBorder0: `0px solid ${common.SeaPort}`,
    categoryTagBorderWhite: `1px solid ${colorMixins.White()}`,

    DarkTurquoiseBorder: `1px solid ${colorMixins.SeaGreen()}`,
    seaGreenBorder: `1px solid ${common.SeaGreen}`,
};