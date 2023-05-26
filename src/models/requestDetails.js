const { Schema, model, SchemaTypes } = require('mongoose');

const requestDetailsSchema = Schema(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: 'services',
      required: true,
    },
    labor: {
      type: Schema.Types.ObjectId,
      ref: 'laboratories',
      required: true,
    },
    result: {
      type: Array,
      required: true,
      default: [],
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const RequestDetails = model('requestDetails', requestDetailsSchema);

module.exports = RequestDetails;
