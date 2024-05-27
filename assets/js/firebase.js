<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBUZKCNR7NdEAZXbbm1G4UojkiCIZkq1zE",
    authDomain: "portfolio-blogs-db124.firebaseapp.com",
    projectId: "portfolio-blogs-db124",
    storageBucket: "portfolio-blogs-db124.appspot.com",
    messagingSenderId: "78527139932",
    appId: "1:78527139932:web:576e4fb89731f08f981699",
    measurementId: "G-ZKP3KZD47R"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
