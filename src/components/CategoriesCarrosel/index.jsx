import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, ContainerItens, Title } from "./styles";


export function CategoriesCarousel() {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        async function loadCategories() {
            const {data} = await api.get("/categories")
         setCategories(data)
        }
        loadCategories();
    }, []);
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1080 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1080, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 690, min: 0 },
          items: 1
        }
      };

    return (
 
            <Container>
              <Title>Categorias</Title>
              <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={true} 
                itemClass="carousel-item"
              >
                {categories.map((category) => (
                  <ContainerItens key={category.id} imageUrl={category.url}>
                    
                      <p>{category.name}</p>
                  </ContainerItens>
                ))}
              </Carousel>
            </Container>
    )
}