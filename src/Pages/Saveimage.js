import React,{Component} from 'react';
import FileUpload from './FileUpload'


class Saveimage extends Component{
    constructor(){

        this.state = {
            loading: false,
            error: undefined,
            category: {
              data: undefined
            },
            product: {
              data: undefined
            },
            form:{
              name: "",
              description: "",
              price: "",
              cmbCategory: "",
              file: ""
            }
          };

    }
    
    getFiles = file => {
        this.setState({ 
          form:{
            ... this.state.form, 
              file: file
          }
           });
      };

    render(){
        return(
        <div>
            

            <FileUpload
                onDone={this.getFiles.bind(this)}
                name="file"
                value={this.state.form.file}
                onChange={this.getFiles.bind(this)}
            />
          </div>
        )       

}
}

export default Saveimage;