const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className="bg-slate-800 text-white font-bold text-sm text-center py-4 px-6 mt-auto">
            Copyright &copy; Ahmed Lebda {date}
        </footer>
    );
};

export default Footer;
