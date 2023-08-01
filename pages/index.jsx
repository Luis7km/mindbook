import React from 'react';
import MainContent from '@/components/MainContent/mainContent';
import Layout from '../components/Layout/layout'
import { Main } from 'next/document';
export default function HomePage() {
    return (
        <Layout>
            <MainContent/>
        </Layout>
    )
}