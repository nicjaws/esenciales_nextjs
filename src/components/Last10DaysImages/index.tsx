import { Image } from "@/types";
import { useRouter } from "next/router";

type Last10DaysImagesProps = {
  images: Image[];
};

const Last10DaysImages = ({ images }: Last10DaysImagesProps) => {
  const router = useRouter();

  return (
    <>
      <h2>Ultimos 10 dias</h2>
      {images?.map((image, index) => (
        <div key={image.title}>
          <img
            src={image.url}
            alt={image.title}
            onClick={() => router.push(`/image/${image.date}`)}
          />
        </div>
      ))}
    </>
  );
};

export default Last10DaysImages;
