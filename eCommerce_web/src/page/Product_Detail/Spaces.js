const Spaces = (props) => {
    // console.log("Space----props", props.productdata);
    return (
      <>
        <div>
          <div className="about_page">
            {/* <h1 className="Product_name">{props.productdata.product_name}</h1> */}
            
          </div>
          <div className="about_page_image">
            <div className="icon-about">
              <img className="icon-about-1" src="http://localhost:3000/images/icon/like.png" />
              <img className="icon-about-2" src="http://localhost:3000/images/icon/benchmar.png" />
              <img className="icon-about-3" src="http://localhost:3000/images/icon/shared.png" />
            </div>
            {/* <img className="about_page_in_image" src={props.productdata.image} /> */}
          </div>
        </div>
      </>
    );
  }; export default Spaces();