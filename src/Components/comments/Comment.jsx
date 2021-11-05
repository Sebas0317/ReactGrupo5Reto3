import React from "react";

class Comment extends React.Component{
  render(props){
    return(
      <>
      <div className={this.props.act}>
        <div className="row text-center p-5">
          <div className="col-sm-4">
            <img className="rounded-circle" src={this.props.img} alt="img_testimony" />
          </div>
          <div className="col-sm-6 d-flex align-items-center">
            <p className="fs-6 m-0">
              {this.props.comentario}
              <br />
              <span className="blockquote-footer">{this.props.user}</span> 
            </p>
          </div>
        </div>
      </div>
    </>
    );
  }
}

export default Comment;