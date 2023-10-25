const { Schema, model } = require('mongoose');

const requestDetailsSchema = Schema(
  {
    serviceId: {
      type: Schema.Types.ObjectId,
      ref: 'services',
      required: true,
    },
    laborId: {
      type: Schema.Types.ObjectId,
      ref: 'laboratories',
      required: true,
    },
    // resultId: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'results',
    //   required: true,
    //   default: {},
    // },
    isCompleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const RequestDetails = model('requestDetails', requestDetailsSchema);

module.exports = RequestDetails;
