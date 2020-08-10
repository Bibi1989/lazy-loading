import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useFetch } from "../hooks/useFetch";
import { PInterface, FInterface } from "../Interfaces/PostInterface";
import PostCard from "./Post";
import axios from "axios";
import Spinner from "../ui/spinner";

const Post = () => {
  const url: string = "https://jsonplaceholder.typicode.com/posts";
  const result: FInterface = useFetch(url);
  const buttonRef = useRef<any>({});
  const [posts, setPosts] = useState<PInterface[]>([]);
  // const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const fetchPosts = async () => {
    const response = await axios.get(url);
    setPosts(response.data.slice(0, 10));
  };

  const loadMore = () => {
    setPosts([...posts, ...result.data.slice(page * 10, (page + 1) * 10)]);
    setPage(page + 1);
  };

  const handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const maxHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom + 6 > maxHeight - 10) {
      buttonRef.current.click();
    }
  };
  console.log(posts);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Grid>
        {posts.map((post: PInterface) => (
          <PostCard post={post} key={post.id} />
        ))}
      </Grid>
      {!result.loading && <Spinner />}
      <div className='ref' ref={buttonRef} onClick={() => loadMore()}></div>
    </div>
  );
};

export default Post;

const Grid = styled.div`
  padding: 2% 10%;
`;
