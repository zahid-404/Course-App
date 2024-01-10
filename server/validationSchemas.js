const { z } = require("zod");

// Zod validation schema for admin signup
const adminSignupSchema = z.object({
  username: z.string().email(),
  password: z.string().min(5),
});

// Zod validation schema for admin login
const adminLoginSchema = z.object({
  username: z.string().email(),
  password: z.string().min(5),
});

module.exports = {
  adminSignupSchema,
  adminLoginSchema,
};
