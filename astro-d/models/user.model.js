const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      typeof: String,
    },
    surname: {
      typeof: String,
    },
    userId: {
      typeof: Schema.Types.ObjectId,
    },
    email: {
      typeof: String,
      required: true,
    },
    password: {
      typeof: String,
    },
    birthDate: {
      typeof: String,
    },
    age: {
      typeof: String,
    },
    gender: {
      type: String,
      enum: ["kadın", "erkek"],
    },
    zodiacSign: {
      typeof: String,
    },
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true,
  }
);

const User = mongoose.model("User", userSchema, "user");

module.exports = User;
