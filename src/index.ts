import * as log from "./core/log";
import { Database } from "./core/Database";
import { Player } from "./core/Types";
import dgram from "dgram"; 

const PORT = 69420;
const server = dgram.createSocket("udp4");
const db = new Database();

server.on("error", (err) => {
  log.error(err);
});

server.on("connect", () => {
  log.success("New client connected!");
});

server.on("close", () => {
  log.info("Client disconnected...");
});

// TODO: Add heartbeat messages.
server.on("message", (msg, rinfo) => {
  let json = JSON.parse(msg.toString());
  let player: Player;
  if (db.exists(rinfo.address)) {
    player = { x: json.x, y: json.y };
    db.update(rinfo.address, player);
  } else {
    player = { x: json.x, y: json.y };
    db.add(rinfo.address, player);
  }
});

server.on("listening", () => {
  log.info("Client listening...");
});

server.bind(PORT);
