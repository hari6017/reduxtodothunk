import $ from 'jquery';

export const adddata = (data)=>
{
  //console.log("in action");
   return {
     type : "addlist",
     data : data,
   }
}


export const makajax = ()=>
{
  return function(dispatch)
  {
    $.ajax(
      {
        url : 'https://api.github.com/repositories?since=364; rel="next"',
        method : 'get',
        success : function(data,err)
        {
          dispatch(adddata(data));
        }
      }
    )
  }
}
