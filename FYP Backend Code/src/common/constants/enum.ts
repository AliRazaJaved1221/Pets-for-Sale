// Social Authentication Service Providers

export enum AuthenticationProviders {
  GOOGLE = 'Google',
  FACEBOOK = 'Facebook',
  LINKEDIN = 'LinkedIn',
}

export enum PredefinedQuestionCategories {
  MORTGAGE = 'Mortgage',
  PROPERTY = 'Property',
  EMPLOYMENT = 'Employment',
  OTHER = 'Other',
}

export enum UserRoles {
  ADMIN = 'Admin',
  PATIENT = 'Patient',
  DOCTOR = 'Doctor',
}

export enum AgreementTypes {
  MORTGAGE = 'Mortgage',
  PROPERTY = 'Property',
  EMPLOYMENT = 'Employment',
  OTHER = 'Other',
}

export enum SubscriptionType {
  FREE = 'Free',
  PAID = 'Paid',
  EXPIRED = 'Expired',
  PAYMENTFAILED = 'Payment Failed',
}

export enum DayOfWeek {
  SUNDAY = 'Sunday',
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
}

export enum AppointmentStatus {
  BOOKED = 'Booked',
  CANCELED = 'Canceled',
  INPROGRESS = 'InProgress',
  COMPLETED = 'Completed',
}

export enum PrescriptionStatus {
  PENDING = 'Pending',
  COMPLETED = 'Completed',
}
export enum PaymentStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAILED = 'failed',
}
