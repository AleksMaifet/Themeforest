import emailjs from '@emailjs/browser';

import { NOTIFICATION } from '@/constants';
import { openNotification } from '@/utills';

const { SUCCESS, ERROR } = NOTIFICATION;

export const sendEmailMessage = async <T>(
  data: Record<keyof T, string>,
): Promise<void> => {
  try {
    await emailjs.send(
      process.env.REACT_APP_EMAIL_JS_YOUR_SERVICE_ID as string,
      process.env.REACT_APP_EMAIL_JS_YOUR_TEMPLATE_ID as string,
      data,
      process.env.REACT_APP_EMAIL_JS_YOUR_PUBLIC_KEY,
    );
    openNotification({ message: SUCCESS.text, type: SUCCESS.type, duration: 2 });
  } catch (error: any) {
    openNotification({ message: ERROR.text, type: ERROR.type, duration: 2 });
  }
};
