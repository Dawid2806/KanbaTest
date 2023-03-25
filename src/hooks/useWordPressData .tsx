import { useQuery } from "react-query";
import { Post } from "../typs/WordpressTypes";
import process from "process";

type UseWordPressDataProps = {
  endpoint: string;
};

export const useWordPressData = ({ endpoint }: UseWordPressDataProps) => {
  const url = process.env.WORDPRESS_URL;
  const { data, isLoading, isError } = useQuery<Post[], Error>(
    ["wordpress", endpoint],
    async () => {
      const response = await fetch(
        `https://david2806.eu/wp-json/wp/v2/${endpoint}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );

  return {
    data,
    isLoading,
    isError,
  };
};
