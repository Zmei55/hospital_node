const { Schema, model } = require('mongoose');

const laborSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    laborIsActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    laborAddress: {
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
  },
  { versionKey: false, timestamps: true }
);

const Labor = model('laboratory', laborSchema);

module.exports = Labor;
