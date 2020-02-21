import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100% - 120px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;

  .groupCounter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    svg {
      margin-left: 15px;
      font-size: 35px;
    }

    svg.down {
      color: red;
    }

    svg.up {
      color: green;
    }
  }

  .groupButtons {
    display: flex;
    margin-top: 50px;

    button {
      font-size: 25px;
      padding: 10px;
      margin: 20px;
      width: 75px;
      height: 75px;
      border-radius: 5px;
    }

    button:hover {
      animation: buttonHover 0.5s linear;
      cursor: pointer;
      border: none;
    }

    button.green:hover {
      background-color: green;
      color: #fff;
    }

    button.red:hover {
      background-color: red;
      color: #fff;
    }

    @keyframes buttonHover {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
