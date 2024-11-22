function NewsCard(props) {
    const { date, type, title, originalEndpointUrl } = props.post

    const formattedDate = new Date(date).toLocaleDateString("sv-SE")   
    const notifiedBaseUrl = "https://press.flygbra.se"
    const notifiedUrl = notifiedBaseUrl + originalEndpointUrl


    return (
            <a href={notifiedUrl} className="bl-b2b-4-news__card" data-gtm-component-label={title}>
                <div className="bl-b2b-4-news__meta"><span className="bl-b2b-4-news__date">{formattedDate}</span> <span className="bl-b2b-4-news__type">{type === "pressRelease" ? "Press Release" : "News"}</span></div>
                <h4 className="bl-b2b-4-news__card--title">{title} <span className="bl-b2b-4-news__arrow">→</span></h4>
            </a>
    )
}
export default NewsCard