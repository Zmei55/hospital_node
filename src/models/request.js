const { Schema, model, SchemaTypes } = require('mongoose');

const requestSchema = Schema(
  {
    requestNumber: {
      type: Number,
      required: true,
    },
    patient: {
      type: SchemaTypes.ObjectId,
      ref: 'patients',
      required: true,
    },
    details: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'requestDetails',
        required: true,
        default: [],
      },
    ],
    containers: [
      {
        type: Array,
        required: true,
        default: [],
      },
    ],
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'users',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Request = model('request', requestSchema);

module.exports = Request;
