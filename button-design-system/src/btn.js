import React from 'react';
import './Btn.css';

class Button extends React.Component {
  // No need to use constructor because we are not using state here.
  render() {
    let size = this.props.size;
    let type = this.props.type;
    let border = this.props.border;
    return <>
            <button className={`${size} ${type} ${border}`}>{this.props.down ? <i class="fa fa-arrow-down icon"></i> : ""}Button</button>
           </>
  }
}

export default Button;
