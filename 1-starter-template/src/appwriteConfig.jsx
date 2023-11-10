import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("654b941decd086976c30");

export const account = new Account(client);

export default client;
