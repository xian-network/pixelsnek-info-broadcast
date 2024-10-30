import { TwitterApi } from 'twitter-api-v2';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY as string,
  appSecret: process.env.TWITTER_API_SECRET as string,
  accessToken: process.env.TWITTER_ACCESS_TOKEN as string,
  accessSecret: process.env.TWITTER_ACCESS_SECRET as string,
});
export const sendTweet = async (message: string) => {
    try {
        await client.v2.tweet(message);
    }
    catch (error) {
        console.error('Error sending tweet:', error);
        throw error;
    }
};