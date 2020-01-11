import React from "react"
import ReactDOM from "react-dom"


class ListApp extends React.Component {

    constructor() {
        super()
        this.state = {

        }
    }



    render() {


        return(
            <div class="pagination-wrapper">
			<div class="pagination">

				<a class="page-numbers anchor2" href="?page=1">First</a>
//  				{% if pag_movies.has_previous %}
//					    <a class="prev page-numbers" href="?page={{ pag_movies.previous_page_number }}">Prev</a>
//  				{% endif %}

				<a class="page-numbers anchor2" href="?page=1">1</a>
				<a class="page-numbers anchor2" href="?page=2">2</a>

//  				{% if pag_movies.has_next %}
//  					<a class="next page-numbers" href="?page={{ pag_movies.next_page_number }}">Next</a>
//  				{% endif %}
				<a class="page-numbers anchor2" href="?page={{ pag_movies.paginator.num_pages }}">Last</a>

			</div>
        )
    }

}


export default ListApp