import fs from 'fs';
import path from 'path';
import { constantCase } from 'constant-case';
import { JssConfig } from 'lib/config';
import { jssConfigFactory } from './config';

/*
  CONFIG GENERATION
  Generates the /src/temp/config.js file which contains runtime configuration
  that the app can import and use.
*/
const defaultConfig: JssConfig = {
  sitecoreApiKey: process.env[`${constantCase('sitecoreApiKey')}`],
  sitecoreApiHost: process.env[`${constantCase('sitecoreApiHost')}`],
  apiHost: process.env[`${constantCase('API_HOST')}`] || 'https://localhost:3000',
  widgetUrl: process.env[`${constantCase('WIDGET_PAGE_URL')}`] || '/where-to-go',
  flightSearch: process.env[`${constantCase('FLIGHT_SEARCH')}`] || 'http://flights.vadsc.in/{0}/flights/search/',
  hotelSearch: process.env[`${constantCase('HOTEL_SEARCH')}`] || 'https://hotels.vadsc.in/?a_aid=44509&brandid=560850',
  appInsightsInstrumentationKey: process.env[`${constantCase('APPINSIGHTS_INSTRUMENTATIONKEY')}`] || '3aa11bab-7f74-4f5f-b673-97b59fe3ce0a',
  appOrigin: process.env[`${constantCase('APP_ORIGIN')}`],
  SITECORE_API_KEY: process.env[`${constantCase('SITECORE_API_KEY')}`],
  GEO_JSON_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('GEO_JSON_API')}`]}`,
  MARINE_GEO_JSON_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('MARINE_GEO_JSON_API')}`]}`,
  MARINE_GET_OPERATORS_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('MARINE_GET_OPERATORS_API')}`]}`,
  LIVE_WEATHER_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('LIVE_WEATHER_API')}`]}`,
  EVENT_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('EVENT_API')}`]}`,
  AUTO_COMPLETE_WEGO: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('AUTO_COMPLETE_WEGO')}`]}`,
  AUTO_COMPLETE_TRAVEL_PAYOUT: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('AUTO_COMPLETE_TRAVEL_PAYOUT')}`]}`,
  SOLR_FILTERS_DATA: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('SOLR_FILTERS_DATA')}`]}`,
  ITINERARY_DATA_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('ITINERARY_DATA_API')}`]}`,
  SOLR_SEARCH_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('SOLR_SEARCH_API')}`]}`,
  SOLR_FAVORITE_SEARCH_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('SOLR_FAVORITE_SEARCH_API')}`]}`,
  SMART_LIST_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('SMART_LIST_API')}`]}`,
  MULTI_CARD_LIST_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('MULTI_CARD_LIST_API')}`]}`,
  RFP_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('RFP_API')}`]}`,
  RFP_API_VIRUS_CHECK: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('RFP_API_VIRUS_CHECK')}`]}`,
  COMPETITION_FORM_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('COMPETITION_FORM_API')}`]}`,
  FORM_SUBMISSION_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('FORM_SUBMISSION_API')}`]}`,
  NEWSLETTER_SUBSCRIPTION_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('NEWSLETTER_SUBSCRIPTION_API')}`]}`,
  SIMILAR_SEARCH_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('SIMILAR_SEARCH_API')}`]}`,
  TRIP_ADVISOR_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('TRIP_ADVISOR_API')}`]}`,
  GOOGLE_PLACES_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('GOOGLE_PLACES_API')}`]}`,
  TINT_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('TINT_API')}`]}`,
  ADVANCE_SEARCH_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('ADVANCE_SEARCH_API')}`]}`,
  PRELOAD_LINK_MEGAMENU_IMAGE: process.env[`${constantCase('PRELOAD_LINK_MEGAMENU_IMAGE')}`],
  NO_RETINA_MEGANAV: process.env[`${constantCase('NO_RETINA_MEGANAV')}`],
  PRELOAD_3PARTY_LINKS: process.env[`${constantCase('PRELOAD_3PARTY_LINKS')}`] && `${process.env[`${constantCase('PRELOAD_3PARTY_LINKS')}`]}`,
  ADD_TO_CALENDER_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('ADD_TO_CALENDER_API')}`]}`,
  GOOGLE_ADD_TO_CALENDER_URL: process.env[`${constantCase('GOOGLE_ADD_TO_CALENDER_URL')}`],
  MAP_ACCESS_TOKEN: process.env[`${constantCase('MAP_ACCESS_TOKEN')}`],
  MAP_BOX_STYLE: process.env[`${constantCase('MAP_BOX_STYLE')}`],
  EVENTS_GRID_LISTING_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('EVENTS_GRID_LISTING_API')}`]}`,
  MARINE_MAP_ACCESS_TOKEN: process.env[`${constantCase('MARINE_MAP_ACCESS_TOKEN')}`],
  MARINE_MAP_BOX_STYLE: process.env[`${constantCase('MARINE_MAP_BOX_STYLE')}`],
  MAIL_CHIMP_FORM_GET_QUESTIONS_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('MAIL_CHIMP_FORM_GET_QUESTIONS_API')}`]}`,
  MAIL_CHIMP_FORM_SUBMIT_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('MAIL_CHIMP_FORM_SUBMIT_API')}`]}`,
  NEWSLETTER_SUBSCRIPTION_API_V2: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('NEWSLETTER_SUBSCRIPTION_API_V2')}`]}`,
  FETCH_COUNTRIES_API: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('FETCH_COUNTRIES_API')}`]}`,
  FETCH_USER_COUNTRY: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('FETCH_USER_COUNTRY')}`]}`,
  EXPLORE_MAP_UPD_STYLE: process.env[`${constantCase('EXPLORE_MAP_UPD_STYLE')}`],
  SUBSCRIBE_FORM_API_V2: `${process.env[`${constantCase('API_HOST')}`]}${process.env[`${constantCase('SUBSCRIBE_FORM_API_V2')}`]}`,
  MARINE_WEATHER_API: process.env[`${constantCase('MARINE_WEATHER_API')}`],
  sitecoreSiteName: process.env[`${constantCase('sitecoreSiteName')}`],
  graphQLEndpointPath: process.env[`${constantCase('graphQLEndpointPath')}`],
  defaultLanguage: process.env[`${constantCase('defaultLanguage')}`],
  graphQLEndpoint: process.env[`${constantCase('graphQLEndpoint')}`],
  layoutServiceConfigurationName: process.env[`${constantCase('layoutServiceConfigurationName')}`],
  publicUrl: process.env[`${constantCase('publicUrl')}`],
};

