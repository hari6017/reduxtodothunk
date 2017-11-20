import React from  'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

 class View extends React.Component
{
  constructor()
  {

    super();

  }

  render()
  {
    return (
      <div>

      {this.props.incomplete.map(function(x)
      {
        console.log(x);
        return x.item.map(function(y)
      {
        console.log(y);
        return <h1>{y.id}</h1>
      })
      })}
      </div>
    )
  }
}
function mapStateToProps(state)
{
//console.log("hari",state);
  return {

    incomplete : state,

  }
}

function matchDispatchToProps(dispatch)
{

  return bindActionCreators({},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(View);
