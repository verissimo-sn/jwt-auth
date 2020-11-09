import bcrypt from 'bcrypt';
import { Document } from 'mongoose';

import mongoose from '../database/index';

interface User extends Document {
  name: string;
  email: string;
  password: string | undefined;
  createdAt: string;
}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

UserSchema.pre<User>('save', async function(next) {
  const hashSalt = 10;
  const hash = await bcrypt.hash(this.password, hashSalt);

  console.log(hash);
  this.password = hash;
  next();
});

const User = mongoose.model<User>('User', UserSchema);

export default User;