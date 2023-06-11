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
    residenceAddress: {
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

const Patient = model('patients', patientSchema);

module.exports = Patient;
