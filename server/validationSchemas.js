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

// Zod validation schema for creating a course
const createCourseSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(10),
  price: z.number().max(9999),
  imageLink: z.string().url(),
  published: z.boolean(),
});

module.exports = {
  adminSignupSchema,
  adminLoginSchema,
  createCourseSchema,
};
