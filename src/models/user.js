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
    department: { type: String },
    workplaces: [{ type: String }],
    position: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      default: null,
    },
    isNotLocked: {
      type: Boolean,
      required: true,
      default: false,
    },
    roles: [
      {
        type: String,
        required: true,
        default: 'USER',
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const User = model('users', userSchema);

module.exports = User;
