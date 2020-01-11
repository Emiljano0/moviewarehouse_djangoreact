import React from "react"


class PosterApp extends React.Component {

    render(props) {
        let linkTo = this.props.typeUrl + this.props.linkUrl

        return(
            <div>
                <div className="inlinemod">
                    <a href={linkTo} >
                        <img src={this.props.imgUrl} className="img-responsive posterImg" />
                    </a>
                    <a href={linkTo}  className="anchorTitle">
                        <h6>{this.props.title}</h6>
                    </a>
                </div>
            </div>
        )
    }

}


export default PosterApp