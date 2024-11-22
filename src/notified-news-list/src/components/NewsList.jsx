import { useEffect, useState } from "react";
import axios from "axios"
import NewsCard from "./NewsCard"

const baseURL = "https://api.newsroom.notified.com";


function NewsList() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    const now = new Date()
    let nowMinusYear = new Date(now)
    nowMinusYear.setFullYear(nowMinusYear.getFullYear() - 1)

    //config body for request
    //Swagger and docs https://api.newsroom.notified.com/docs/index.html
    const data = JSON.stringify({
        "pageSize": 4, //number of news items
        "page": 1,
        "types": [
            "pressRelease",
            "news"
        ],
        "from": nowMinusYear,
        "to": now
    });

    const newsRoomId = "41909"
    const requestUrl = "https://api.newsroom.notified.com/api/newsrooms/" + newsRoomId + "/items"

    //config request and header
    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: requestUrl,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'text/plain',
            'Notified-Custom-Token': 'Y1EFo5mH1kUW4Nz0JA5ue3HVhPmRJjXttTNhKjLHqq1llYPCeZHFEP8YycUbD4pdKPvG1dC+cjvgGgrsldgNVmcBq3mXh1JYOnld1LaCBdVl9epIZSdJNBapqSDabrOQMF2gaJeYPWdQX86Ghj74a6up9toRtOjhh497OvkgiDYed3ttrcY77yy3fwKCWgX/0v2P4bb3N4Y44oeUT51FK1yX/Pn7zHqxCeoi7ColliS9d2rDz9WbHRNakhMaC4Ip'
        },
        data: data
    };


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.request(config);
                setPosts(response.data);
            } catch (error) {
                //console.error(error.message);
            }
            setLoading(false);
        }

        fetchData();
    }, []);



    return (
        <> {loading && <div className="bl-b2b-4-news__loading"><div className="bl-b2b-4-news__loader"></div></div>}
            {!loading && (<div className="bl-b2b-4-news__list">
                {
                    posts.map((post, index) => {
                        return <NewsCard key={index} post={post} />
                    })
                }
            </div>)}
        </>
    )
}
export default NewsList