import { Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CategoryWidget = props => {
  return (
    <Dropdown alignRight className="d-inline-block">
      <Dropdown.Toggle
        className="px-2 border-0 border-1 border-color-itemcount-como button-color-como"
        variant="secondary"
        size="md"
        id="dropdown-basic"
      >
        <span className="fs-6">
          {/* <FaFilter /> */}
          Filtro por categorias
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item key={0} className="text-uppercase">
          <LinkContainer to="/">
            <div>All Products</div>
          </LinkContainer>
        </Dropdown.Item>
        {props.categories.map(category => {
          return (
            <Dropdown.Item key={category.id} className="text-uppercase">
              <LinkContainer to={`/category/${category.title}`}>
                <div>{category.title}</div>
              </LinkContainer>
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CategoryWidget;
