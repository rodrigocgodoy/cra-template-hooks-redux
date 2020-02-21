import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/all';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import allActions from '../../store/actions';

import { Container } from './styles';

export default function Home() {
  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();

  function counterIncrementUm() {
    dispatch(allActions.counterActions.incrementUm());
  }
  function counterDecrementUm() {
    dispatch(allActions.counterActions.decrementUm());
  }
  function counterIncrementDez() {
    dispatch(allActions.counterActions.incrementDez());
  }
  function counterDecrementDez() {
    dispatch(allActions.counterActions.decrementDez());
  }

  return (
    <>
      <Header />
      <Container>
        <div className="groupCounter">
          <p>Counter = {counter}</p>
          {Math.sign(counter) === -1 ? (
            <FaArrowCircleDown className="down" />
          ) : (
            <FaArrowCircleUp className="up" />
          )}
        </div>
        <div className="groupButtons">
          <button
            className="green"
            type="button"
            onClick={() => counterIncrementUm()}
          >
            +1
          </button>
          <button
            className="red"
            type="button"
            onClick={() => counterDecrementUm()}
          >
            -1
          </button>
          <button
            className="green"
            type="button"
            onClick={() => counterIncrementDez()}
          >
            +10
          </button>
          <button
            className="red"
            type="button"
            onClick={() => counterDecrementDez()}
          >
            -10
          </button>
        </div>
      </Container>
      <Footer>
        <p>Footer</p>
      </Footer>
    </>
  );
}
