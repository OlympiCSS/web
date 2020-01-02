module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          reportFiles: ['src/**/*.{ts,tsx}']
        }
      }
    ]
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
