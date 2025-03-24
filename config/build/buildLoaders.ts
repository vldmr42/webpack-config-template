import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/types';

export function buildLoaders(
    buildOptions: BuildOptions
): ModuleOptions['rules'] {
    const isDev = buildOptions.mode === 'development';

    const cssModuleLoader = {
        loader: 'css-loader',
        options: {
            modules: {
                namedExport: false,
                localIdentName: isDev
                    ? '[path][name]__[local]--[hash:base64:5]'
                    : '[hash:base64:8]',
            },
        },
    };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssModuleLoader,
            // Translates CSS into CommonJS
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [scssLoader, tsLoader];
}
