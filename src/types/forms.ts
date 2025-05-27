export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  topic: string;
  message: string;
  preferredContact: 'email' | 'text';
  aiAssist: boolean;
};