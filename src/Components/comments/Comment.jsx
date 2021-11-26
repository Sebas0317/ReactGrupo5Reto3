import React from "react";

class Comment extends React.Component{
  render(props){
    return(
      <>
      <div className={this.props.act}>
        <div className="row text-center p-5">
          <div className="col-sm-4">
            <i 
              className="fas fa-user-circle rounded-circle p-1" 
              style={{fontSize:'123px',border:'#AFA3A6 5px solid'}}>
            </i>
          </div>
          <div className="col-sm-6 d-flex align-items-center">
            <p className="fs-6 m-0">
              {this.props.comentario}
              <br />
              <span className="blockquote-footer">
                {this.props.user}&nbsp; | &nbsp;
                {this.props.fecha}
              </span> 
            </p>
          </div>
        </div>
      </div>
    </>
    );
  }
}

export default Comment;