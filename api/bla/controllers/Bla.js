'use strict';

/**
 * Bla.js controller
 *
 * @description: A set of functions called "actions" for managing `Bla`.
 */

module.exports = {

  /**
   * Retrieve bla records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.bla.search(ctx.query);
    } else {
      return strapi.services.bla.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a bla record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.bla.fetch(ctx.params);
  },

  /**
   * Count bla records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.bla.count(ctx.query);
  },

  /**
   * Create a/an bla record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.bla.add(ctx.request.body);
  },

  /**
   * Update a/an bla record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.bla.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an bla record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.bla.remove(ctx.params);
  }
};
