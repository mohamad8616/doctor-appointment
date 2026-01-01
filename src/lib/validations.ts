import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("ایمیل معتبر نیست"),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
});

export const registerSchema = z
  .object({
    name: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد"),
    email: z.string().email("ایمیل معتبر نیست"),
    password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
    confirmPassword: z.string(),
    // role: z.enum(["PATIENT", "DOCTOR"]).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمزهای عبور مطابقت ندارند",
    path: ["confirmPassword"],
  });

export const appointmentSchema = z.object({
  doctorId: z.string().min(1, "لطفا پزشک را انتخاب کنید"),
  date: z.date(),
  timeSlot: z.string().min(1, "لطفا زمان را انتخاب کنید"),
  reason: z.string().optional(),
});

export const prescriptionSchema = z.object({
  appointmentId: z.string().min(1, "لطفا نوبت را انتخاب کنید"),
  diagnosis: z.string().optional(),
  medications: z.array(
    z.object({
      name: z.string().min(1, "نام دارو الزامی است"),
      dosage: z.string().optional(),
      frequency: z.string().optional(),
      duration: z.string().optional(),
    })
  ),
  instructions: z.string().optional(),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type AppointmentInput = z.infer<typeof appointmentSchema>;
export type PrescriptionInput = z.infer<typeof prescriptionSchema>;
