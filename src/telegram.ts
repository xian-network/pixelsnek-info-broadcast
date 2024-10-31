import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export const sendTelegramMessage = async (message: string): Promise<boolean> => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML'
      }
    );

    return response.data.ok;
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return false;
  }
};