// const Details = (props) => {
//   // console.log("Details----props", props.productdata);

//   // const detailsArray = props.productdata.details.split("zzz");
//   const detailsObject = {};

//   detailsArray.forEach(detail => {
//     const [key, ...value] = detail.split(":"); 
//     detailsObject[key.trim()] = key;
//   });
//   console.log("finalValue", detailsObject);
//   return (
//     <>
//       <div>
//         <div className="details_page">
//           {/* <h1 className="Product_name_details">{props.productdata.product_name}</h1> */}
         
//           {Object.entries(detailsObject).map((data, i) => (
//              <div className="product-details-p">
//               <ul>
//               <li key={i} >{data}</li>
//               </ul>
            
//             </div>
//           ))}
          
//         </div>
//         <div className="details_page_image">
//         <div className="icon-details">
//             <img className="icon-about-1" src="http://localhost:3000/images/icon/like.png" />
//             <img className="icon-about-2" src="http://localhost:3000/images/icon/benchmar.png" />
//             <img className="icon-about-3" src="http://localhost:3000/images/icon/shared.png" />
//           </div>
//           {/* <img className="details_page_in_image" src={props.productdata.image} /> */}
//         </div>
//       </div>
//     </>
//   );
// }; export default Details();
