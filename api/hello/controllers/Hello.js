'use strict';

/**
 * Hello.js controller
 *
 * @description: A set of functions called "actions" for managing `Hello`.
 */

module.exports = {

  /**
   * Retrieve hello records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.hello.search(ctx.query);
    } else {
      return strapi.services.hello.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a hello record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.hello.fetch(ctx.params);
  },

  /**
   * Count hello records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.hello.count(ctx.query);
  },

  /**
   * Create a/an hello record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.hello.add(ctx.request.body);
  },

  /**
   * Update a/an hello record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.hello.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an hello record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.hello.remove(ctx.params);
  }
};
