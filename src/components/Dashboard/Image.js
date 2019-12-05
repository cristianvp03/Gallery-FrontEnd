import React,{Component} from 'react'
import axios from 'axios';
import constants from '../../Constants'

var __id='';
var __user_id='';
var __name='';
var prueba=[];
var removeImage = (e) =>{    
    e.preventDefault();
    const urlRemImg =`${constants.Api}/Photo?idPhoto=${__id}&userid=${__user_id}&name=${__name}`;
    axios.delete(urlRemImg)
        .then(response => {
            console.log("Image Remove Successfully");            
        })
        .catch(function (err) {
            console.log("An unexpected error has ocurred");
        });
    window.location.reload();
}

const Imagen = props =>{
    prueba.push(props.imagen);
    const {url,name,user_id,_id} = props.imagen;
    __id=_id;
    __user_id=user_id;
    __name=name;    

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg3 mb-4">
            <div className="card">
                <img src={url}  className="card-img-top" width="250px" height="250px" />
                <div className="card-body">
                    <a href={url} className="btn btn-primary btn-block">Detail Image</a>
                    <button onClick={removeImage} className="btn btn-danger btn-block">Remove Image</button>
                </div>
            </div>
        </div>
    );
}

export default Imagen;