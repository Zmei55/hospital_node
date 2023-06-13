const { Schema, model } = require('mongoose');

const serviceSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Service = model('services', serviceSchema);

module.exports = Service;
