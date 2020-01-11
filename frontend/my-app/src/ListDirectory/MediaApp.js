import React from "react"
import axios from "axios"
import PosterApp from "../ReusableComponentsDirectory/PosterApp"


class MediaApp extends React.Component {

    constructor() {
        super()
        this.state = {
            allMovies: [],
            movieIsRequired:false,

            allSeries: [],
            seriesIsRequired:false,

            allDocumentaries: [],
            documentaryIsRequired:false,

            allMedia: [],
        }
    }

    componentDidMount() {
        const title = this.props.match.params.mediaTitle

        axios.get(`http://127.0.0.1:8000/api-${title}/`)
            .then(res => {
                this.setState({ allMedia: res.data })
                console.log(res.data)
            })

    }

    render() {
        const allMediaArray = this.state.allMedia.map(a =>
            {
                if(this.props.match.params.mediaTitle === "movies") {
                    return (
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" >
                            <PosterApp title={a.movie_title} imgUrl={a.movie_poster} />
                        </div>
                     )
                } else if(this.props.match.params.mediaTitle === "series"){
                    return (
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" >
                            <PosterApp title={a.series_title} imgUrl={a.series_poster} />
                        </div>
                    )
                } else if(this.props.match.params.mediaTitle === "documentaries") {
                    return (
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" >
                            <PosterApp title={a.documentary_title} imgUrl={a.documentary_poster} />
                        </div>
                    )
                }
            }
        )

        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                        {allMediaArray}
                    </div>
                </div>
            </div>
        )
    }

}


export default MediaApp