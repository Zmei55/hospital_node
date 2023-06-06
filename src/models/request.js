const { Schema, model } = require('mongoose');

const requestSchema = Schema(
  {
    requestNumber: {
      type: Number,
      required: true,
    },
    patient: {
      type: Schema.Types.ObjectId,
      ref: 'patients',
      required: true,
    },
    details: [
      {
        type: Schema.Types.ObjectId,
        ref: 'requestDetails',
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
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Request = model('request', requestSchema);

module.exports = Request;
