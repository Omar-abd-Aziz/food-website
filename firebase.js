export const firebaseConfig = {
    apiKey: "AIzaSyAchZaeKBBSVqOiwSS7xfWKLT1xBp1ZeVI",
    authDomain: "order-2.firebaseapp.com",
    projectId: "order-2",
    storageBucket: "order-2.appspot.com",
    messagingSenderId: "521589530269",
    appId: "1:521589530269:web:3931df749b4d1a05d07e74"
};
  
  
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
import { getFirestore,getCountFromServer, collection, query, where, getDocs,getDoc, setDoc, addDoc, doc,deleteDoc,onSnapshot,orderBy, limit,startAt, startAfter,endAt } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js';
  
  
let docName = "order-1-doc-id";
  
export {docName,initializeApp,getFirestore,getCountFromServer, collection, query, where, getDocs,getDoc, setDoc, addDoc, doc,deleteDoc,onSnapshot,orderBy, limit,startAt, startAfter,endAt};
  