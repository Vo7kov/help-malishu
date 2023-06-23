import React, { Component } from 'react';

import './List.scss';

type Props = {
  array: number[],
};

type State = {
  array: number[],
};

export class List extends Component<Props, State> {
  state: Readonly<State> = {
    array: this.props.array,
  };

  removeItem = () => {
    this.setState(state => ({
      array: state.array.filter(number => state.array.indexOf(number) !== 0),
    }));
  };

  render(): React.ReactNode {
    const { array } = this.state;

    return (
      <div
        className="list"
      >
        {array.length !== 0 && (
          <button
            type="button"
            className="button list__button"
            onClick={this.removeItem}
          >
            Удалить выполненный рядочек
          </button>
        )}

        <ul>
          {array.map((number: number) => (
            <li
              key={number}
            >
              {`${number}-й рядочек`}
            </li>
          ))}
        </ul>

        {array.length === 0 && (
          <p>
            {'Ты умничка! <3'}
          </p>
        )}
      </div>
    );
  }
}
