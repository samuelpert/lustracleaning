import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CardItemProps {
  src?: string;
  text: string;
  label: string;
  path: string;
}

const CardItem: React.FC<CardItemProps> = ({ src, text, label, path }) => {
  return (
    <li className="cards__item">
      <Link className="cards__item__link" href={path}>
        <figure className="cards__item__pic-wrap" data-category={label}>
          {src ? (
            <Image
              className="cards__item__img"
              src={src}
              alt={text}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div
              className="cards__item__img"
              style={{
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#666",
              }}
            >
              No Image
            </div>
          )}
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{text}</h5>
        </div>
      </Link>
    </li>
  );
};

export default CardItem;
