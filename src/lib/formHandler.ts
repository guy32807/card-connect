import { ContactFormData } from '../types/forms';

// Form submission to a third-party service like Formspree, FormSubmit, etc.
export async function submitFormToThirdParty(data: ContactFormData) {
  // Replace with your form endpoint
  const FORM_ENDPOINT = 'https://formspree.io/f/your-form-id';
  
  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Form submission failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}