const DEFAULT_PRODUCTION_URL = 'https://task-inservices.com';
const DEFAULT_DEVELOPMENT_URL = 'http://localhost:3000';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NODE_ENV === 'production' ? DEFAULT_PRODUCTION_URL : DEFAULT_DEVELOPMENT_URL);

export default siteUrl;


