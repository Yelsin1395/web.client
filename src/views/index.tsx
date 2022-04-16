import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { Navbar, Card, LoaderFullPage } from '../components';
import { getAllClient } from '../store/reducers/client/client.action';
import { ClientProxy } from '../proxies';

const App = ({ clients, getAllClient }: any) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const result = await ClientProxy.getListClients();
        getAllClient(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [getAllClient]);

  return isLoading ? (
    <LoaderFullPage />
  ) : (
    clients.length && (
      <Navbar>
        {clients.map((c: any) => (
          <div className="column is-4" key={c.id}>
            <Card
              image_url={c.image_url}
              name={c.name}
              surname={c.surname}
              age={c.age}
              date_of_birth={c.date_of_birth}
            />
          </div>
        ))}
      </Navbar>
    )
  );
};

const mapStateToProps = (state: any) => {
  return {
    clients: state.client,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getAllClient: (value: any) => dispatch(getAllClient(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
