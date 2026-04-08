import chalk from 'chalk';
import generateAtomicComponentSrc from 'scripts/templates/component-src-atomic';
import { ScaffoldComponentPlugin, ScaffoldComponentPluginConfig } from '..';

const ATOMIC_DIRS: Record<string, string> = {
  atom: 'atoms',
  molecule: 'molecules',
  organism: 'organisms',
  common: 'common',
};

// These types are pure React — no Sitecore rendering/datasource props
const PURE_REACT_TYPES = new Set(['atom', 'molecule', 'organism']);

/**
 * Maps the --type flag to an atomic design directory.
 * Usage: jss scaffold <ComponentName> --type <atom|molecule|organism|common>
 */
class AtomicTypePlugin implements ScaffoldComponentPlugin {
  order = 5;

  exec(config: ScaffoldComponentPluginConfig): ScaffoldComponentPluginConfig {
    const typeIndex = config.args.indexOf('--type');
    if (typeIndex === -1) return config;

    const typeValue = config.args[typeIndex + 1];

    if (!typeValue || !ATOMIC_DIRS[typeValue]) {
      throw new Error(
        `Invalid --type value: "${typeValue ?? ''}". Must be one of: ${Object.keys(ATOMIC_DIRS).join(', ')}`
      );
    }

    if (config.componentPath) {
      console.log(
        chalk.yellow(
          `Warning: --type flag ignored because a path was already specified ("${config.componentPath}").`
        )
      );
      return config;
    }

    // Pure React types (atom/molecule/organism) use index.tsx — imported directly, not via Sitecore component registry.
    // Sitecore types (common) use ComponentName.tsx — JSS component builder discovers by filename stem, not folder name.
    const isPureReact = PURE_REACT_TYPES.has(typeValue);

    return {
      ...config,
      componentPath: `${ATOMIC_DIRS[typeValue]}/${config.componentName}/`,
      componentFilename: isPureReact ? 'index.tsx' : `${config.componentName}.tsx`,
      ...(isPureReact && {
        componentTemplateGenerator: generateAtomicComponentSrc,
      }),
    };
  }
}

export const atomicTypePlugin = new AtomicTypePlugin();
