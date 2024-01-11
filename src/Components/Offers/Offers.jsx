import "./offers.css";
import exclusive from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offersLeft">
        <h1>EXCLUSIVE</h1>
        <h1>Offers for you</h1>
        <p>Only the best sellers product</p>
        <button>Check now </button>
      </div>
      <div className="offersRight">
        <img src={exclusive} alt="exclusive image" />
      </div>
    </div>
  );
};

export default Offers;
