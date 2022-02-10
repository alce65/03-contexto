import './header.css';

export function Footer({ author, brand }) {
    console.log('Footer props:', { author, brand });
    return (
        <footer className="app-footer">
            <address>{author}</address>
            <p>{brand}</p>
        </footer>
    );
}
