import React,{Component} from 'react'
import { Pagination } from 'semantic-ui-react'


 class Paginator extends Component {
    render() {
        const { activePage, totalItem, onPageChange } = this.props;
        return(
            <Pagination
                onPageChange={onPageChange}
                activePage={activePage}
                totalPages={Math.ceil(totalItem / 10)} />
        )
    }
}


export default Paginator;