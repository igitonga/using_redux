import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
  {id: 1, name: 'Pingu pingu', price: 2.67, description: 'Penguins of Antartica'},
  {id: 2, name: 'System Design and Architecture', price: 13.99, description: 'Computer Science'},
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map(product => 
            <ProductItem
                key={product.id}
                id={product.id}
                title={product.name}
                price={product.price}
                description={product.description}
            />
         )}
      </ul>
    </section>
  );
};

export default Products;
