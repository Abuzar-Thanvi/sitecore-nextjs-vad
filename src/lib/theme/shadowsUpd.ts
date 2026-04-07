import { palette } from "theme/palette";

export const shadowsUpd = {
    /** Light shadow for raised surfaces (cards, buttons, etc.) */
    raised: `0px 4px 16px 0px ${palette.common.shadowsRgbaUpd}`,

    /** Stronger shadow for overlays, modals, dialogs */
    overlay: `0px 4px 64px 0px ${palette.common.shadowsRgbaUpd}`,
} as const;

export type ShadowsUpd = typeof shadowsUpd;