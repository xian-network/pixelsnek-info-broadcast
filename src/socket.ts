import WebSocket from 'ws';
// import * as dotenv from 'dotenv';
import { process } from './processNodeData.js';
import { sendTweet } from './x.js';
import { sendTelegramMessage } from './telegram.js';
import { WEBSOCKET_URL } from './config.js';

// dotenv.config();

// const WEBSOCKET_URL = process.env.WEBSOCKET_URL || 'wss://testnet.xian.org/websocket';

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
        const nftUid = process(data.toString('utf8'));
        const post = `New #NFT Art!\r\nhttps://pixelsnek.xian.org/frames/${nftUid}\r\n\r\n#NFTartist #digitalartist #pixelart`
        await sendTweet(post);
        await sendTelegramMessage(post);
    });

    socket.on('close', () => {
        console.log('Disconnected from WebSocket');
    });

    socket.on('error', (error: any) => {
        console.error('WebSocket error:', error);
    });

    return socket;
}