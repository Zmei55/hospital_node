const auth = require('./auth');
const users = require('./users');
const patients = require('./patients');
const requests = require('./requests');
const requestDetails = require('./requestDetails');
const services = require('./services');
const labors = require('./laboratories');
const addresses = require('./address');

module.exports = {
  auth,
  users,
  patients,
  requests,
  requestDetails,
  services,
  labors,
  addresses,
};
