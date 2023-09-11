const { Schema, model } = require('mongoose');

const requestSearchSchema = Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: Number,
      required: true,
    },
    requestNumber: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const RequestSearch = model('requestsearches', requestSearchSchema);

module.exports = RequestSearch;
