import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'babel-register';
class Stocks extends React.Component
{
	

	createStock()
	{
		return <Stock name={this.props.name} price={this.props.price}/>

	}

	
	render()
	{
		return (<div> 
		{this.createStock()}
		</div>


		);
	}
}

class Stock extends React.Component
{
	render()
	{
		return (

			<div>
	
				<div className="row items blue lighten-6 white-text  valign-wrap center-align">
					<div className=" col s4">{localStorage.key(0)}</div>
					<div className={localStorage.getItem(localStorage.key(0)+" color")+" col s4"}>{localStorage.getItem(localStorage.key(0))}</div>
					<div className="col s4">{localStorage.getItem(localStorage.key(0)+" time")}</div>
				</div>
	

				<div className="row items blue lighten-6 white-text  valign-wrap center-align">
					<div className="col s4">{localStorage.key(3)}</div>
					<div className={localStorage.getItem(localStorage.key(3)+" color")+" col s4"}>{localStorage.getItem(localStorage.key(3))}</div>
					<div className="col s4">{localStorage.getItem(localStorage.key(3)+" time")}</div>
				</div>


				<div className="row items blue lighten-6 white-text  valign-wrap center-align">
					<div className="col s4">{localStorage.key(6)}</div>
					<div className={localStorage.getItem(localStorage.key(6)+" color")+" col s4"}>{localStorage.getItem(localStorage.key(6))}</div>
					<div className="col s4">{localStorage.getItem(localStorage.key(6)+" time")}</div>
				</div>
				
				<div className="row items blue lighten-6 white-text  valign-wrap center-align">
					<div className="col s4">{localStorage.key(9)}</div>
					<div className={localStorage.getItem(localStorage.key(9)+" color")+" col s4"}>{localStorage.getItem(localStorage.key(9))}</div>
					<div className="col s4">{localStorage.getItem(localStorage.key(9)+" time")}</div>
				</div>

				<div className="row items blue lighten-6 white-text  valign-wrap center-align">
					<div className="col s4">{localStorage.key(12)}</div>
					<div className={localStorage.getItem(localStorage.key(12)+" color")+" col s4"}>{localStorage.getItem(localStorage.key(12))}</div>
					<div className="col s4">{localStorage.getItem(localStorage.key(12)+" time")}</div>
				</div>

				<div className="row items blue lighten-6 white-text  valign-wrap center-align">
					<div className="col s4">{localStorage.key(15)}</div>
					<div className={localStorage.getItem(localStorage.key(15)+" color")+" col s4"}>{localStorage.getItem(localStorage.key(15))}</div>
					<div className="col s4">{localStorage.getItem(localStorage.key(15)+" time")}</div>
				</div>
	
				<div className="row items blue lighten-6 white-text  valign-wrap center-align">
					<div className="col s4">{localStorage.key(18)}</div>
					<div className={localStorage.getItem(localStorage.key(18)+" color")+" col s4"}>{localStorage.getItem(localStorage.key(18))}</div>
					<div className="col s4">{localStorage.getItem(localStorage.key(18)+" time")}</div>
				</div>
				
				<div className="row items blue lighten-6 white-text  valign-wrap center-align">
					<div className="col s4">{localStorage.key(21)}</div>
					<div className={localStorage.getItem(localStorage.key(21)+" color")+" col s4"}>{localStorage.getItem(localStorage.key(21))}</div>
					<div className="col s4">{localStorage.getItem(localStorage.key(21)+" time")}</div>
				</div>
				
				<div className="row items blue lighten-6 white-text  valign-wrap center-align">
					<div className="col s4">{localStorage.key(24)}</div>
					<div className={localStorage.getItem(localStorage.key(24)+" color")+" col s4"}>{localStorage.getItem(localStorage.key(24))}</div>
					<div className="col s4">{localStorage.getItem(localStorage.key(24)+" time")}</div>
				</div>
			
				<div className="row items blue lighten-6 white-text  valign-wrap center-align">
					<div className="col s4">{localStorage.key(27)}</div>
					<div className={localStorage.getItem(localStorage.key(27)+" color")+" col s4"}>{localStorage.getItem(localStorage.key(27))}</div>
					<div className="col s4">{localStorage.getItem(localStorage.key(27)+" time")}</div>
				</div>
			</div>
	

	);
	}
}

var ws = new WebSocket("ws:stocks.mnet.website");
var a,time=[];
ws.onmessage=function(event){

	a=JSON.parse(event.data);
	handleUpdateMessage(a);

}


function handleUpdateMessage(data) {
data.forEach(([name, price]) => time[name]=new Date().getTime());
data.forEach(([name, price]) => localStorage.setItem(name+" time",(new Date().getTime()-time[name]<1) ? "few seconds before" : new Date(time[name]).toLocaleTimeString()));
data.forEach(([name, price]) => console.log(name+' '+price));
data.forEach(([name, price]) => localStorage.setItem(name+" color"," white"));
data.forEach(([name, price]) => localStorage.setItem(name+" color",(price<Number(localStorage.getItem(name)) ? "pink" : "green")));
data.forEach(([name, price]) => localStorage.setItem(name,price));
setInterval(function(){data.forEach(([name, price]) => localStorage.setItem(name+" time",(new Date().getTime()-time[name]<1) ? "few seconds before" : new Date(time[name]).toLocaleTimeString()));},1000)


/*data.forEach(

  ([name, price]) =>ReactDOM.render(<Stocks name={name} price={price}/>,document.getElementById("stocks"))


  )*/

  ReactDOM.render(<Stocks/>,document.getElementById("stocks"))

}



