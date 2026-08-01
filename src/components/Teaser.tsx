
type TeaserProps = {
  blok: any
}

const Teaser = ({ blok }: TeaserProps) => {
  return (
    <div className="teaser">
      <h2>{blok.headline}</h2>
    </div>
  );
}

export default Teaser