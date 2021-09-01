import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAIfPw92x-DqCW2DkiUMDwg64qO4-0Kp4",
  authDomain: "react-boot-camp-yuhyuh.firebaseapp.com",
  projectId: "react-boot-camp-yuhyuh",
  storageBucket: "react-boot-camp-yuhyuh.appspot.com",
  messagingSenderId: "911531899760",
  appId: "1:911531899760:web:85cb07865619f78cdbedb5",
  measurementId: "G-5B7GPEK10R"
};

// firebaseパッケージをAPI Keyで初期化
// FirebaseコンソールでとReactを紐づける処理
firebase.initializeApp(firebaseConfig);

// 認証用のfirebaseモジュール
export const fireAuth = firebase.auth();

// ストレージ用のfirebaseモジュール
export const storage = firebase.storage();

// 初期化済みのfirebaseパッケージを確実に使用するためのexport defaultでfirebaseパッケージをexport
export default firebase;