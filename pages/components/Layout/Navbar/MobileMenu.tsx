type MobileMenuProps = {
  open: boolean;
};

const MobileMenu = ({ open }: MobileMenuProps) => {
  return open ? (
    <div className="flex flex-col fixed inset-0 bg-black">
      <button className="flex border-2 border-primary items-center justify-center mx-3 mt-24 p-4 text-primary">
        Browse
      </button>
    </div>
  ) : (
    <></>
  );
};

export default MobileMenu;
