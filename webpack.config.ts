import path from "path";
import webpack from "webpack";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

import { buildWebpack } from "./config/build/buildWebpack";
import {
    BuildMode,
    BuildPaths,
    BuildPlatform,
} from "./config/build/types/types";

interface EnvVariables {
    mode: BuildMode;
    port: number;
    analyzer?: boolean;
    platform: BuildPlatform;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, "build"),
        entry: path.resolve(__dirname, "src", "index.tsx"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
        public: path.resolve(__dirname, "public"),
    };

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? "development",
        paths: paths,
        analyzer: env.analyzer,
        platform: env.platform ?? "desktop",
    });

    return config;
};
