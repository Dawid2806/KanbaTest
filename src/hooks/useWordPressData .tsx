import { useQuery } from "react-query";
import { Post } from "../typs/WordpressTypes";
type UseWordPressDataProps = {
  endpoint: string;
};

export const useWordPressData = ({ endpoint }: UseWordPressDataProps) => {
  const { data, isLoading, isError } = useQuery<Post[], Error>(
    ["wordpress", endpoint],
    async () => {
      const response = await fetch(
        `http://serwer188687.lh.pl/autoinstalator/serwer188687.lh.pl/wordpress16171/wp-json/wp/v2/${endpoint}`
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
