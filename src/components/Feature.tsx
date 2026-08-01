
type FeatureProps = {
  blok: any
}

const Feature = ({ blok }: FeatureProps) => {
  return (
    <div className="feature">
      <span>{blok.name}</span>
    </div>
  );
}

export default Feature