generateConfig(defaultConfig);

/**
 * Generates the JSS config based on config plugins (under ./config/plugins)
 * and then writes the config to disk.
 * @param {JssConfig} defaultConfig Default configuration.
 */
function generateConfig(defaultConfig: JssConfig): void {
  // Handle undefined values
  Object.keys(defaultConfig).forEach((prop) => {
    defaultConfig[prop] = defaultConfig[prop] || '';
  }, {});

  jssConfigFactory
    .create(defaultConfig)
    .then((config) => {
      writeConfig(config);
    })
    .catch((e) => {
      console.error('Error generating config');
      console.error(e);
      process.exit(1);
    });
}

/**
 * Writes the config object to disk with support for environment variables.
 * @param {JssConfig} config JSS configuration to write.
 */
function writeConfig(config: JssConfig): void {
  let configText = `/* eslint-disable */
// Do not edit this file, it is auto-generated at build time!
// See scripts/bootstrap.ts to modify the generation of this file.
const config = {};\n`;

  // Set configuration values, allowing override with environment variables
  Object.keys(config).forEach((prop) => {
    // Handle undefined values
    const value = config[prop] || '';
    configText += `config.${prop} = process.env.${constantCase(prop)} || '${value.trim()}';\n`;
  });

  configText += `module.exports = config;`;

  const configPath = path.resolve('src/temp/config.js');
  console.log(`Writing runtime config to ${configPath}`);
  fs.writeFileSync(configPath, configText, { encoding: 'utf8' });
}
