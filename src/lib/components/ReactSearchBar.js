import React, {Component} from 'react';
import axios from 'axios';
import './ReactSearchBar.scss';
import CustomHTMLElement from './CustomHTMLElement';
import './font-awesome-4.7.0/css/font-awesome.scss';
import {ReactHintFactory} from 'react-hint'
import 'react-hint/css/index.css';

const ReactSearchBar = (props) => {
    return (
      <Search
        searchCriterias={props.searchCriterias}
        apiUrl={props.apiUrl}
        resultCallBack={props.handleSearchResult}
      />
    );
}

const ReactHint = ReactHintFactory(React);

class Search extends Component {
  constructor(props){
    super(props);
    this.state ={
      term: props.term || '',
      displayDropdown: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onSearchbarDropdownClick = this.onSearchbarDropdownClick.bind(this);
  }

  //populate the downn and other search Criteria
  componentDidMount(){
    this.handleSearchResultAPICall();
  }

  handleSearchResultAPICall(){
    this.onAPISubmitCallback("result data");
    // axios({
    //   method: 'get',
    //   url: `this.apiUrl?q=this.state.term`,
    //   responseType: 'json'
    // })
    // .then(response => {
    //   console.log(response)
    //   let searchResult = JSON.parse(response.data);
    //   this.onAPISubmitCallback(searchResult);
    //   alert(searchResult);
    //  })
    // .catch(error => {
    //   this.onAPISubmitCallback(error)
    // });
  }

  handleChange(term){
    this.setState({term});
  }

  //api call return callback with result
  //ex: GET https://www.googleapis.com/customsearch/v1?key=AIzaSyCyD5rlZYbhPF0iSB3UsGYnbf-T32_Wmx4&cx=005029400034090761897:y8ewybjaisi&q=lectures
  //google api key AIzaSyCyD5rlZYbhPF0iSB3UsGYnbf-T32_Wmx4
  //search engine id 005029400034090761897:y8ewybjaisi
  handleFormSubmit(e){
    e.preventDefault();
    debugger
    this.handleSearchResultAPICall();
  }

  onAPISubmitCallback(response){
    // this.props.resultCallBack(response);
  }

  onSearchbarDropdownClick(event){
    let toggleDropdown = this.state.displayDropdown ? false : true;
    this.setState({
      displayDropdown: toggleDropdown
    });
  }

  render(){
    let farCaretArrow = 'fa-angle-down', searchToolTipText = 'show';
    if (this.state.displayDropdown){
      farCaretArrow = 'fa-angle-up';
      searchToolTipText = 'hide';
    }
    else{
      farCaretArrow = 'fa-angle-down';
      searchToolTipText = 'show';
    }

    const htmlElements = this.props.searchCriterias.map((criteria, index) =>{
                          let key = Object.keys(criteria.data)[0];
                          return (
                              <CustomHTMLElement
                                 key={key}
                                 onChange={event => this.handleChange(event.target.value)}
                                 criteria={criteria}
                                 name={key}
                                 index={index}
                              />
                          );
                        });
    let dropdownBody = this.state.displayDropdown ?
                            <form className="clearfix" onSubmit={this.handleFormSubmit}>
                              {htmlElements}
                              <button type="submit">Search</button>
                            </form>
                          : '';
    return (
      <div className="loan-searchbar">
        <ReactHint events delay={100} />
        <ReactHint attribute="data-custom" className="custom-hint"
                ref={(ref) => this.instance = ref} />

        <div className="loan-searchbar-header"> {/*lsh = loan-searchbar-header*/}
          <span>Search Criteria</span>
          <i
            data-rh={`${searchToolTipText}`}
            data-rh-at="top"
            onClick={this.onSearchbarDropdownClick}
            className={`fa ${farCaretArrow} loan-searchbar-dropdown`}
            aria-hidden="true"
            >
          </i>
        </div>
        <div className="loan-searchbar-body clearfix">
          {dropdownBody}
        </div>
      </div>
    );
  }
}

export default ReactSearchBar;
