import z from 'zod'

const registerInRoomSchema = z.object({
  h_number: z.number().min(1).max(15),
  name: z.string(),
  condition: z.string(),
  food: z.string(),
  admissionDate: z.string().default(new Date().toLocaleDateString())
})

export const validateRegisterInRoom = (data) => {
  const isValid = registerInRoomSchema.safeParse(data)
  if (!isValid.success) {
    return isValid.error
  }
  return isValid.data
}
