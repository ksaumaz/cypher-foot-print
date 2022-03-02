'use strict';

/**
 * huella-carbono service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::huella-carbono.huella-carbono');
