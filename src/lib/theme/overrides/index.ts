import buttons from 'theme/overrides/buttons';
import tabs from 'theme/overrides/tabs';

const overrides = (isRtl: boolean, selectedLang: string) => ({
  ...buttons(isRtl, selectedLang),
  ...tabs(),
});

export default overrides;