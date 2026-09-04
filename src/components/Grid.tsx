import { StoryblokServerComponent } from "@storyblok/react/rsc";
import { type SbBlokData } from "@storyblok/react/rsc";

interface GridBlokData extends SbBlokData {
  columns: SbBlokData[]
}
type GridProps = {
  blok: GridBlokData
}

const Grid = ({ blok }: GridProps) =>{
  return (
    <div className="grid">
      {blok.columns?.map((nestedBlok: any) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}

export default Grid