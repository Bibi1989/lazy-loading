import React from "react";
import styled from "styled-components";

const PostCard = ({ post: { title, body, id } }: any) => {
  return (
    <Poststyle>
      <h1>{id}</h1>
      <h3>{title}</h3>
      <p>{body}</p>
    </Poststyle>
  );
};

export default PostCard;

const Poststyle = styled.div`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.09);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;

  h3 {
    margin: 0;
  }

  p {
    color: #777777;
  }
`;
