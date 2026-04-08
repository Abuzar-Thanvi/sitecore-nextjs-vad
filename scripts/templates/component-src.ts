/**
 * Generates React boilerplate for a component under `src/components`
 * @param componentName - the component name
 * @returns component src boilerplate as a string
 */
function generateComponentSrc(componentName: string): string {
  return `import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { JSX } from 'react';

type ${componentName}Props = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const ${componentName} = (_: ${componentName}Props): JSX.Element => {
  return (
    <div>
      <p>${componentName} Component</p>
    </div>
  )
};

export default withDatasourceCheck()<${componentName}Props>(${componentName});
`;
}

export default generateComponentSrc;
