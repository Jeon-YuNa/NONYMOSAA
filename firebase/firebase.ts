import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD999AXfqPpidN0TJpZdiwCnFBZhH0ko5M",
  authDomain: "nonymousaa-fdde9.firebaseapp.com",
  databaseURL: "https://nonymousaa-fdde9-default-rtdb.firebaseio.com",
  projectId: "nonymousaa-fdde9",
  storageBucket: "nonymousaa-fdde9.firebasestorage.app",
  messagingSenderId: "216619873526",
  appId: "1:216619873526:web:b2cbd5b2903140d235a8d7",
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// 클라이언트 사이드에서만 실행되도록 조건 추가
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app); // 클라이언트에서만 실행
}

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, firestore, storage };
