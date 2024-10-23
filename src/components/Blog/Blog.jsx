import { PiBookmarkSimple } from "react-icons/pi";
import PropTypes from "prop-types";
function Blog({ blog }) {
  const { author, date, daysAgo, readTime, title, tags, img, author_img } =
    blog;

  return (
    <div className="space-y-5 mb-3">
      <div className="">
        <img
          src={img}
          alt={"Name of" + author}
          width="100%"
          className="h-[350px] object-cover rounded-lg"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="">
          <div className="flex items-center gap-6">
            <img
              src={author_img}
              alt={"Name of" + author}
              className="rounded-full w-16 h-16"
            />
            <div className="">
              <h2>{author}</h2>
              <p>
                {date} ({daysAgo} Days ago)
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {readTime + "min read"}
          <span className="cursor-pointer">
            <PiBookmarkSimple />
          </span>
        </div>
      </div>
      <div className="">
        <h1 className="text-xl lg:text-4xl font-bold">{title}</h1>
        {tags.map((t, idx) => (
          <span key={idx}>{` #${t}`}</span>
        ))}
      </div>
      <hr />
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
