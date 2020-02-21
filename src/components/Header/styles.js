import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 60px;
  width: 100%;
  background: #dc493a;
  color: #fff;
  padding: 0 30px;
  font-size: 20px;

  .user-login {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    min-width: 150px;

    svg,
    button {
      cursor: pointer;
    }

    button {
      padding: 5px 10px;
      border-radius: 5px;
      border: none;
    }

    button:hover {
      background-color: #262626;
      color: #fff;
    }
  }
`;

export const Icon = styled.div`
  .iconReact {
    font-size: 35px;
    color: #fff;
    /* animation-name: girando; */
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes girando {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
