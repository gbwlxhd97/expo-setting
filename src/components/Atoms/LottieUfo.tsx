// import styled from 'styled-components/native';
// import React, { useEffect, useRef } from 'react';
// import LottieUfoJson from 'assets/lottie/ufo.lottie.json';
// import AnimatedLottieView from 'lottie-react-native';
// import { Text } from 'react-native';

// type Props = {
//   ufoMessage: string | null;
// };

// const LottieUfo = (): any => {
//   const ufoRef = useRef<any>(null);
//   useEffect(() => {
//     setTimeout(() => ufoRef.current?.play());
//     return () => {
//       ufoRef.current?.reset();
//     };
//   }, []);
//   return (
//     <Container>
//       <AnimatedLottieView  ref={ufoRef} source={LottieUfoJson}/>
//     </Container>
//   );
// };

// const Container = styled.View`
//   display: flex;
//   flex-direction: column;
//   width: 300px;
//   height: 300px;
//   justify-content: center;
//   align-items: center;
// `;
// const UfoAnimationDiv = styled.View``;

// export default LottieUfo;
