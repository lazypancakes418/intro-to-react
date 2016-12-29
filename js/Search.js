import React from 'react';
import preload from '../public/data.json';
import ShowCard from './ShowCard';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.handelSearchTermChange = this.handelSearchTermChange.bind(this);
  }
  handelSearchTermChange (event) {
    this.setState({searchTerm: event.target.value});
  }
  render () {
    return (
      <div className='search'>
        <header>
          <h1>svideo</h1>
          <input onChange={this.handelSearchTermChange} type='text' placeholder='Search' value={this.state.searchTerm} />
        </header>
        <div>
          {preload.shows.filter((show) => {
            return `${show.title} ${show.description}`.toUpperCase()
            .indexOf(this.state.searchTerm.toUpperCase()) >= 0;
          }).map((show) => {
            return (
              <ShowCard show={show} key={show.imdbID} />
            );
          })
          }
        </div>
      </div>
    );
  }
}
export default Search;
