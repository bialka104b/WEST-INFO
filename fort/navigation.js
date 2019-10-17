class Navigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link"
              id="kalkulator-tab"
              href="../index.html"
              role="tab"
              aria-controls="kalkulator"
              aria-selected="true"
            >
              Rzemiosło
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="kalendarz-tab"
              href="../zadaniaPowtarzalne/zadaniaPowtarzalne.html"
            >
              Kalendarz zadań powtarzalnych
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="zadaniaBeta-tab"
              href="../zadaniaBeta/zadaniaBeta.html"
            >
              Zadania z Bety
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" id="fort-tab" href="#fort">
              Forty
            </a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
