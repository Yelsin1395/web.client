import { useState } from 'react';
import { ClientProxy } from '../proxies';
import { useNavigate } from 'react-router-dom';

const CreateClient = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [clientState, setClientState] = useState({
    image_url: null,
    name: null,
    surname: null,
    date_of_birth: null,
  });

  const handleState = (nextState: any) => {
    setClientState({
      ...clientState,
      ...nextState,
    });
  };

  const handleChange = (e: any) => {
    handleState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let resetValuesObject: any = {};

    if (Object.values(clientState).some((item) => item === '')) {
      for (const entry of Object.entries(clientState)) {
        const key = entry[0];
        const value = entry[1] === '' ? null : entry[1];
        resetValuesObject[key] = value;
      }
    }

    handleState(resetValuesObject);

    if (Object.values(clientState).some((x) => x === null)) {
      window.alert('Todos los campos son requeridos');
    } else {
      try {
        setIsLoading(true);
        const { newId } = await ClientProxy.createClient(clientState);
        if (newId) {
          navigate('/');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <nav className="level has-background-primary" style={{ padding: '10px' }}>
        <div className="level-item has-text-centered">
          <h1 className="title has-text-white">Crear cliente</h1>
        </div>
      </nav>

      <div className="container is-fluid">
        <div className="columns is-multiline">
          {isLoading && (
            <div className="column is-12">
              <progress className="progress is-small is-primary" max="100">
                15%
              </progress>
            </div>
          )}
          <div className="column is-6">
            <div className="field">
              <label className="label">Imagen url</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  pattern="/^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!]))?/g"
                  name="image_url"
                  placeholder="Ingrese imagen url"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className="field">
              <label className="label">Nombre</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Ingrese nombre"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className="field">
              <label className="label">Apellido</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="surname"
                  placeholder="Ingrese apellido"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className="field">
              <label className="label">Fecha de nacimiento</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="date_of_birth"
                  placeholder="Ingrese fecha de nacimiento"
                  onChange={handleChange}
                />
              </div>
              <p className="help">Formato: Año/Mes/día</p>
            </div>
          </div>
          <div className="column is-12 is-centered">
            <button className="button is-primary" onClick={handleSubmit}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateClient;
