import Products from "./Products"
import '../Style/ProductsCard.css'

const ProductsCard = () => {
  return (
    <div className='containerProductsCard'>
        <section className='sectionProductsCard'>
            <span>
                <Products />
            </span>
        </section>
    </div>
  )
}

export default ProductsCard
