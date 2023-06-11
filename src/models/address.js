const { Schema, model } = require('mongoose');

const addressSchema = Schema(
  {
    street: {
      type: String,
      required: true,
    },
    houseNumber: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postcode: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Address = model('addresses', addressSchema);

module.exports = Address;
