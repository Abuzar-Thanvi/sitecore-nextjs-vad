/**
 * Generates a plain React boilerplate for atomic components (atom, molecule, organism).
 * No Sitecore rendering or datasource props — these are pure presentational components.
 * @param componentName - the component name
 * @returns component src boilerplate as a string
 */
function generateAtomicComponentSrc(componentName: string): string {
  return `import { JSX } from 'react';

type ${componentName}Props = {
  // define props here
};

const ${componentName} = (_: ${componentName}Props): JSX.Element => {
  return (
    <div>
      <p>${componentName} Component</p>
    </div>
  )
};

export default ${componentName};
`;
}

export default generateAtomicComponentSrc;
