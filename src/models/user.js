const { Schema, model } = require('mongoose');

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true, // необходима ещё настройка индексов в БД
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    workplace: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model('users', userSchema);

module.exports = User;
