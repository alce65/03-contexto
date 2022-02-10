import { Menu } from './menu';

export function Header({ mainTitle, menuOptions, children }) {
    console.log('Header props:', mainTitle);
    return (
        <header className="app-header">
            <div>{mainTitle}</div>
            <p>{children}</p>
            <Menu menuOptions={menuOptions} />
        </header>
    );
}
