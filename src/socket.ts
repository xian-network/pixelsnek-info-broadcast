import WebSocket from 'ws';
import { process } from './processNodeData.js';
import { sendTweet } from './x.js';
import { sendTelegramMessage } from './telegram.js';
import { WEBSOCKET_URL } from './config.js';

export const start = () => {
    const socket = new WebSocket(WEBSOCKET_URL);

    socket.on('open', () => {
        console.log('Connected to WebSocket');
        const subscriptionRequest = {
            jsonrpc: "2.0",
            method: "subscribe",
            id: 0,
            params: {
                query: "tm.event='Tx'"
            }
        };

        socket.send(JSON.stringify(subscriptionRequest));
    });

    socket.on('message', async (data: WebSocket.RawData) => {
        const message = data.toString('utf8');
        try {
            const parsedMessage = JSON.parse(message);
            // Skip initial subscription confirmation message
            if (parsedMessage.result && Object.keys(parsedMessage.result).length === 0) {
                return;
            }
            
            const { uid, title, description } = process(message);
            if (uid) {  // Only proceed if nftUid is not null
                const postWithGIF = `New #NFT Art!\r\n*Title:* ${title}\r\n*Description:* ${description}\r\n[View GIF](https://pixelsnek.xian.org/gif/${uid}.gif)\r\n[View Frames](https://pixelsnek.xian.org/frames/${uid})\r\n\r\n#NFTartist #digitalartist #pixelart`;
                const post = `New #NFT Art!\r\nhttps://pixelsnek.xian.org/frames/${uid}\r\n\r\n#NFTartist #digitalartist #pixelart`;
                // console.log("post: ", post);
                await sendTweet(postWithGIF);
                await sendTelegramMessage(postWithGIF);
            }
        } catch (error) {
            console.error('Error parsing message:', error);
        }
    });

    socket.on('close', () => {
        console.log('Disconnected from WebSocket');
    });

    socket.on('error', (error: any) => {
        console.error('WebSocket error:', error);
    });

    return socket;
}