import React from 'react';
import Example from '../lib/components/Example';
import  ReactSearchBar from '../lib/components/ReactSearchBar';

function action(criteria, type){
  return {
    type: type,
    data: criteria
  }
}

const App = () => {
  const searchCriterias = [
                          action({date: ['all dates', 'custom']}, 'DROPDOWN'),
                          action({startDate: ['from']}, 'CALENDAR'),
                          action({endDate: ['to']}, 'CALENDAR'),
                          action({searchTerm: 'irma'}, 'INPUT'),
                          action({loan: ["loans numbers", 'verification', 'secondary']}, 'DROPDOWN'),
                          action({package: ["all packages types", 'verification', 'secondary']}, 'DROPDOWN'),
                          action({delivery: ["all packages delivery", 'verification', 'secondary']}, 'DROPDOWN'),
                          action({groups: ["all groups", 'verification', 'secondary']}, 'DROPDOWN'),
                          action({groups1: ["all groups1", 'verification', 'secondary']}, 'DROPDOWN'),
                          action({status: ["All status", 'no status']}, 'DROPDOWN'),
                          action({eclosing: ''}, 'CHECKBOX')
                        ]
  return (
    <div>
      <ReactSearchBar
        searchCriterias={searchCriterias}
        apiUrl='http://api.duckduckgo.com'
        handleSearchResult={result => alert(result)}
      />
      {/*<Example />*/}
    </div>);

};

export default App;
