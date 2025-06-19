"use server"
import { NextResponse } from 'next/server';
import { Server } from "socket.io";
import express from 'express';
import { createServer } from 'node:http';

const app = express();
const server = createServer(app);

app.get('/chat', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});