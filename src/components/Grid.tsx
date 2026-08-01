import { StoryblokServerComponent } from "@storyblok/react/rsc";

type GridProps = {
  blok: any
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