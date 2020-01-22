import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form';
import { Col } from "react-bootstrap";
// import axios from 'axios';


class Selection extends Component {
    state = {  
        // selectedFile: null
       
    };

    constructor(props) {
        super(props);
        this.state = {
          file: '',
          imagePreviewUrl: ''
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
      }
    
      _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
      }
    
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
    
      render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} />);
        }

   
        return ( 

            <div className="main_div p-4">

                <div className="d-flex">
                    <Col md={4}>
                        <form onSubmit={this._handleSubmit}>
                             <input type="file" onChange={this._handleImageChange} />
                             {/* <button type="submit" onClick={this._handleSubmit}>Upload Image</button> */}
                         </form>
                    </Col>

					
					<Col md={1}></Col>
						<Col md={7}>
							<h3 className="text-center">Selected Image </h3>
                            
                                {$imagePreview}
                   
					    </Col>
					
                </div> 
            </div>
         );
      }

}
export default Selection;