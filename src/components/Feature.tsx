import { type SbBlokData } from "@storyblok/react/rsc";

interface FeatureBlokData extends SbBlokData {
  name: string
}

type FeatureProps = {
  blok: FeatureBlokData
}

const Feature = ({ blok }: FeatureProps) => {
  return (
    <div className="feature">
      <span>{blok.name}</span>
    </div>
  );
}

export default Feature