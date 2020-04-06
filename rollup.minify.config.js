import uglify from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
    input: 'src/leaflet.ellipse.js',
    output: {
        file: 'leaflet.ellipse.min.js',
        format: 'iife'
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        }),
        uglify()
    ]
}