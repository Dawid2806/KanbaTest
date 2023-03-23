import { FaqItem } from "@/components/Atoms/FaqItem";
import { useWordPressData } from "@/hooks/useWordPressData ";
import React, { useState } from "react";

export const Faq = () => {
  const { data, isLoading, isError } = useWordPressData({ endpoint: "Faq" });
  const [activeId, setActiveId] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const showHandler = (id: string) => {
    if (id === activeId) {
      setShowAnswer(!showAnswer);
    } else {
      setActiveId(id);
      setShowAnswer(true);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error while fetching data</div>;
  }

  return (
    <div className="flex flex-col  w-2/4 mx-auto my-20 ">
      {data?.map((post) => (
        <FaqItem
          key={post.date}
          onClick={() => showHandler(String(post.id))}
          active={String(post.id) === String(activeId) && showAnswer}
          title={post.title.rendered}
          content={post.content.rendered}
        />
      ))}
    </div>
  );
};
