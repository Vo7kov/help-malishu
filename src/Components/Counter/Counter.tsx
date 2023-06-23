import React, { Component } from 'react';
import { List } from '../List/List';

import './Counter.scss';

type State = {
  hidden: boolean,
  inputValue: string,
};

function getArray(inputValue: string): number[] {
  const result = [];

  // eslint-disable-next-line no-plusplus
  for (let index = 1; index <= +inputValue; index++) {
    result.push(index);
  }

  return result;
}

export class Counter extends Component<{}, State> {
  state: Readonly<State> = {
    hidden: false,
    inputValue: '',
  };

  hide = () => {
    const input = document.querySelector('.counter__input') as HTMLInputElement;

    this.setState({
      hidden: true,
      inputValue: input.value,
    });
  };

  render(): React.ReactNode {
    const { hidden, inputValue } = this.state;

    return (
      <section className="counter">
        {!hidden && (
          <>
            <input
              type="number"
              name="countInput"
              className="counter__input"
              placeholder="Кол-во рядочков"
            />

            <button
              type="button"
              className="button counter__button"
              onClick={this.hide}
            >
              Подтвердить
            </button>
          </>
        )}

        {hidden && (
          <List
            array={getArray(inputValue)}
          />
        )}
      </section>
    );
  }
}
