import { loginSchema, registerSchema, appointmentSchema } from '../validations';

describe('Validation Schemas', () => {
  describe('loginSchema', () => {
    it('validates correct login data', () => {
      const validData = {
        email: 'test@example.com',
        password: 'password123',
      };
      expect(() => loginSchema.parse(validData)).not.toThrow();
    });

    it('rejects invalid email', () => {
      const invalidData = {
        email: 'invalid-email',
        password: 'password123',
      };
      expect(() => loginSchema.parse(invalidData)).toThrow();
    });

    it('rejects short password', () => {
      const invalidData = {
        email: 'test@example.com',
        password: '12345',
      };
      expect(() => loginSchema.parse(invalidData)).toThrow();
    });
  });

  describe('registerSchema', () => {
    it('validates correct register data', () => {
      const validData = {
        name: 'John Doe',
        email: 'test@example.com',
        password: 'password123',
        confirmPassword: 'password123',
      };
      expect(() => registerSchema.parse(validData)).not.toThrow();
    });

    it('rejects when passwords do not match', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'test@example.com',
        password: 'password123',
        confirmPassword: 'different',
      };
      expect(() => registerSchema.parse(invalidData)).toThrow();
    });

    it('rejects short name', () => {
      const invalidData = {
        name: 'J',
        email: 'test@example.com',
        password: 'password123',
        confirmPassword: 'password123',
      };
      expect(() => registerSchema.parse(invalidData)).toThrow();
    });
  });

  describe('appointmentSchema', () => {
    it('validates correct appointment data', () => {
      const validData = {
        doctorId: 'doctor123',
        date: new Date(),
        timeSlot: '09:00-10:00',
        reason: 'Checkup',
      };
      expect(() => appointmentSchema.parse(validData)).not.toThrow();
    });

    it('rejects empty doctorId', () => {
      const invalidData = {
        doctorId: '',
        date: new Date(),
        timeSlot: '09:00-10:00',
      };
      expect(() => appointmentSchema.parse(invalidData)).toThrow();
    });

    it('rejects empty timeSlot', () => {
      const invalidData = {
        doctorId: 'doctor123',
        date: new Date(),
        timeSlot: '',
      };
      expect(() => appointmentSchema.parse(invalidData)).toThrow();
    });
  });
});

