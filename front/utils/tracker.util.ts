/* eslint-disable @typescript-eslint/naming-convention */
import MatomoTracker from "matomo-tracker-react-native";

export const matomoInstance = new MatomoTracker({
  disabled: process.env.MATOMO_ENABLED === "false",
  siteId: process.env.MATOMO_APPLICATION_ID,
  urlBase: process.env.MATOMO_URL,
});

export enum TrackingEvent {
  APP_ACTIVE = "Ouverture de l'app",
  ONBOARDING = "Onboarding",
  PROFILE = "Profil",
  HOME = "Accueil",
  ARTICLE_LIST = "Liste d'articles",
  ARTICLE = "Article",
  CALENDAR = "Calendrier",
  CALENDAR_SYNC = "Calendrier - Demande de synchronisation",
  EVENT = "Événement",
  EVENT_SEE_THE_MAP = "Événement - Voir la carte",
  CARTO = "Cartographie",
  CARTO_CLICK_POI = "Cartographie - Clic sur un POI",
  EPDS = "EPDS",
  EPDS_BE_CONTACTED = "EPDS - Être contacté",
  NOTIFICATION = "Notification",
  FILTER_CARTO = "Filtre (Carto)",
  FILTER_ARTICLES = "Filtre (Articles)",
}
