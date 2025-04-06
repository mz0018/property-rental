import { useModalStore } from '../store/modals/useModalStore';

const Navbar = () => {
    const openModal = useModalStore((state) => state.openModal);
    const closeModal = useModalStore((state) => state.closeModal);
    const isAdminModalOpen = useModalStore((state) => state.modals['adminModal']);

  return (
    <>
    <nav className="bg-white dark:bg-gray-900 fixed top-0 w-full border-b border-gray-200 dark:border-gray-600 p-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" className="h-8" />
        </div>
        <div className="flex-grow text-center">
          <span className="text-2xl font-semibold dark:text-white">
            MZ Property Rental
          </span>
        </div>
        <div className="flex-shrink-0">
          <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700"
          onClick={() => openModal('adminModal')} >
            Admin Modal
          </button>
        </div>
      </div>
    </nav>

    {isAdminModalOpen && (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
        <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-xl font-semibold">Admin Modal</h2>
            <button
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
            onClick={() => closeModal('adminModal')}
            >
            Close Modal
            </button>
        </div>
    </div>
    )}
    </>

  );
}

export default Navbar;
