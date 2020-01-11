import React from "react"
import axios from "axios"
import NavbarApp from "../ReusableComponentsDirectory/NavbarApp"

class MainApp extends React.Component {

    constructor() {
        super()
        this.state = {
            allMovies: [],
            allSeries: [],
            allDocumentaries: []
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api-movies/")
            .then(res => {
                this.setState({ allMovies: res.data })
                console.log(res.data)
            })
        axios.get("http://127.0.0.1:8000/api-series/")
            .then(res => {
                this.setState({ allSeries: res.data })
                console.log(res.data)
            })
        axios.get("http://127.0.0.1:8000/api-documentaries/")
            .then(res => {
                this.setState({ allDocumentaries: res.data })
                console.log(res.data)
            })
    }

    render() {
        return(
            <div>
                <NavbarApp
                    allMovies={this.state.allMovies}
                    allSeries={this.state.allSeries}
                    allDocumentaries={this.state.allDocumentaries}
                />

            </div>
        )
    }

}


export default MainApp