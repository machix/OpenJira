import mongoose from "mongoose";

/**
 * 0 = Disconnected
 * 1 = Connected
 * 2 = Connecting
 * 3 = Disconnecting
 */
const mongoConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongoConnection.isConnected) {
    console.log("Ya estamos Conectados");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;

    if (mongoConnection.isConnected === 1) {
      console.log("usando conexion anterior");
    }

    await mongoose.disconnect();
  }

  await mongoose.connect("....");
  mongoConnection.isConnected = 1;
  console.log("Conectado a MongoDB:", "....");
};

export const disconect = async () => {
  if (mongoConnection.isConnected !== 0) return;

  await mongoose.disconnect();
  console.log("Desconectado de MongoDB");
};
