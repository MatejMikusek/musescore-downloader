import typescript from "rollup-plugin-typescript"
import fs from "fs"
import { version } from "./package.json"

let bannerText = fs.readFileSync("./src/meta.js", "utf-8")
bannerText = bannerText.replace("%VERSION%", version)

export default {
    input: "src/main.ts",
    output: {
        file: "dist/main.js",
        format: "iife",
        banner: bannerText,
        sourcemap: false,
    },
    plugins: [
        typescript({
            target: "ES6",
            sourceMap: false,
            lib: [
                "ES6",
                "dom"
            ],
        })
    ]
}
