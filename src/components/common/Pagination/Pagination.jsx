import React from 'react';
import Preloader from "../Preloader/Preloader";
import Pagination from "react-js-pagination";


class PaginationApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        };
    }

    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
        this.props.onPgaeChanged(pageNumber)
    };

    render() {
        return (
            <div >
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.props.pageUsersCount}
                    totalItemsCount={this.props.usersCount}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                    innerClass={"pagination"}
                    itemClass={"page-item"}
                    linkClass={"page-link"}
                    prevPageText={'<'}
                    nextPageText={'>'}
                    firstPageText={'<<'}
                    lastPageText={'>>'}
                />
                <div>
                    {this.props.isFetching ? <Preloader/> : null}
                </div>
            </div>

        );
    }
}
export default PaginationApp;
// const Pagination = (props) => {
//     let pagesCount = Math.ceil(props.usersCount / props.pageUsersCount);
//     let pages = [];
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i);
//     }
//     return(
//             <div>
//                 {
//                     pages.map(p => {
//                         return <span className={props.currentPage === p ? s.currentPage : s.numberPage}
//                                      onClick={(e) => props.onPgaeChanged(p)}>{p}</span>
//                     })
//
//                 }
//                 <span> > </span>
//                 <div>
//                     {props.isFetching ? <Preloader/> : null}
//                 </div>
//             </div>
//     )
// };
