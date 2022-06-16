import * as React from 'react';
import { Component } from 'react';
import {string, func} from 'prop-types';

type TabProps ={
  activeTab:string;
  label:string;
  onClick:any;
}

class Tab extends Component<TabProps> {
  static propTypes = {
    activeTab: string.isRequired,
    label: string.isRequired,
    onClick: func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <li
        className={className}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }
}

export default Tab;