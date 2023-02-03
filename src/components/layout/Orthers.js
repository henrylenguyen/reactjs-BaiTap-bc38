import React from "react";
import Card from "../card/Card";
import CardList from "../card/CardList";
import { URLOthers } from "../URL/URLOthers";


const Others = () => {
  return (
    <div>
      <h1 className="text-center text-white font-bold text-[4rem]">
        Tổng hợp các bài tập nâng cao và bài tập trên lớp của CYBERSOFT
      </h1>
      <CardList>
        {URLOthers.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            image={item.img}
            btnSecondary={true}
            href={item.href}
            hrefOthers={item.hrefOthers}
          ></Card>
        ))}
      </CardList>
    </div>
  );
};

export default Others;
