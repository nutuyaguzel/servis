import style from "./category-box.module.css";
import { Link } from "react-router-dom";

export default function CategoryBox(props) {
  //propsla main componentinde çektiğimiz verinin ürünleri yani küçük kartlara yerleştirdik.

  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 text-bg-primary border-primary">
          <h4 className="my-0 fw-normal">{props.category.name}</h4>
        </div>
        <div className="card-body">
          <img src={props.category.image} className={style.category_image} />

          <Link
            to={"category/details/" + props.category.slug}
            className="w-100 btn btn-lg btn-primary"
          >
            Detaylar
          </Link>
        </div>
      </div>
    </div>
  );
}
