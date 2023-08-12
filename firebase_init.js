import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";

      const firebaseConfig = {
        apiKey: "AIzaSyDsBkMD4IMVypCnzLzke_0-7w85-BIiKmQ",
        authDomain: "taylor-swift-sound-board.firebaseapp.com",
        projectId: "taylor-swift-sound-board",
        storageBucket: "taylor-swift-sound-board.appspot.com",
        messagingSenderId: "828207415877",
        appId: "1:828207415877:web:4510d81584a2dd00e7592c",
        measurementId: "G-MV9861ZTP9"
      };
    
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);