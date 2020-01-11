import React from "react"
import { Route } from "react-router-dom"
import HomeApp from "../ListDirectory/HomeApp"
import MediaApp from "../ListDirectory/MediaApp"
import DetailsApp from "../DetailsDirectory/DetailsApp"


class BaseRouter extends React.Component {
    render(props){
        return(
            <div>
                <Route exact path="/" component={()=>
                    <HomeApp  filteredMovies={this.props.filteredMovies}
                              filteredSeries={this.props.filteredSeries}
                              filteredDocumentaries={this.props.filteredDocumentaries}
                    />
                } />

                <Route exact path="/:mediaTitle/" component={MediaApp} />

                <Route exact path="/:mediaTitle/:mediaID" component={DetailsApp} />
            </div>
        )
    }
}


export default BaseRouter