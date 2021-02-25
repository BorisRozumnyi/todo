const {
  Schema,
  model,
} = require("mongoose");

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  id: Number,
});

module.exports = model("Todo", schema);
