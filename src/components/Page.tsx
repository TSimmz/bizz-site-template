import { StoryblokServerComponent } from "@storyblok/react/rsc";

type PageProps = {
  blok: any
}

const Page = ({ blok }: PageProps) => {
  return (
    <main>
      {blok.body?.map((nestedBlok: any) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}

export default Page