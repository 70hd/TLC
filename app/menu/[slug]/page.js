"use client";

import NotFound from "@/app/not-found";
import SmallCard from "@/app/components/menu-components/small-food-card";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import IconComponent from "@/app/components/foundation-components/icon";
import ClickedComponent from "@/app/components/menu-components/clicked-componenet";
import MiniProductComponent from "@/app/components/menu-components/mini-product-component";
import selectSections from "@/app/props/menu-props/select-sections";
import Link from "next/link";

export default function ProductPage({ params }) {
  const [isSmallScreen, setIsSmallScreen] = useState(() => typeof window !== 'undefined' && window.innerWidth > 1100);
  const { slug } = params;
  const router = useRouter();
  const [clicked, setClicked] = useState(slug);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [miniProduct, setMiniProduct] = useState([])

  // Screen size listener
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth > 1100);
    };

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [miniResponse, smallResponse] = await Promise.all([
          fetch(`/api/miniProductProps/${slug}`),
          fetch(`/api/smallProductProps/${slug}`)
        ])

        if(!miniResponse.ok || !smallResponse) {
          throw new Error("Failed to fetch products");
        }

        const miniData = await miniResponse.json(); 
        const smallData = await smallResponse.json(); 

        setMiniProduct(miniData.miniProduct || []); 
        setProducts(smallData.smallProduct || []);

      } catch (error) {
        console.error("Error fetching products", error); 
        setError(error.message);
      }
    }

    fetchProducts(); 
  }, [slug])



  // fetch prodcuts
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch(`/api/miniProductProps/${slug}`);
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch products');
  //       }
  //       const data = await response.json();
  //       setMiniProduct(data.miniProduct || []); // Corrected line
  //     } catch (error) {
  //       // console.error("Error fetching products:", error);
  //       // setError(error.message);
  //     }
  //   };
  
  //   fetchProducts();
  // }, [slug]);
  

  // Fetch products based on the slug
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch(`/api/smallProductProps/${slug}`);
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch products');
  //       }
  //       const data = await response.json();
  //       setProducts(data.smallProduct || []);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //       setError(error.message);
  //     }
  //   };

  //   fetchProducts();
  // }, [slug]);

  // Handle error state
  if (error) {
    return <NotFound />;
  }

  // Sorting component
  const Sort = () => {
    switch (clicked) {
      default:
        return <MiniProductComponent sides={miniProduct} />;
    }
  };

  // Layout for larger screens
  if (isSmallScreen) {
    return (
      <div className="w-full h-fit space-x-9 flex flex-row custom-padding py-9">
        <div className="w-[285px] h-fit space-y-9 flex flex-col">
          {Object.keys(selectSections).map((section) => (
            <ClickedComponent
              key={section}
              clicked={clicked}
              {...selectSections[section]}
            />
          ))}
        </div>

        <div className="w-full h-fit text-center space-y-9">
          <h1 className="font-normal text-5xl text-[#15767E]">
            THE LITTLE CHIHUAHUA MENU
          </h1>
          <h1 className="font-medium text-2xl text-black">{clicked}</h1>
          <Sort />
        </div>
      </div>
    );
  }

  // Layout for smaller screens
  return (
    <div className="w-full h-fit flex flex-col space-y-9 custom-padding">
      <Link href="../menu" className="w-full">
        <button className="flex flex-row gap-2 items-center justify-center font-regular p2 text-[#51A4FF]">
          <IconComponent
            source="/Left-arrow.svg"
            theHeight={14}
            theWidth={14}
          />
          View Full Menu
        </button>
      </Link>

      <div className="w-full h-fit flex items-start justify-start gap-9 flex-wrap">
        {products.map(({ title, image, link, link2 }, index) => (
          <SmallCard
            key={index}
            title={title}
            image={image}
            link={link}
            link2={link2}
          />
        ))}
      </div>
    </div>
  );
}
