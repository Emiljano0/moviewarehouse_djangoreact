import React from "react"
import { BrowserRouter } from "react-router-dom"
import BaseRouter from "../MainDirectory/RoutesApp"


class NavbarApp extends React.Component {

    constructor() {
        super()
        this.state = {
            searchValue: ""
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(event){
        this.setState({searchValue: event.target.value})
    }

    render(props) {

        let filteredMovies = this.props.allMovies.filter(m => m.movie_title.indexOf(this.state.searchValue) !== -1 )
        let filteredSeries = this.props.allSeries.filter(s => s.series_title.indexOf(this.state.searchValue) !== -1 )
        let filteredDocumentaries = this.props.allDocumentaries.filter(
            d => d.documentary_title.indexOf(this.state.searchValue) !== -1 )

        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">

                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#mainNavBar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mainNavBar">

                    {/* Logo */}
                        <div className="navbar-header">
                            <a href="/" className="navbar-brand myLogo">MovieWarehouse</a>
                        </div>

                    {/* Menu Items */}
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="/movies">MOVIES</a></li>
                            <li className="nav-item"><a className="nav-link" href="/series">SERIES</a></li>
                            <li className="nav-item"><a className="nav-link" href="/documentaries">DOCUMENTARIES</a></li>

                    {/* drop down menu */}
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="dropdown_list_item"
                                    href="#">
                                    CATEGORIES <span className="caret"></span>
                                </a>
                                <div className="dropdown-menu" aria_labelledby="dropdown_list_item" >
                                    <a className="dropdown-item" href="/">War</a>
                                    <a className="dropdown-item" href="/">Detective</a>
                                    <a className="dropdown-item" href="/">Other Worlds</a>
                                    <a className="dropdown-item" href="/">Romantic</a>
                                </div>
                            </li>
                        </ul>

                        {/* Search Bar & Button */}
                            <input
                                type="text"
                                placeholder=" Search..."
                                value={this.state.searchValue}
                                onChange={this.handleSearch}
                            />

                         {/* LogIn */}
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{textAlign: "right"}}>
                                    <i className="fa fa-user"></i>
                                        &nbsp;LOGIN
                                </a>
                            </li>
                        </ul>

                    </div>
                </nav>

                <BrowserRouter>
                    <BaseRouter
                        filteredMovies={filteredMovies}
                        filteredSeries={filteredSeries}
                        filteredDocumentaries={filteredDocumentaries}
                    />
                </BrowserRouter>

            </div>
        )
    }
}



export default NavbarApp





