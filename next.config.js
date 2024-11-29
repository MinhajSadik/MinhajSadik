const nextConfig = {
    reactStrictMode: true,
    
    typescript: {
      ignoreBuildErrors: true,
    },
    distDir: "build",
    output: "export",
    images: {
      unoptimized: true,
    },
  };

  module.exports = nextConfig;