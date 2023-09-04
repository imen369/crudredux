import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Initialize Firebase
const app = initializeApp ({
apiKey: "AIzaSyBkNx2m6lbjo0-rgFjp9DXJTCy18f1KUa0XY",
authDomain: "reduximage-90542.firebaseapp.com",
projectId: "reduximage-90542",
storageBucket: "reduximage-90542.appspot.com",
messagingSenderId: "342291750324",
appId: "1:342291750324:web:651e2843fe0f7cb40366e1"
});
// Firebase storage reference
const storage = getStorage(app);
export default storage;