import emailjs from '@emailjs/browser';

export const sendEmailMessage = async <T>(
  data: Record<keyof T, string>,
): Promise<void> => {
  try {
    const result = await emailjs.send(
      process.env.REACT_APP_EMAIL_JS_YOUR_SERVICE_ID as string,
      process.env.REACT_APP_EMAIL_JS_YOUR_TEMPLATE_ID as string,
      data,
      process.env.REACT_APP_EMAIL_JS_YOUR_PUBLIC_KEY,
    );
    console.log(result.text);
  } catch (error: any) {
    console.log(error.text);
  }
};
