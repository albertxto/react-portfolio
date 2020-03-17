import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import Skeleton from "react-loading-skeleton";
import firebase from "../../firebase";
import "firebase/firestore";
import { useUserContext } from "../../contexts/user.context.js";

function Education() {
  const [isLoading, setIsLoading] = useState(true);
  const [educations, setEducations] = useState([]);

  const { userId } = useUserContext();

  useEffect(() => {
    const userRef = firebase
      .firestore()
      .collection("users")
      .doc(userId);

    const educationRef = firebase.firestore().collection("educations");
    educationRef
      .where("userId", "==", userRef)
      .get()
      .then(snapshots => {
        if (snapshots) {
          let edu = [];
          snapshots.forEach(snapshot => {
            edu.push(snapshot.data());
          });
          setEducations(edu);
        }
      })
      .then(() => setIsLoading(false))
      .catch(error => console.log(error));
  }, [userId]);

  const Loading = () => {
    if (isLoading) {
      return (
        <tr>
          <td>
            <h4>
              <Skeleton width={300} />
            </h4>
            <p>
              <Skeleton width={300} />
            </p>
          </td>
          <td className="text-nowrap">
            <i className="fa fa-calendar mr-2"></i> <Skeleton width={100} />
          </td>
        </tr>
      );
    }
    return null;
  };

  return (
    <div className="main_title text-left">
      <p className="top_text">
        My Education <span></span>
      </p>
      <h2>Education</h2>
      <Table>
        <tbody>
          <Loading />
          <Loading />
          {educations.map((education, key) => {
            return (
              <tr key={key}>
                <td>
                  <h4>{education.degree}</h4>
                  <p className="font-italic">
                    {education.school}
                    {education.grade && `, GPA: ${education.grade} / 4.00`}
                  </p>
                </td>
                <td className="text-nowrap">
                  <i className="fa fa-calendar mr-2"></i> {education.startYear}{" "}
                  - {education.endYear}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Education;
