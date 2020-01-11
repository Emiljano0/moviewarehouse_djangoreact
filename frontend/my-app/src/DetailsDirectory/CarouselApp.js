import React from "react"
import PosterApp from "../ReusableComponentsDirectory/PosterApp"


class CarouselApp extends React.Component {

    render(props) {

        const carouselArray = this.props.carouselPropData.map(a => a.movie_genre === this.props.carouselMovieGenre ?
            <div className="col-md-3">
                <div>
                    <PosterApp imgUrl={a.movie_poster} title={a.movie_title} />
                </div>
            </div>
            : null )

        return(
            <div>
                <p style={{fontSize: "20px"}}>People who liked this also saw ...</p>
                <div id="my-slider" className="carousel slide" data-ride="carousel">
                    {/*  indicators .nav */}
                    <ul className="carousel-indicators">
                        <li data-target="#my-slider" data-slide-to="0" className="active"></li>
                        <li data-target="#my-slider" data-slide-to="1"></li>
                        <li data-target="#my-slider" data-slide-to="2"></li>
                    </ul>

                    {/*  wrapper for slides */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                {carouselArray}
                            </div>
                        </div>

                        {/* until further modification
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="inline_carousel_element" >

                                        probably carouselArray2

                                        <a href="#" className="anchor">
                                            <img src="{{ cursor.movie_poster.url }}" className="imazh_crsl"/>
                                        </a>
                                        <a href="#/">
                                            <h6> {{ cursor.movie_title }} </h6>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        */}

                        {/* controls or next and prev buttons */}
                        <a className="left carousel-control-prev" href="#my-slider" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control-next" href="#my-slider" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </div><hr />
                </div>
            </div>
        )
    }
}


export default CarouselApp