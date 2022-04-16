interface IClient {
  image_url: string;
  name: string;
  surname: string;
  age: number;
  date_of_birth: string;
}

const Card = ({ image_url, name, surname, age, date_of_birth }: IClient) => {
  const year = new Date(date_of_birth).getFullYear();
  const month = new Date(date_of_birth).getMonth() + 1;
  const day = new Date(date_of_birth).getDay();
  const fullDateBirth = `${year}/${month}/${day}`;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image_url} alt={name} style={{ objectFit: 'cover' }} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-6">
              {name} {surname}
            </p>
          </div>
        </div>

        <div className="content">
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Edad</p>
                <p className="title is-6">{age}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Fecha de nacimiento</p>
                <p className="title is-6">{fullDateBirth}</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Card;
