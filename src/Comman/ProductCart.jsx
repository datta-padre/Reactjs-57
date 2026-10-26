import { Link } from "react-router-dom";

function ProductCart(props) {

  return (
    <>
    <Link to={`/product_det/${props.data.product_tbl_id}`}>
      <div className="w-full max-w-[263px] overflow-hidden rounded-xl bg-white">
        <div className="h-[353px] overflow-hidden rounded-xl bg-gray-100 p-[18px_0]">
          <img
            src={props.data.product_img}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="pt-2">
          <h3 className="truncate text-[17px] font-bold text-[#383838]">
            {props.data.product_name} 
          </h3>

          <div className="mt-1 flex items-center gap-1">
            <span className="text-[17px] text-gray-500 line-through">
              ₹1,499
            </span>

            <span className="text-[20px] font-bold text-[#383838]">₹{props.data.price}</span>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
}

export default ProductCart;
