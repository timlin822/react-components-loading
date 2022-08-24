import FaLoading from 'components/loading/FaLoading';
import LoadingDots from 'components/loading/LoadingDots';
import LoadingSpinner from 'components/loading/LoadingSpinner';

import './App.css';

function App() {
  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <FaLoading />
        <LoadingDots />
        <LoadingSpinner />
      </div>
    </section>
  );
}

export default App;