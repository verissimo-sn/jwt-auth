import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://jwt-auth-login:devlogin@cluster0.4gtzn.mongodb.net/test-jwt-auth');

mongoose.Promise = global.Promise;

export default mongoose;