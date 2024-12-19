function PositionArticle(props) {
    const { Name,WorkPlace,ApplicationDue,ApplicationFormUrl,AdvertisementUrl } = props.position    
    const regex = /(?<=\()([0-9]*?)(?=\+)/
    const dateEpoch = ApplicationDue.match(regex)
    const formattedDateEpoch = Number(dateEpoch[0])


    const formattedDate = new Date(formattedDateEpoch).toLocaleDateString("sv-SE") 



    return (
            <article className="bl-b2b-position-list__article">
                <div className="bl-b2b-position-list__info">
                    <h4>{Name}</h4>
                    <p>{WorkPlace ? <>{WorkPlace} <span>&bull;</span> </> : "" }<a href={ApplicationFormUrl}>Apply before {formattedDate}</a></p>
                </div>
                <div className="bl-b2b-position-list__link">
                    <a href={AdvertisementUrl}>View position</a>
                </div>
                
            </article>
    )
}
export default PositionArticle