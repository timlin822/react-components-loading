import FaLoading from 'components/loading/FaLoading';
import LoadingDots from 'components/loading/LoadingDots';
import LoadingSpinner from 'components/loading/LoadingSpinner';
import LoadingBounce from 'components/loading/LoadingBounce';
import LoadingProgressBar from 'components/loading/LoadingProgressBar';

import './App.css';

function App() {
  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <FaLoading />
        <LoadingDots />
        <LoadingSpinner />
        <LoadingBounce />
        <LoadingProgressBar />
      </div>
    </section>
  );
}

export default App;