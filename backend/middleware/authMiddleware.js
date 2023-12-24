import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token = req.cookies.jwt;
  if (token) {
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decodedToken.userId).select('-password');
    } catch (error) {
      res.status(401);
      throw new Error('Invalid token');
    }
  } else {
    res.status(401);
    throw new Error('No token');
  }
});

export { protect };
