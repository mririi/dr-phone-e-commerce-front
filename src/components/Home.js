import HomeSlider from "./HomeSlider";
import ProductSlider from "./ProductSlider";
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate('/products');
  }
    return(
      <div className="container">
        <HomeSlider />
          <div>
            <div style={{display:'flex',width:'95%',justifyContent:'space-between',marginTop:50}}>
              <h1>Our Latest Products</h1>
              <div onClick={()=>navigateTo()}>
                <h5>View More</h5>
              </div>
            </div>
              <ProductSlider />
          </div>
      </div>
    );
}
export default Home;
