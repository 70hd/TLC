import Card from './food-card';



const MiniProductComponent = ({
  sides
}) => {
    return (
    <div className="w-full flex h-fit gap-9">
      {Array.isArray(sides) && sides.map(({ title, miniTitle, image, link }, index) => (
        <Card key={index} title={title} miniTitle={miniTitle} image={image} link={link} />
      ))}
    </div>  )
}

export default MiniProductComponent;
