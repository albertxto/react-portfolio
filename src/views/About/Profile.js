import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import firebase from "../../firebase";
import "firebase/firestore";
import { useUserContext } from "../../contexts/user.context.js";

function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [headline, setHeadline] = useState("");
  const [about, setAbout] = useState("");

  const { userId } = useUserContext();

  useEffect(() => {
    const userRef = firebase
      .firestore()
      .collection("users")
      .doc(userId);

    userRef
      .get()
      .then(snapshot => {
        if (snapshot) {
          setHeadline(snapshot.data().headline);
          setAbout(snapshot.data().about);
        }
      })
      .then(() => setIsLoading(false))
      .catch(error => console.log(error));
  }, [userId]);

  return (
    <div className="main_title text-left">
      <p className="top_text">
        About me <span></span>
      </p>
      <h2>{isLoading ? <Skeleton /> : headline}</h2>
      <p>{isLoading ? <Skeleton count={4} /> : about}</p>
      <button className="primary_btn">
        <span>Download CV</span>
      </button>
    </div>
  );
}

export default Profile;
