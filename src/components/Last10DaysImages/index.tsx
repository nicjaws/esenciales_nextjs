import { Image } from "@/types";

type Last10DaysImagesProps = {
  images: Image[];
};

const Last10DaysImages = ({ images }: Last10DaysImagesProps) => {
  return (
    <>
      <h2>Ultimos 10 dias</h2>
      {images?.map((image, index) => (
        <div key={image.title}>
          <img src={image.url} alt={image.title} />
        </div>
      ))}
    </>
  );
};

export default Last10DaysImages;
