import Content from "../Content/Content";
import Header from "../Header/Header";
import React from 'react'

type PageProps = {
    children: React.ReactNode;
    title: string;
}

const Page = ({children, title}: PageProps) => {
    return (
        <main className="page">
            <Header title={title}/>
            <Content>
                {children}
            </Content>
        </main>
    )
}

export default Page