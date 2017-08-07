import React from 'react';

import TopNav from './TopNav';
import InfoModal from './InfoModal';

export default class Header extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      showInfoModal: false
    };
  }

  toggleInfoModal() {
    this.setState({
      showInfoModal: !this.state.showInfoModal
    });
  }

  render() {
    let infoModal;
    if (this.state.showInfoModal) {
      infoModal = <InfoModal onClose={() => this.toggleInfoModal()} />;
    }

    return (
      <header className="app-header">
        <TopNav
          onInfo={() => this.toggleInfoModal()}
          onNewGame={this.props.onNewGame}
        />
        { infoModal }
        <h1>!Hot or Cold!</h1>
      </header>
    );
  }
}
