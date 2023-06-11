const { Schema, model } = require('mongoose');

const requestSchema = Schema(
  {
    requestNumber: {
      type: Number,
      required: true,
    },
    patientId: {
      type: Schema.Types.ObjectId,
      ref: 'patients',
      required: true,
    },
    requestDetails: [
      {
        type: Schema.Types.ObjectId,
        ref: 'requestDetails',
        required: true,
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

const Request = model('requests', requestSchema);

module.exports = Request;
