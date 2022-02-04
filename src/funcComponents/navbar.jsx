
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          Navbar Sum product is : {calsum()}
        </a>
      </div>
    </nav>
  );
  function calsum() {
    let sum = 0;
    props.products.forEach((p) => {
      sum += p.count;
    });
    return sum;
  }
};

export default Navbar;
