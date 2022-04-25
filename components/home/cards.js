import { CARD_LIST } from "./cardList"


export default function HomeCards() {
  return (
    <div className="section section-x section-feature-overlap">
      <div className="container">
        <div className="row justify-content-center gutter-vr-30px">
          {CARD_LIST.map((card) => 
            <div className="col-md-6 col-lg-4 text-center" key={card.id}>
              <div className="feature feature-alt feature-s3 shadow-alt">
                <div className="feature-icon">
                  <em className={`${card.icon}`}></em>
                </div>
                <div className="feature-content">
                  <h3>{card.header}</h3>
                  <p>{card.text}</p>
                  <a href={`${card.link}`} className="btn btn-arrow">{card.linkText}</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}