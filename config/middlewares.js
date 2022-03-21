module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name : 'strapi::cors',
    config : {
      enabled: true,
      header: '*',
      origin : ['http://localhost:3000','https://carbon-print.herokuapp.com/']
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
