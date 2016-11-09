import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <div className="container">
            <h1>Hello</h1>

            <div className="App" data-reveal id="exampleModal1">
                <div className="modal-background"></div>
                <section className="modal">
                    <div className="modal-header">
                        <h2 className="modal-header-title">A Modal Title</h2>
                    </div>
                    <div className="modal-body">
                        <h4>Some Modal Content</h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
                        necessitatibus consequuntur quo totam quos, odio impedit. Nostrum pariatur,
                        culpa blanditiis. Nostrum ipsam maiores sed dolores adipisci qui itaque,
                        commodi accusantium.
                        </p>
                    </div>
                    <div className="modal-footer">
                        <a className="modal-footer-link" ng-click="modalContentCtrl.cancel($event)" href="#">
                            Cancel modal
                        </a>
                        <a className="button button--small button--primary" ng-click="modalContentCtrl.ok($event)" href="#">
                            Primary modal action
                        </a>
                    </div>
                </section>

                <button
                    className="button"
                    id="openModal--formatted"
                    data-open="exampleModal1">
                    Prompt
                </button>
            </div>
        </div>
    );
  }
}

export default App;
