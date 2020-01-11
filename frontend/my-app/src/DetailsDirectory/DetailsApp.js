import React from "react"
import axios from "axios"
import InformationApp from "./InformationApp"
import VideoApp from "./VideoApp"
import CarouselApp from "./CarouselApp"
import AdsApp from "./AdsApp"


class DetailsApp extends React.Component {

    constructor() {
        super()
        this.state = {
            allMedia: [],
            mediaDetail: {}
        }
    }

    componentDidMount() {
        const title = this.props.match.params.mediaTitle
        const id = this.props.match.params.mediaID


        axios.get(`http://127.0.0.1:8000/api-${title}`)
            .then(res => {
                this.setState({ allMedia: res.data })
                console.log(res.data)
            })

        axios.get(`http://127.0.0.1:8000/api-${title}/${id}`)
            .then(res => {
                this.setState({ mediaDetail: res.data })
                console.log(res.data)
                console.log(this.state.mediaDetail)
            })

    }

    render() {


        return(
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6 information">
                        <InformationApp
                            videoUrl={this.state.mediaDetail.movie_video}
                            imgUrl={this.state.mediaDetail.movie_poster}
                            title={this.state.mediaDetail.movie_title}
                            director={this.state.mediaDetail.movie_director}
                            rating={this.state.mediaDetail.movie_rating}
                            release_date={this.state.mediaDetail.movie_release_date}
                            budget={this.state.mediaDetail.movie_budget}
                            gross={this.state.mediaDetail.movie_gross}
                            quality={this.state.mediaDetail.movie_quality}
                            description={this.state.mediaDetail.movie_synopsis}
                             />
                    </div>

                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-6" style={{paddingTop: "80px"}}>
                        <VideoApp
                            thumbnailUrl={this.state.mediaDetail.movie_thumbnail}
                            videoSource={this.state.mediaDetail.movie_video}
                            subtitleSource={this.state.mediaDetail.movie_subtitles}
                            />

                        <CarouselApp
                            carouselPropData={this.state.allMedia}
                            carouselMovieGenre={this.state.mediaDetail.movie_genre}/>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2" style={{paddingTop: "100px"}}>
                        <AdsApp />
                    </div>

                </div>
            </div>
        </div>
       )
    }

}


export default DetailsApp