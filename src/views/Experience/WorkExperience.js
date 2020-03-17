import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import Skeleton from "react-loading-skeleton";
import firebase from "../../firebase";
import "firebase/firestore";
import { useUserContext } from "../../contexts/user.context.js";

function WorkExperience({ type }) {
  const [isLoading, setIsLoading] = useState(true);
  const [experiences, setExperiences] = useState([]);

  const { userId } = useUserContext();

  useEffect(() => {
    const userRef = firebase
      .firestore()
      .collection("users")
      .doc(userId);

    const experienceRef = firebase.firestore().collection("experiences");
    experienceRef
      .where("userId", "==", userRef)
      .where("type", "==", type)
      .orderBy("startYear", "desc")
      .orderBy("startMonth", "desc")
      .get()
      .then(snapshots => {
        if (snapshots) {
          let exp = [];
          snapshots.forEach(snapshot => {
            exp.push(snapshot.data());
          });
          setExperiences(exp);
        }
      })
      .then(() => setIsLoading(false))
      .catch(error => console.log(error));
  }, [userId, type]);

  const Loading = () => {
    if (isLoading) {
      return (
        <tr>
          <td>
            <h4>
              <Skeleton width={300} />
            </h4>
            <h5>
              <Skeleton width={300} />
            </h5>
            <ul>
              <li>
                <Skeleton width={300} />
              </li>
              <li>
                <Skeleton width={300} />
              </li>
            </ul>
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
        My Experience <span></span>
      </p>
      <h2>{type === "working" ? "Working" : "Organization"} Experience</h2>
      <Table>
        <tbody>
          <Loading />
          {experiences.map((experience, key) => {
            let d = new Date();
            let startMonth = "";
            d.setMonth(experience.startMonth - 1);
            startMonth = d.toLocaleString("default", {
              month: "long"
            });
            let endMonth = "";
            if (!experience.isWorking) {
              d.setMonth(experience.endMonth - 1);
              endMonth = d.toLocaleString("default", { month: "long" });
            }
            return (
              <tr key={key}>
                <td>
                  <h4>{experience.title}</h4>
                  <h5 className="font-italic">{experience.company}</h5>
                  {experience.descriptions && (
                    <ul>
                      {experience.descriptions.map((description, key) => {
                        return <li key={key}>{description}</li>;
                      })}
                    </ul>
                  )}
                </td>
                <td>
                  <i className="fa fa-calendar mr-2"></i> {startMonth}{" "}
                  {experience.startYear} -{" "}
                  {experience.isWorking
                    ? "Present"
                    : `${endMonth} ${experience.endYear}`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default WorkExperience;
