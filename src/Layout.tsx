import { JSX } from 'react';
import Head from 'next/head';
import { Placeholder, LayoutServiceData, Field, HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Scripts from 'src/Scripts';
import { useI18n } from 'next-localization';

// Prefix public assets with a public URL to enable compatibility with Sitecore editors.
// If you're not supporting Sitecore editors, you can remove this.
const publicUrl = config.publicUrl;

interface LayoutProps {
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
}

interface RouteFields {
  [key: string]: unknown;
  pageTitle: Field;
}

const Layout = ({ layoutData, headLinks }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const { t } = useI18n();

  const fields = route?.fields as RouteFields;

  return (
    <>
      <Scripts />
      <Head>
        <title>{fields.pageTitle.value.toString() || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className="container">

        {/* Dictionary Check */}
        <div style={{ padding: '15px', background: '#e2f0d9', border: '1px solid #70ad47', margin: '15px 0', borderRadius: '5px' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#385723' }}>Verify Dictionary Output</h4>
          <div><strong>Key <code>ExploreNext</code>:</strong> {t('ExploreNext') || '(Not Found)'}</div>
          <div><strong>Current Locale:</strong> {layoutData.sitecore.context.language}</div>
          <div><strong>Current path:</strong> {layoutData.sitecore.route?.name}</div>
        </div>

        {route && <Placeholder name="vad-header" rendering={route} />}
        {route && <Placeholder name="vad-main" rendering={route} />}
        {route && <Placeholder name="vad-footer" rendering={route} />}
      </div>
    </>
  );
};

export default Layout;
