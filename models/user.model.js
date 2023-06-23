const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
        type: String
    },

    todos: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Todo'
    }]
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;