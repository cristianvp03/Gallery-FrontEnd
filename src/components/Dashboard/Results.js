import React, {Component} from 'react';
import Imagen from './Image';

class Results extends Component {

    MostrarResultado = _ =>{
        const img = this.props.data;
        if(img.length){
            return (
                <React.Fragment>
                    <div className="col-12 p-5 row" >
                        {img.map((im,index) =>(
                            <Imagen key={index} imagen={im}  />
                        ))}
                    </div>                    
                </React.Fragment>
            );
        }           
    }
    render(){
        return (
            <React.Fragment>
                {this.MostrarResultado()}
            </React.Fragment>
            
        );
    }
}


export default Results;