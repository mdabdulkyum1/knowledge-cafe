import boy from '../../assets/images/boy2.png'
function Header() {
  return (
    <div className="max-w-screen-xl mx-auto border-b-2 py-3 px-4 lg:px-0">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold lg:text-4xl flex items-center">
          Welcome to Knowledge Cafe</h1>
        <img src={boy} alt="boy" width="50px"/>
      </div>
    </div>
  );
}

export default Header;
