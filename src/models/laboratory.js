const { Schema, model } = require('mongoose');

const laborSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: 'addresses',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Labor = model('laboratories', laborSchema);

module.exports = Labor;
