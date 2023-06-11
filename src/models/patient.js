const { Schema, model } = require('mongoose');

const cardRegexp = /^[0-9]{9}$/;

const patientSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
      trim: true,
    },
    cardNumber: {
      type: Number,
      required: true,
      unique: true,
      match: cardRegexp,
    },
    gender: {
      type: String,
      required: true,
      enum: ['männlich', 'weiblich', 'divers'],
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: String,
    identityDocument: {
      type: String,
      required: true,
      enum: ['ausweis', 'pass', 'führerschein'],
      default: 'ausweis',
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: 'addresses',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Patient = model('patients', patientSchema);

module.exports = Patient;
