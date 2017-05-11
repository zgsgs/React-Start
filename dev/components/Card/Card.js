import React, {Component}from 'react';
import ReactDOM from 'react-dom';


class Card extends Component {

    render() {
       var cardStyle = {
            height: 200,
            width: 150,
            padding: 0,
            backgroundColor: "#FFF",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)"
       };
        return (
            <div>
                <p>我在Card的肚子里！</p>
                
            </div>
        ); 
    }
}

var app = document.querySelector("#app");

ReactDOM.render(
            <div>
            {/*I am a child comment.*/}
                <Card />
            </div>,
            app
        );

export default Card;