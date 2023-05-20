import Catalogue from '../ui/components/catalogue/Catalogue';

import catalogue from '../utils/sample-creator';

export default function Home() {
  return (
    <>
      <Catalogue catalogue={catalogue} />
    </>
  );
}
