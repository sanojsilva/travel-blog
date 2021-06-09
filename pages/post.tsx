import React from "react";
import Head from "../components/Post/Head";
import Image from "../components/Post/Image";
import ImageGrid from "../components/Post/ImageGrid";
import Paragraph from "../components/Post/Paragraph";
import Text from "../components/Post/Text";
import Text2 from "../components/Post/Text2";

function Post() {
  return (
    <div>
      <Head />
      <div className="mx-auto max-w-7xl">
        <Text />
        <ImageGrid />
        <Text2 />
        <Image />
        <div className="mx-28">
          <Paragraph text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident. Quisque id enim malesuada metus porta sollicitudin id eget orci. Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non." />
        </div>
      </div>
    </div>
  );
}

export default Post;
