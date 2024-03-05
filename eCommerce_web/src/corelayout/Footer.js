import {
  information_text,
  PC_Parts_footer_text,
  Desktop_PCs_footer_text,
  Laptops_footer_text,
  address_footer_text,
} from "../shared/contants";
import { data_Rows } from "../shared/Footer_data";
export default function Footer() {
  return (
    <>
      <div className="footer-sub-div container">
        <div className="footer-sub-1-div">
            <img src="http://localhost:3000/images/Support.png" className="footer-img-support"/>
            <h4>Product Support</h4>
            <p>Up to 3 years on-site warranty <br/> available for your peace of mind.</p>
        </div>
        <div className="footer-sub-2-div">
            <img src="http://localhost:3000/images/Account.png" className="footer-img-support"/>
            <h4>Personal Account</h4>
            <p>With big discounts, free delivery and <br/> a dedicated support specialist.</p>
        </div>
        <div className="footer-sub-3-div">
            <img src="http://localhost:3000/images/Saving.png" className="footer-img-support"/>
            <h4>Amazing Savings</h4>
            <p>Up to 70% off new Products, you can <br/> be sure of the best price.</p>
        </div>
      </div>
      <div className="footer-main-div" >
        <div className="container">
        <h2>Sign Up To Our Newsletter.</h2>
        <h6>Be the first to hear about the latest offers.</h6>
        <div className="information_text">
          <h3>{data_Rows.Rows.info}</h3>
          {information_text.map(iteam => (
            <div>
              <h6>{iteam.info}</h6>
            </div>
          ))}
        </div>

        <div className="PC_Parts_footer_text">
          <h3>{data_Rows.Rows.pc_p}</h3>
          {PC_Parts_footer_text.map(iteam => (
            <div>
              <h6>{iteam.pc_part}</h6>
            </div>
          ))}
        </div>

        <div className="Desktop_PCs_footer_tex">
          <h3>{data_Rows.Rows.desktop_pcs}</h3>
          {Desktop_PCs_footer_text.map(iteam => (
            <div>
              <h6>{iteam.desktops_pcs_text}</h6>
            </div>
          ))}
        </div>

        <div className="Laptops_footer_text">
          <h3>{data_Rows.Rows.laptops}</h3>
          {Laptops_footer_text.map(iteam => (
            <div>
              <h6>{iteam.Laptops_text}</h6>
            </div>
          ))}
        </div>

        <div className="address_footer_text">
          <h3>{data_Rows.Rows.Address}</h3>
          {address_footer_text.map(iteam => (
            <div>
              <h6>{iteam.Laptops_text}</h6>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
}
