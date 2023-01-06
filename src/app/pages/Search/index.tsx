import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { Helmet } from 'react-helmet-async';

export function Search() {
  return (
    <>
      <Helmet>
        <title>Search</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <NavBar />
      <PageWrapper></PageWrapper>
    </>
  );
}
