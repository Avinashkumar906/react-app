import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {
    static propTypes = { data: PropTypes.shape({ title: PropTypes.string, description: PropTypes.string }) }

    render() {
        const { title, description, urlToImage, url } = this.props.data;
        return (
            <div className="col" style={{height:'400px'}}>
                <div className="card h-100" >
                    <div className="card-img-top overflow-hidden" style={{height:'160px'}} alt="..." >
                        <img className='h-100 w-100 object-fit-cover' src={urlToImage||'https://placehold.co/400x200?font=roboto'} alt={title}/>
                    </div>
                    <div className="card-body" >
                        <h5 className="card-title overflow-hidden" style={{height:'50px'}}>{title}</h5>
                        <p className="card-text overflow-hidden" style={{height:'95px'}}>{description}</p>
                        <button className='btn btn-secondary btn-sm' onClick={() => window.open(url, '_blank').focus()} >Read</button>
                    </div>
                </div>
            </div>
        )
    }
}

