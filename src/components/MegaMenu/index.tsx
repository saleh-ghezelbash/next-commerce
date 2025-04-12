export default function MegaMenu() {
    return (
        <div>
            <a className="menu-link menu-bar-link" aria-haspopup="true">1. Multilevel megamenu</a>
                
            <ul className="mega-menu mega-menu--multiLevel">
                <li>
                    <a href="javascript:void(0);" className="menu-link mega-menu-link" aria-haspopup="true">1.1 Flyout
                        link</a>
                    <ul className="menu menu-list">
                        <li>
                            <a href="/page" className="menu-link menu-list-link">1.1.1 Page link</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" className="menu-link menu-list-link"
                                aria-haspopup="true">1.1.2 Flyout link</a>
                            <ul className="menu menu-list">
                                <li>
                                    <a href="/page" className="menu-link menu-list-link">1.1.2.1 Page link</a>
                                </li>
                                <li>
                                    <a href="/page" className="menu-link menu-list-link">1.1.2.2 Page link</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/page" className="menu-link menu-list-link">1.1.3 Page link</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);" className="menu-link mega-menu-link" aria-haspopup="true">1.2 Flyout
                        link</a>
                    <ul className="menu menu-list">
                        <li>
                            <a href="/page" className="menu-link menu-list-link">1.2.1 Page link</a>
                        </li>
                        <li>
                            <a href="/page" className="menu-link menu-list-link">1.2.2 Page link</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);" className="menu-link mega-menu-link" aria-haspopup="true">1.3 Flyout
                        link</a>
                    <ul className="menu menu-list">
                        <li>
                            <a href="/page" className="menu-link menu-list-link">1.3.1 Page link</a>
                        </li>
                        <li>
                            <a href="/page" className="menu-link menu-list-link">1.3.2 Page link</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/page" className="menu-link mega-menu-link">1.4 Page link</a>
                </li>
                <li className="mobile-menu-back-item">
                    <a href="javascript:void(0);" className="menu-link mobile-menu-back-link">Back</a>
                </li>
            </ul>
        </div>
    )
}