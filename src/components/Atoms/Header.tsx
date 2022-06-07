import React from 'react';
import styled from 'styled-components/native';

const Header = () => {
  return    <Wrap>여기가헤더</Wrap>;
};

const Wrap = styled.Text`
  width: 200px;
  background-color: red;
`;

export default Header;
