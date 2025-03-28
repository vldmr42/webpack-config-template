import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";

import { BuildOptions } from "./types/types";

export function buildLoaders(
    buildOptions: BuildOptions
): ModuleOptions["rules"] {
    const isDev = buildOptions.mode === "development";

    const cssModuleLoader = {
        loader: "css-loader",
        options: {
            modules: {
                namedExport: false,
                localIdentName: isDev
                    ? "[path][name]__[local]--[hash:base64:5]"
                    : "[hash:base64:8]",
            },
        },
    };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            cssModuleLoader,
            // Translates CSS into CommonJS
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
    };

    // TS LOADER CONFIG IN CASE PROBLEMS WITH SWC
    // const tsLoader = {
    //     test: /\.tsx?$/,
    //     use: [
    //         {
    //             loader: 'ts-loader',
    //             options: {
    //                 getCustomTransformers: () => ({
    //                     before: [isDev && ReactRefreshTypeScript()].filter(
    //                         Boolean
    //                     ),
    //                 }),
    //                 transpileOnly: isDev,
    //             },
    //         },
    //     ],
    //     exclude: /node_modules/,
    // };

    const swcLoader = {
        test: /\.[jt]sx?$/,
        exclude: /(node_modules)/,
        use: {
            // `.swcrc` can be used to configure swc
            loader: "swc-loader",
            options: {
                jsc: {
                    transform: {
                        react: {
                            runtime: "automatic",
                            development: isDev,
                            refresh: isDev,
                        },
                    },
                },
            },
        },
    };

    const svgLoader = {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: "@svgr/webpack",
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: "convertColors",
                                params: {
                                    currentColor: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    };

    return [assetLoader, scssLoader, swcLoader, svgLoader];
}
