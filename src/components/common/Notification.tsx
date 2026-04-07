import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import ReduxTest from 'components/atoms/ReduxTest';
import { ComponentProps } from 'lib/component-props';
import { JSX } from 'react';

type NotificationProps = ComponentProps & {
  
};

const Notification = (_: NotificationProps): JSX.Element => (
  <div>
    <p>Notification Component</p>
    <ReduxTest/>
  </div>
);

export default withDatasourceCheck()<NotificationProps>(Notification);
