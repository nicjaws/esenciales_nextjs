import fetcher from "@/utils/fetcher";
import { Image as ImageType } from "@/types";

type ImageDateProps = {
  image: ImageType;
};

type StaticPropsParams = {
  params: any;
};

const ImageDate = ({ image }: ImageDateProps) => {
  return (
    <div>
      <h2>{image.title}</h2>
      <img src={image.url} alt={image.title} />
      <h3>{image.date}</h3>
      <p>{image.explanation}</p>
    </div>
  );
};

export async function getStaticProps({ params }: StaticPropsParams) {
  const { date } = params;

  try {
    const image = await fetcher(`&date=${date}`);
    console.log(image);

    return {
      props: {
        image,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
export default ImageDate;
