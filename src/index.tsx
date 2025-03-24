import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from '@/app/App';
import { LazyAbout } from '@/pages/about/About.lazy';
import { LazyShop } from '@/pages/shop/Shop.lazy';
import { Suspense } from 'react';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const RouterProvider = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route
                    path="/about"
                    element={
                        <Suspense fallback="Loading...">
                            <LazyAbout />
                        </Suspense>
                    }
                />
                <Route
                    path="/shop"
                    element={
                        <Suspense fallback="Loading...">
                            <LazyShop />
                        </Suspense>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>
);

const container = createRoot(root);

container.render(<RouterProvider />);
