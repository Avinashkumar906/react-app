import React, { Component } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios'
import Pagination from './Pagination'
import Spinner from './Spinner'
import {useParams} from "react-router-dom";

class News extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading:true,
            articles:[],
            currentPage:1,
            pageSize:15,
            lastPage:5
        }
    }
    // () => console.log(this.props);

    handlePageChange = (page) =>{
        this.setState({currentPage:page},()=>this.loadContent())
    } 

    loadContent = () => {
        axios.get(`getTopNews${this.state.currentPage}.json`) //mock data
        // axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEWS_API}&page=${this.state.currentPage}&pageSize=${this.state.pageSize}`)
            .then((res)=>this.setState({articles:res.data.articles,loading:false,lastPage:Math.ceil(res.data.totalResults/this.state.pageSize)}))
            .catch(console.log)
    }

    componentDidMount(){
        this.loadContent();
    }

    render() {
        console.log(useParams().category)
        return (
            <>
                {this.state.loading && <div className='spinnerContainer'><Spinner/></div>}
                <div className='container-fluid pt-4 pb-4'>
                    <div className='h3'>Top Headlines</div>
                    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 g-3">
                        {this.state.articles.map((e,i)=><NewsItem data={e} key={`NewsItem-${i}`}/>)}
                    </div>
                </div>
                <Pagination favorite={'YEllow'} handlePageChange={this.handlePageChange} currentPage={this.state.currentPage} lastPage={this.state.lastPage}/>
            </>
        )
    }
}

export default News
