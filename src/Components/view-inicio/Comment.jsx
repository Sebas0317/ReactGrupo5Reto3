import React from "react";

class Comment extends React.Component{
  render(props){
    return(
      <>
      <div className={this.props.act}>
        <div className="row text-center p-5">
          <div className="col-sm-4">
            <img className="rounded-circle" src={this.props.img} alt={this.props.img} />
          </div>
          <div className="col-sm-6 d-flex align-items-center">
            <p className="fs-6 m-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vitae similique illum id dolores 
              quos non pariatur sapiente voluptates earum, atque numquam iure deleniti explicabo modi perspiciatis 
              accusantium aliquam dolor!
              <br />
              <span className="blockquote-footer">{this.props.nomCliente}</span> 
            </p>
          </div>
        </div>
      </div>
    </>
    );
  }
}

export default Comment;