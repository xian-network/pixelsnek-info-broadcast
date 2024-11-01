import WebSocket from 'ws';
import { process } from './processNodeData.js';
// import { sendTweet } from './x.js';
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
            
            const nftUid = process(message);
            if (nftUid) {  // Only proceed if nftUid is not null
                const post = `New #NFT Art!\r\nhttps://pixelsnek.xian.org/frames/${nftUid}\r\n\r\n#NFTartist #digitalartist #pixelart`;
                const gifPost = `https://pixelsnek.xian.org/gif/${nftUid}.gif`;
                // await sendTweet(post);
                // console.log("post: ", post);
                await sendTelegramMessage(post);
                await sendTelegramMessage(gifPost);
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