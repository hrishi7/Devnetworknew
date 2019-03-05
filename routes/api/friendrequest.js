const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const FriendRequest = require("../../models/FriendRequest");

// @route   GET api/friendrequest/test
// @desc    Tests friendrequest route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "friend request Works" }));

// @route   POST api/friendrequest/sendfriendrequest/:receiver
// @desc    send connection request from one developer to another
// @access  Private
router.post(
  "/sendfriendrequest/:receiver",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const receiverEmail = req.params.receiver;
    const senderEmail = req.user.email;
    //check if sender email is registered or not
    if (receiverEmail === senderEmail) {
      res.json({ message: "You can't send connection request to yourself!" });
    }
    FriendRequest.findOne({
      senderEmail: senderEmail,
      receiverEmail: receiverEmail
    }).then(user => {
      if (user) {
        res.json({
          message:
            "You have already send request kindly wait till the person accept it"
        });
      } else {
        const frequest = new FriendRequest({
          senderEmail: senderEmail,
          receiverEmail: receiverEmail
        });
        frequest.save().then(request =>
          res.json({
            message: "You have send connection request successfully!!"
          })
        );
      }
    });
  }
);

// @route   POST api/friendrequest/acceptrequest/:id
// @desc    send connection request from one developer to another
// @access  Private
router.post(
  "/acceptrequest/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const id = req.params.id;
    const receiverEmail = req.user.email;
    //check if sender email is registered or not
    FriendRequest.findOne({ _id: id }).then(async request => {
      if (request) {
        if (request.receiverEmail === receiverEmail) {
          //add both sender and receiver to both friendlist array in mongodb
          await addsendertoreceiver(request.senderEmail, receiverEmail);
          await addreceivertosender(request.senderEmail, receiverEmail);

          //now delete this record from friend request table
          FriendRequest.findOneAndDelete({ _id: id }).then(request => {
            res.json({
              message: "You have accepted the request Successfully!."
            });
          });
        } else {
          res.json({
            message: "Sorry you are unauthorized user to do this task"
          });
        }
      } else {
      }
    });
  }
);

async function addsendertoreceiver(senderEmail, receiverEmail) {
  User.findOne({ email: senderEmail }).then(user => {
    user.friends.unshift({ email: receiverEmail });
    user.save().then(user => {});
  });
}

async function addreceivertosender(senderEmail, receiverEmail) {
  User.findOne({ email: receiverEmail }).then(user => {
    user.friends.unshift({ email: senderEmail });
    user.save().then(user => {});
  });
}

module.exports = router;
