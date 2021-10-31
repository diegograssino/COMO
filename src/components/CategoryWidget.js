import { Dropdown } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';

const CategoryWidget = props => {
  return (
    <Dropdown alignRight className="d-inline-block ms-1">
      <Dropdown.Toggle className="text-light px-2 border-0" variant="outline-primary" size="md" id="dropdown-basic">
        <span className="fw-bold fs-6">
          <FaFilter />
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
