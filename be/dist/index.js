import { WebSocketServer } from 'ws';
import { createServer } from 'http';
const port = process.env.PORT || 8080;
const server = createServer();
const wss = new WebSocketServer({ server });
wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('message', (message) => {
        console.log('Received:', message.toString());
    });
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
server.listen(port, () => {
    console.log(`WebSocket server is running on port ${port}`);
});
