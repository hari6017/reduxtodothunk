var i=0;
var j=0;
export default function(state=[],action)
{
  //console.log("in reducer",action,state);

  switch (action.type) {
    case "addlist":
      return [...state,{item :action.data}]


  }
  return state;
}
