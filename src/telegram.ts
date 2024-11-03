import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export const sendTelegramMessage = async (message: string): Promise<boolean> => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const messageThreadId = process.env.TELEGRAM_THREAD_ID
  
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        chat_id: chatId,
        text: message,
        message_thread_id: messageThreadId,
        parse_mode: 'Markdown'
      }
    );

    return response.data.ok;
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return false;
  }
};