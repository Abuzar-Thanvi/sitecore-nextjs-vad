import buttons from './buttons';
import tabs from './tabs';

const overrides = (isRtl: boolean, selectedLang: string) => ({
  ...buttons(isRtl, selectedLang),
  ...tabs(),
});

export default overrides;