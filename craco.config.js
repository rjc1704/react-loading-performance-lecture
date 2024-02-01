const CracoAlias = require("craco-alias");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "tsconfig",
                tsConfigPath: "tsconfig.paths.json"
            }
        }
    ],
    webpack: {
        plugins: isProduction ? [] : [new BundleAnalyzerPlugin()]
    }
};
