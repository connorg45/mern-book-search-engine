const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getUser: async (parent, args, context) => {
      const { user } = context.auth;

      if (user) {
        return user;
      } else {
        throw new Error('User not found');
      }
    },
  },
  Mutation: {
    createUser: async (parent, args, context) => {},

    loginUser: async (parent, args, context) => {},

    saveBook: async (parent, args, context) => {},

    deleteBook: async (parent, args, context) => {},
  },
};

module.exports = resolvers;
