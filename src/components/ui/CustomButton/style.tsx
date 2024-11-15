import styled from 'styled-components';
export default styled.button`
  backgroun-color: ${(props: any) =>
    props.theme.theme === 'dark' ? 'white' : 'black'};
  color: ${(props: any) => (props.theme.theme === 'dark' ? 'black' : 'white')};
`;
