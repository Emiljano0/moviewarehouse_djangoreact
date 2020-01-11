import React from "react"


class InformationApp extends React.Component {
    render(props) {
        return(
            <div>
                <img src={this.props.imgUrl} className="img-responsive informationImage" />
                <div id="mv-info">
                    <div className="mvi-content" style={{textAlign: "left"}}>
                        <div className="mvic-desc">
                            <p>
                                <h3>{this.props.title}</h3>
                            </p>
                        </div>
                        <div className="mvic-info">
                            <p> <strong>DIRECTOR : </strong>{this.props.director}<br />
                                <strong>RATING : </strong>{this.props.rating}<br />
                                <strong>RELEASE DATE : </strong>{this.props.release_date}<br />
                                <strong>BUDGET : </strong>{this.props.budget}<br />
                                <strong>GROSS : </strong>{this.props.gross}<br />
                                <strong>QUALITY : </strong>{this.props.quality}<br />
                                <strong>DESCRIPTION : </strong>{this.props.description}<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default InformationApp