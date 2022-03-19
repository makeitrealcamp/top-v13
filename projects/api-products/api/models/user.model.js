import mongoose from "mongoose";

const schemaUser = {
  email: String,
  name: String,
  document: String,
  phone: String,
  address: String,
  role: String,
  password: String,
  created_at: { type: Date, default: Date.now() },
  is_google_account: { type: Boolean, default: false },
  google_account: { type: Object, default: {} },
};

const User = mongoose.model("User", schemaUser, "users");

export default User;
