const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const FriendRequestSchema = new Schema({
  senderEmail: {
    type: String,
    required: true
  },
  receiverEmail: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = FriendRequest = mongoose.model(
  "friendrequest",
  FriendRequestSchema
);
