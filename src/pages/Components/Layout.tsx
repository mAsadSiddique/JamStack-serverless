import React, { ReactNode } from 'react';
import Header from './Header';

type LayoutProps = {
    children: ReactNode,
    HeaderTitle: string;
}

function Layout({ children, HeaderTitle }: LayoutProps) {
    return (
        <div>
            <Header title={HeaderTitle} />
            {children}
        </div>
    )
}

export default Layout
