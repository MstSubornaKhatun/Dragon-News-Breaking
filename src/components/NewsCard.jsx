import React from "react";
import {
  FaRegBookmark,
  FaShareAlt,
  FaEye,
  FaStar
} from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    rating,
    total_view,
    image_url,
    details,
  } = news;

  return (
    <div className="card bg-base-100 shadow-lg mb-6">

      {/* Author Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-base-200 rounded-t-lg">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm opacity-70">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-xl opacity-70">
          <FaRegBookmark className="cursor-pointer hover:opacity-100" />
          <FaShareAlt className="cursor-pointer hover:opacity-100" />
        </div>
      </div>

      {/* Body */}
      <div className="card-body">

        {/* Title */}
        <h2 className="card-title text-xl font-bold">
          {title}
        </h2>

        {/* Image */}
        <figure className="my-4">
          <img
            src={image_url}
            alt={title}
            className="rounded-xl"
          />
        </figure>

        {/* Meta Text */}
        <p className="text-sm opacity-70">
          Wednesday, {new Date(author.published_date).toDateString()} | Worthy News
        </p>

        {/* Details */}
        <p>
          {details.slice(0, 220)}...
        </p>

        {/* Read More */}
        <p className="text-orange-500 font-semibold cursor-pointer">
          Read More
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">

          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-500">
            {Array.from({ length: rating.number }).map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-2 text-black">{rating.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 opacity-80">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewsCard;
