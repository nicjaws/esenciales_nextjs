import { Image } from "@/types";
import { useRouter } from "next/router";

const ImageOfTheDay = ({ url, title, date }: Image) => {
  const router = useRouter();

  return (
    <div>
      <img
        src={url}
        alt={title}
        onClick={() => router.push(`/image/${date}`)}
      />
      <h2>{title}</h2>
    </div>
  );
};

export default ImageOfTheDay;
