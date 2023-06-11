const { Schema, model } = require('mongoose');

const requestSearchSchema = Schema(
  {
    requestNumber: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    patientName: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const RequestSearch = model('requestSearch', requestSearchSchema);

module.exports = RequestSearch;
