import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="page-header" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 className="section-title" style={{ marginBottom: '16px' }}>Etwas ist schiefgelaufen</h1>
            <p style={{ fontSize: '18px', marginBottom: '32px' }}>Bitte laden Sie die Seite neu oder kehren Sie zur Startseite zurück.</p>
            <Link to="/" className="btn btn-solid" onClick={() => this.setState({ hasError: false })}>
              Zurück zur Startseite
            </Link>
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}
