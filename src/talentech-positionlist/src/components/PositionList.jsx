import { useEffect, useState } from "react";
import axios from "axios";
import PositionArticle from "./PositionArticle";

const baseURL = "https://recruiter-api.hr-manager.net/jobportal.svc";

/* 
 API Usage Notice - External Documentation - Confluence https://talentech-docs.atlassian.net/wiki/spaces/DOCS/pages/13566079/API+Usage+Notice
Common properties for RESTFul apis - External Documentation - Confluence  https://talentech-docs.atlassian.net/wiki/spaces/DOCS/pages/172982302/Common+properties+for+RESTFul+apis
TR Job Portal API (public) - External Documentation - Confluence https://talentech-docs.atlassian.net/wiki/spaces/DOCS/pages/10617006/TR+Job+Portal+API+public
Technical Contact: Lucas Olsson Customer Support Talentech Sweden support.tr@talentech.com 
*/

// https://recruiter-api.hr-manager.net/jobportal.svc/braathens/positionlist/json/?mediaid=4615&take=40

function PositionList() {
  const [loading, setLoading] = useState(true);
  const [positions, setPositions] = useState([]);

  // const now = new Date()
  // let nowMinusYear = new Date(now)
  // nowMinusYear.setFullYear(nowMinusYear.getFullYear() - 1)

  let mediaId = "4615";
  let take = "30";
  let sortby = "Created";
  let sortasc = "0";
  const listRoot = document.getElementById("talentechPositionList");

  if (listRoot.getAttribute("data-mediaid")) {
    mediaId = listRoot.getAttribute("data-mediaid");
  }
  if (listRoot.getAttribute("data-take")) {
    take = listRoot.getAttribute("data-take");
  }
  if (listRoot.getAttribute("data-sortby")) {
    sortby = listRoot.getAttribute("data-sortby");
  }
  if (listRoot.getAttribute("data-sortasc")) {
    sortasc = listRoot.getAttribute("data-sortasc");
  }
  const requestUrl =
    baseURL +
    "/braathens/positionlist/json/" +
    "?" +
    "mediaid=" +
    mediaId +
    "&" +
    "take=" +
    take +
    "&" +
    "sortby=" +
    sortby +
    "&" +
    "sortasc=" +
    sortasc

  //config request and header
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: requestUrl,
    headers: {
      "Content-Type": "application/json",
      Accept: "text/plain",
    },
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(config);
      setPositions(response.data.Items);
      //console.log(positions);
    } catch (error) {
      //console.error(error.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {" "}
      {loading && (
        <div className="bl-b2b-position-list__loading">
          <div className="bl-b2b-position-list__loader"></div>
        </div>
      )}
      {!loading && (
        <div className="bl-b2b-position-list__list">
          {positions.map((position, index) => {
            return <PositionArticle key={index} position={position} />;
          })}
        </div>
      )}
    </>
  );
}
export default PositionList;
