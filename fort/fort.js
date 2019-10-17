class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="tab-content" id="myTabContent">
          {/* <!--RZEMIOSLO--> */}
          <div
            class="tab-pane"
            id="kalkulator"
            role="tabpanel"
            aria-labelledby="kalkulator-tab"
          ></div>
          {/* <!--KALENDARZ ZADAN POWTARZALNYCH--> */}
          <div
            class="tab-pane"
            id="kalendarz"
            role="tabpanel"
            aria-labelledby="kalendarz-tab"
          ></div>
          {/* <!--ZADANIA Z BETY--> */}
          <div
            class="tab-pane"
            id="zadaniaBeta"
            role="tabpanel"
            aria-labelledby="zadaniaBeta-tab"
          ></div>
          {/* <!--MAPKI FORTOWE--> */}
          <div
            class="tab-pane show active"
            id="fort"
            role="tabpanel"
            aria-labelledby="fort-tab"
          >
            <section id="sekcja-fort">
              <div id="mapy-fort">
                <div class="row miesiac">
                  <div class="col-12">
                    <h2 class="linia-4">Mały fort</h2>
                    <div class="mapy-tabela linia-4-zwin">
                      <img
                        src="../image/maly.png"
                        alt="Mapka mały fort"
                        class="img-responsive mapafortu"
                      />
                    </div>
                  </div>
                </div>
                <div class="row miesiac">
                  <div class="col-12">
                    <h2 class="linia-3">Średni fort</h2>
                    <div class="mapy-tabela linia-3-zwin">
                      <img
                        src="../image/sredni.png"
                        alt="Mapka średni fort"
                        class="img-responsive mapafortu"
                      />
                    </div>
                  </div>
                </div>
                <div class="row miesiac">
                  <div class="col-12">
                    <h2 class="linia-2">Duży fort</h2>
                    <div class="mapy-tabela linia-2-zwin">
                      <img
                        src="../image/duzy.png"
                        alt="Mapka duży fort"
                        class="img-responsive mapafortu"
                      />
                    </div>
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
