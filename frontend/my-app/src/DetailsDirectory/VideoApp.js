import React from "react"


class VideoApp extends React.Component {
    render(props) {
        return(
            <div>
                <div className="embed-responsive embed-responsive-16by9 videoInlinemod">
                    <video className="embed-responsive-item" height="auto" width="100%"
                           poster={this.props.thumbnailUrl} src={this.props.videoSource} preload="none" controls>
                        <track src={this.props.subtitleSource} kind="subtitles" srcLang="en" label="English" />
                    </video>
                </div>
                <br /><br /><br /><hr />
            </div>
        )
    }
}


export default VideoApp