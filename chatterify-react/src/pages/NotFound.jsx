import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

export default function NotFound() {
  usePageTitle('Seite nicht gefunden');
  return (
    <section className="page-header" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 className="section-title notfound-title" style={{ fontSize: '120px', marginBottom: '16px' }}>404</h1>
        <p style={{ fontSize: '20px', marginBottom: '32px' }}>Diese Seite existiert leider nicht.</p>
        <Link to="/" className="btn btn-solid">Zurück zur Startseite</Link>
      </div>
    </section>
  );
}
