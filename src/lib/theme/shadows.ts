import { palette } from "theme/palette";

/**
 * Material Design / Custom shadow scale
 * Index 0 = 'none'
 * Higher indices = stronger shadows
 */
const shadows: string[] = [
    'none',
    `0px 2px 20px 0px ${palette.common.Black(80)}`,
    `0 4px 16px 0 ${palette.common.Black(80)}`,
    `inset 9px 0px 5px -5px ${palette.common.LightGrayCCC()}`,
    `0px 2px 20px 0px ${palette.common.Black(30)}`,
    `0px 2px 4px 0px ${palette.common.Black(50)}`,
    `0px 8px 28px 0px ${palette.common.DarkBlack(100)}`,
    `0px 4px 15px ${palette.common.Black(50)}`,
    `0px 0px 50px 0px ${palette.common.Black(300)}`,
] as const;

export default shadows;