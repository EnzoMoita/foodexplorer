import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { SearchIcon, ReceiptText, LogOut } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-ultra-dark text-white flex justify-between items-center px-12 py-6" 
            style={{ zIndex: 1000, position: 'relative' }}> {/* Adicionando z-index e position */}
      <div className="flex items-center ml-10">
        <img src={logo} alt="Food Explorer logo" className="h-7" />
      </div>
      <div className="flex flex-grow items-center justify-center">
        <div className="flex items-center bg-secondary rounded overflow-hidden">
          <SearchIcon className="mx-4 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            className="bg-secondary w-96 py-2 px-4 focus:outline-none text-gray-500"
          />
        </div>
        <button className="bg-tomato px-8 py-3 ml-12 flex items-center rounded text-white hover:bg-tomato-dark">
          <ReceiptText color="white" size={20} className="mr-2" />
          Pedidos (0)
        </button>
        <Link to="/" className="ml-12">
          <LogOut color="white" size={24} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
