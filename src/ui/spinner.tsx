import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const Spinner = () => {
  return (
    <Center>
      <Loader type='Puff' color='#00BFFF' height={20} width={20} />
    </Center>
  );
};

export default Spinner;

const Center = styled.div`
  display: flex;
  justify-content: center;
  padding: 2em 0;
`;
