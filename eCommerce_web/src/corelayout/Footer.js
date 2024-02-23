import { information_text, PC_Parts_footer_text, Desktop_PCs_footer_text, Laptops_footer_text} from "../shared/contants";

export default function Footer() {
  return (
    <>
      <div className="footer-main-div">
        <h2>Sign Up To Our Newsletter.</h2>
        <h6>Be the first to hear about the latest offers.</h6>
        <div className="information_text">
          {information_text.map(iteam => (
            <div>
              <h6>{iteam.info}</h6>
            </div>
          ))}
        </div>

        <div className="PC_Parts_footer_text">
          {PC_Parts_footer_text.map(iteam => (
            <div>
              <h6>{iteam.pc_part}</h6>
            </div>
          ))}
        </div>

        <div className="Desktop_PCs_footer_tex">
          {Desktop_PCs_footer_text.map(iteam => (
            <div>
              <h6>{iteam.desktops_pcs_text}</h6>
            </div>
          ))}
        </div>

        <div className="Laptops_footer_text">
          {Laptops_footer_text.map(iteam => (
            <div>
              <h6>{iteam.Laptops_text}</h6>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
