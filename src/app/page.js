"use client";

import Image from "next/image";
import { Typography } from "@mui/material";
// import app from "@/firebase/config";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import app from "@/firebase/config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBmoohtLgicK_HjR7_hkyhPT7S6B5KF49Y",
//   authDomain: "stupidblog-deecc.firebaseapp.com",
//   projectId: "stupidblog-deecc",
//   storageBucket: "stupidblog-deecc.appspot.com",
//   messagingSenderId: "1055370215717",
//   appId: "1:1055370215717:web:e277ddd1d3da1377c91acc",
//   measurementId: "G-87YBFJC6MH",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const [data, setData] = useState();

export default function Home() {
  const [fruits, setFruits] = useState();
  const db = getFirestore(app);

  useEffect(() => {
    const getData = async () => {
      console.log("hello");
      const snapshot = await getDocs(collection(db, "data"));
      console.log("snapshot", snapshot);
      const list = snapshot.docs.map((doc) => doc.data());
      console.log("list", list);
      setFruits(list[0]);
    };
    getData();
  }, []);

  useEffect(() => {
    console.log("fruits", fruits);
  }, [fruits]);

  return (
    <main>
      <Typography>Hallo</Typography>
      {fruits && (
        <>
          <Typography>{fruits[0]}</Typography>
          <Typography>{fruits[1]}</Typography>
        </>
      )}
    </main>
  );
}
