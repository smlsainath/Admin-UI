import React, {Component} from 'react'
import ReactPaginate from 'react-paginate';
import axios from '../../../node_modules/axios'

import './index.css'
import AdminItem from '../AdminItem';

export default class Sample extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 10,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
}


componentDidMount() {
        this.receivedData()
    }

handlePageClick = (e) => {
    const selectedPage = e.selected;
    const {perPage} = this.state
    const offset = selectedPage * perPage;

    this.setState({
        currentPage: selectedPage,
         offset
    }, () => {
        this.receivedData()
    });

};

receivedData(){
    const{adminData} = this.props 
    
   
    
    // axios
    //  .get(apiUrl)
    //     .then(res => {

                const data = adminData;
               

                const {offset,perPage} = this.state
                const slice = data.slice(offset, offset + perPage)
                const postData = slice.map(pd => <>
                    <AdminItem key={pd.id} admin={pd} />
                </>)

                this.setState({
                    pageCount: Math.ceil(data.length / perPage),

                    postData
                })
            
    }
    

    
    render() {
        const{postData, pageCount} = this.state
        return (
            <div>
                {postData}
                <ReactPaginate
                    previousLabel="prev"
                    nextLabel="next"
                    breakLabel="..."
                    breakClassName="break-me"
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName="pagination"
                    subContainerClassName="pages pagination"
                    activeClassName="active" />
            </div>

        )
    }
}