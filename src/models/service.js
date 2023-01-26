const { Schema, model } = require('mongoose');

const serviceSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Service = model('service', serviceSchema);

module.exports = Service;
