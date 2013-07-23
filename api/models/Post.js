/**
 * Post
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  attributes: {
    
    name: {
      type: 'string',
      minLength: 5
    }
   
  },

  beforeCreate: function(values, next) {
    console.log(" ********************************* you are in beforeCreate ********************************* ");
    next();
  },

  afterCreate: function(values, next) {
    console.log(" ********************************* you are in afterCreate ********************************** ");
    next();
  }

};
