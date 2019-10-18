class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked1: false, // czy jest kliknięty h2
      isClicked2: false, // czy jest kliknięty h2
      isClicked3: false // czy jest kliknięty h2
    };
    this.handleShowFort1 = this.handleShowFort1.bind(this);
    this.handleShowFort2 = this.handleShowFort2.bind(this);
    this.handleShowFort3 = this.handleShowFort3.bind(this);
  }

  handleShowFort1(props) {
    this.setState(prevState => ({
      isClicked1: !this.state.isClicked1
    }));
  }
  handleShowFort2(props) {
    this.setState(prevState => ({
      isClicked2: !this.state.isClicked2
    }));
  }
  handleShowFort3(props) {
    this.setState(prevState => ({
      isClicked3: !this.state.isClicked3
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div className="tab-content" id="myTabContent">
          {/* <!--RZEMIOSLO--> */}
          <div
            className="tab-pane"
            id="kalkulator"
            role="tabpanel"
            aria-labelledby="kalkulator-tab"
          ></div>
          {/* <!--KALENDARZ ZADAN POWTARZALNYCH--> */}
          <div
            className="tab-pane"
            id="kalendarz"
            role="tabpanel"
            aria-labelledby="kalendarz-tab"
          ></div>
          {/* <!--ZADANIA Z BETY--> */}
          <div
            className="tab-pane"
            id="zadaniaBeta"
            role="tabpanel"
            aria-labelledby="zadaniaBeta-tab"
          ></div>
          {/* <!--MAPKI FORTOWE--> */}
          <div
            className="tab-pane show active"
            id="fort"
            role="tabpanel"
            aria-labelledby="fort-tab"
          >
            <section id="sekcja-fort">
              <div id="mapy-fort">
                <div className="row miesiac">
                  <div className="col-12">
                    <h2 onClick={this.handleShowFort3}>Mały fort</h2>
                    {this.state.isClicked3 && (
                      <div className="mapy-tabela">
                        <img
                          src="../image/maly.png"
                          alt="Mapka mały fort"
                          className="img-responsive mapafortu"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="row miesiac">
                  <div className="col-12">
                    <h2 onClick={this.handleShowFort2}>Średni fort</h2>
                    {this.state.isClicked2 && (
                      <div className="mapy-tabela">
                        <img
                          src="../image/sredni.png"
                          alt="Mapka średni fort"
                          className="img-responsive mapafortu"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="row miesiac">
                  <div className="col-12">
                    <h2 onClick={this.handleShowFort1}>Duży fort</h2>
                    {this.state.isClicked1 && (
                      <div className="mapy-tabela">
                        <img
                          src="../image/duzy.png"
                          alt="Mapka duży fort"
                          className="img-responsive mapafortu"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
