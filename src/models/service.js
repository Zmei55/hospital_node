const { Schema, model } = require('mongoose');

const serviceSchema = Schema(
  {
    serviceName: {
      type: String,
      required: true,
    },
    serviceCode: {
      type: String,
      required: true,
    },
    serviceIsActive: {
      type: Boolean,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Service = model('service', serviceSchema);

module.exports = Service;
