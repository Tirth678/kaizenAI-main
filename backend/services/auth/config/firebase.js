import serviceAccount from "../serviceKeyAccount.json" with {type: "json"};
import admin from 'firebase-admin'

export const app = admin.initializeApp({
  credential: admin.cert(serviceAccount)
});
