import React from 'react';
import 'react-simple-datepicker/dist/index.css';
import DatePicker from 'react-simple-datepicker';

const CustomHTMLElement = (props) => {
  if(!props.criteria){
    return <div>no criterias..</div>
  }
  let breakerClass = ((props.index) % 5) === 0 ? 'breaker' : '';
  switch (props.criteria.type) {
    case 'DROPDOWN':
        let options = props.criteria.data[props.name].map((item) =>{
            return <option key={item} value={item}>{item}</option>
        });
        return(
          <select className={`select-dropdown ${breakerClass}`} name={props.name}>
            {options}
          </select>
        );
      case 'CALENDAR':
        return (
          <div className={`custom-date ${breakerClass}`}>
            <span>{props.criteria.data[props.name][0]}</span>
            <DatePicker
              date={new Date()}
            />
            {/*/ <span className="calendar">
            //   <DatePicker
            //     date={new Date()}
            //   />
            //   <i className="fa fa-calendar"></i>
            // </span>*/}
          </div>
        );
      case 'INPUT':
          return(
          <span className={`${breakerClass}`}>
              <input
                placeholder="search value"
                type="text"
              />
              <span>{'in'}</span>
          </span>
        );
      default:
        return <span className={`${breakerClass}`}></span>
  }
}
export default CustomHTMLElement;
