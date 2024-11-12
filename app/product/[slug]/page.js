// app/product/[slug]/page.js
import Products from '@/app/components/foundation-components/products'; // Adjust the import based on your structure
import ProductData from '../../props/product-props/props'; // Renamed to avoid confusion with slug
import NotFound from '@/app/not-found';

export default function ProductPage({ params }) {
  const { slug } = params;

  // Retrieve the product data based on the slug
  const product = ProductData[slug];

  // Return NotFound component if the product doesn't exist
  if (!product) {
    return <NotFound />;
  }

  return (
    <div>
      <Products {...product} slug={slug} />
    </div>
  );
}
