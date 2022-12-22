'use strict';

/**
 * recipe-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recipe-list.recipe-list');
