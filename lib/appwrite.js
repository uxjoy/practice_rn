import { Account, Client } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.designhub.az_flix",
  projectId: "669504ae002eb9ef7a44",
  databaseId: "669506560033be0196da",
  userCollectionId: "6695067d0033ed1cd2c2",
  videoCollectionId: "669506a4000d508be397",
  storageId: "66950a1e0034f3ce7441",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

// ==========================================
const account = new Account(client);

const createUser = () => {
  // Register User
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
