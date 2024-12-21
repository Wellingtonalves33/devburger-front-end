import { useEffect, useState } from "react";
import { Container,Banner,CategoryMenu,ProductsContainer, CategoryButton, VoltaBtn } from "./styles";
import { api } from "../../services/api";
import { FormatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";
import { useLocation, useNavigate } from "react-router-dom";

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
 

 const  navigate =  useNavigate();

 const { search } = useLocation();

 const queryParams = new URLSearchParams(search);

 const [activeCategory, setActiveCategory] = useState(()=> {
  const categoryId = +queryParams.get('categoria');

  if (categoryId) {
      return categoryId;
  }

  return 0;
 });


        useEffect(() => {
            async function loadCategories() {
                const {data} = await api.get("/categories")

                const newCategories = [{ id: 0, name: 'todas'}, ...data]
             setCategories( newCategories);
            }


            async function loadProducts() {
                const {data} = await api.get('/products')
           
                const newProducts = data
                .filter((product) => product.offer)
                .map((product) => ({ currencyValue: FormatPrice(product.price),
                   ...product,
                   }));
    
                setProducts(newProducts);
            }
          

            loadCategories();
            loadProducts();
        }, []);

        useEffect(() => {
            if(activeCategory === 0) {
                setFilteredProducts(products);
            }else {
                const newFilteredProducts = products.filter(
                    (product) => product.category_id === activeCategory,);

                    setFilteredProducts(newFilteredProducts);
            }
        },[products, activeCategory]) 

    return (
        <Container>
            <Banner>
                <h1> O MELHOR
                    <br />
                    HAMBURGER
                    <br />
                    ESTÁ AQUI
                    <span>Esse cardápio vai te surpreender</span>
                </h1>
               
            </Banner>
            <CategoryMenu>
              <VoltaBtn onClick={() => navigate('/')}>volta</VoltaBtn>
                {categories.map((category) =>(
                   <CategoryButton
                   key={category.id}
                   $isActiveCategory={category.id === activeCategory}
                   onClick={() => {
                     setActiveCategory(category.id);
                     navigate({
                       pathname: '/cardapio',
                       search: `?categoria=${category.id}`,
                     }, {
                       replace: true,
                     });
                   }}
                 >
                   {category.name}
                 </CategoryButton>
                ))}
            </CategoryMenu>

          <ProductsContainer>
            {filteredProducts.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
          </ProductsContainer>
        </Container>

    );
}