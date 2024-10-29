import WebSocket from 'ws';
import dotenv from 'dotenv';

dotenv.config();

const WEBSOCKET_URL = process.env.WEBSOCKET_URL || 'wss://testnet.xian.org/websocket';

export const start = () => {
    const socket = new WebSocket(WEBSOCKET_URL);

    socket.on('open', () => {
        console.log('Connected to WebSocket');
        const subscriptionRequest = {
            jsonrpc: "2.0",
            method: "subscribe",
            id: 0,
            params: {
                query: "tm.event='NewBlock'"
            }
        };

        socket.send(JSON.stringify(subscriptionRequest));
    });

    socket.on('message', (data: WebSocket.RawData) => {
        console.log(data.toString('utf8'));
    });

    socket.on('close', () => {
        console.log('Disconnected from WebSocket');
    });

    socket.on('error', (error: any) => {
        console.error('WebSocket error:', error);
    });

    return socket;
}