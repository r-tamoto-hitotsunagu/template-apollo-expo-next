import * as z from "zod"

export const UserModel = z.object({
  id: z.string(),
  name: z.string().max(191, { message: "The title must be shorter than 191 characters" }),
  birthDate: z.date().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
