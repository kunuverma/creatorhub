import z from "zod";

export const registerSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters long")
    .max(100, "Full name must be at most 100 characters long"),
  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters long")
    .max(100, "Username must be at most 100 characters long")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores",
    ),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),

  password: z
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters long")
    .max(30, "Password must be at most 30 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    ),
});

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
  password: z
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters long")
    .max(30, "Password must be at most 30 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    ),
});
