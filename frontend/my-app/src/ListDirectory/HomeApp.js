import React from "react"
import axios from "axios"
import PosterApp from "../ReusableComponentsDirectory/PosterApp"


class HomeApp extends React.Component {

    constructor() {
        super()
    }

    render() {

        const allMoviesArray = this.props.filteredMovies.map((a, index) =>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" >
                    <PosterApp title={a.movie_title} imgUrl={a.movie_poster} typeUrl="/movies/" linkUrl={index+3} />
                </div>
            )

        const allSeriesArray = this.props.filteredSeries.map((a, index) =>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" >
                    <PosterApp title={a.series_title} imgUrl={a.series_poster} typeUrl="/series/" linkUrl={index} />
                </div>
            )

        const allDocumentariesArray = this.props.filteredDocumentaries.map((a, index) =>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" >
                    <PosterApp title={a.documentary_title} imgUrl={a.documentary_poster} typeUrl="/documentaries/"
                        linkUrl={index} />
                </div>
            )


        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                        {allMoviesArray}
                    </div>
                    <div className="row">
                        {allSeriesArray}
                    </div>
                    <div className="row">
                        {allDocumentariesArray}
                    </div>
                </div>
            </div>
        )
    }

}


export default HomeApp