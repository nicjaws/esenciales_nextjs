import fetcher from "@/utils/fetcher";
import ImageOfTheDay from "@/components/ImageOfTheDay";
import Last10DaysImages from "@/components/Last10DaysImages";
import { Image } from "@/types";

type HomeProps = {
  imageOfTheDay: Image;
  last10DaysImages: Image[];
};

export default function Home({ imageOfTheDay, last10DaysImages }: HomeProps) {
  return (
    <>
      <ImageOfTheDay {...imageOfTheDay} />
      <Last10DaysImages images={last10DaysImages} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const imageOfTheDay = await fetcher();
    const last10DaysImages = await fetcher(
      "&start_date=2023-03-25&end_date=2023-04-03"
    );
    return {
      props: {
        imageOfTheDay,
        last10DaysImages,
      },
    };
  } catch (error) {
    console.error(error);
  }
}
