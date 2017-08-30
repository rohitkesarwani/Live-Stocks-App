import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './materialize/dist/css/materialize.min.css';


var ws = new WebSocket("ws:stocks.mnet.website");//ws:stocks.mnet.website
ws.onopen=function(event)
{
	console.log("connected")
}

ws.onmessage=function(event)
{
	handleUpdateMessage(event);
}

ws.onerror=function(event)
{
	console.log(event.data);
}

class Sts extends React.Component
{

  render()
  {
    return(
   <StsItems/>
    );
  }
}

 class StsItems extends React.Component
 {
  render() {
    return (
      <div>

        <div id="" className="row items blue lighten-6 white-text valign-wrap center-align">
      <div className="col s4">
      {localStorage.key(0)}
      </div>
      <div className="col s4 green">{localStorage.getItem(localStorage.key(0))}</div>
      <div className="col s4">{localStorage.getItem(localStorage.key(0)+" time")}</div>
      </div>

 
  
  <div id="" className="row items blue lighten-6 white-text valign-wrap center-align">
      <div className="col s4">
      {localStorage.key(2)}
      </div>
      <div className={fl===0? "green" +" col s4": "pink" +" col s4" }>{localStorage.getItem(localStorage.key(2))}</div>
      <div className="col s4">{localStorage.getItem(localStorage.key(2)+" time")}</div>
      </div>

  <div id="" className="row items blue lighten-6 white-text valign-wrap center-align">
      <div className="col s4">
      {localStorage.key(4)}
      </div>
      <div className="col s4 green">{localStorage.getItem(localStorage.key(4))}</div>
      <div className="col s4">{localStorage.getItem(localStorage.key(4)+" time")}</div>
      </div>


<div id="" className="row items blue lighten-6 white-text valign-wrap center-align">
      <div className="col s4">
      {localStorage.key(6)}
      </div>
      <div className="col s4 green">{localStorage.getItem(localStorage.key(6))}</div>
      <div className="col s4">{localStorage.getItem(localStorage.key(6)+" time")}</div>
      </div>



<div id="" className="row items blue lighten-6 white-text valign-wrap center-align">
      <div className="col s4">
      {localStorage.key(8).replace("-time","")}
      </div>
      <div className="col s4 green">{localStorage.getItem(localStorage.key(8))}</div>
      <div className="col s4">{localStorage.getItem(localStorage.key(8)+" time")}</div>
      </div>

      </div>

      );
  }

 }


var a=[],st=[];
var len,i=0;
 var fl=0;

function handleUpdateMessage(event) 
{
	a=JSON.parse(event.data);

  for(i=0;i<a.length;i++)
    {
      if(a[i][1]<localStorage.getItem(a[i][0]))
        fl=1;
      else
        fl=0;
      localStorage.setItem(a[i][0],a[i][1]); 
      localStorage.setItem(a[i][0]+' time',new Date().toLocaleTimeString()); 
    }
    

  len=localStorage.length;


  ReactDOM.render(
    <Sts len={len}/>,
    document.getElementById('root')
  );
}
