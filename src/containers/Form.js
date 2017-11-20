import React from 'react';

import {adddata} from '../actions/add';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {makajax} from '../actions/add';
class Form extends React.Component
{
   constructor()
   {
     super();
     this.handleclick = this.handleclick.bind(this);
   }
   handleclick()
   {
    //  this.props.adddata(this.refs.value.value);
      this.props.makajax();
   }
   render()
   {
     return(
       <div>
       <input type = "text" ref = "value" />
       <button onClick = {this.handleclick}>Click</button>
       {}
       </div>
     );
   }
}
function matchDispatchToProps(dispatch)
{
  return bindActionCreators({adddata:adddata,makajax:makajax},dispatch);
}

function mapStateToProps(state)
{
  console.log(state);
      return {};
}

export default connect(mapStateToProps,matchDispatchToProps)(Form);
