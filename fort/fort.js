class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false // czy jest kliknięty h2
    };
    this.handleShowFort = this.handleShowFort.bind(this);
  }

  handleShowFort() {
    this.setState(prevState => ({
      isClicked: !this.state.isClicked
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
                    <h2 className="linia-4" onClick={this.handleShowFort}>
                      Mały fort
                    </h2>
                    {this.state.isClicked && (
                      <div className="mapy-tabela linia-4-zwin">
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
                    <h2 className="linia-3" onClick={this.handleShowFort}>
                      Średni fort
                    </h2>
                    {/* <div className="mapy-tabela linia-3-zwin">
                      <img
                        src="../image/sredni.png"
                        alt="Mapka średni fort"
                        className="img-responsive mapafortu"
                      />
                    </div> */}
                  </div>
                </div>
                <div className="row miesiac">
                  <div className="col-12">
                    <h2 className="linia-2" onClick={this.handleShowFort}>
                      Duży fort
                    </h2>
                    {/* <div className="mapy-tabela linia-2-zwin">
                      <img
                        src="../image/duzy.png"
                        alt="Mapka duży fort"
                        className="img-responsive mapafortu"
                      />
                    </div> */}
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
