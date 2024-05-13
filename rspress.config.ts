import * as path from 'path';
import { defineConfig } from 'rspress/config';
import { pluginPreview } from '@rspress/plugin-preview';
import { pluginPlayground } from '@rspress/plugin-playground';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Rspress-preview',
  description: 'hello',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  markdown: {
    // mdxRs: false,
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
  builderConfig: {
    source: {
      // preEntry: ['/Users/appe/Documents/demos/rspress-preview-demo/node_modules/@rspress/plugin-container-syntax/container.css'],
    },
    dev: {
      writeToDisk: true,
    },
    tools: {
      rspack(config) {
        // config.plugins.push(new RsdoctorRspackPlugin());
        config.optimization.minimize = false;
        return config;
      },
    },
  },
  plugins: [
    // pluginPreview({
    //   previewMode: 'iframe',
    // }),
  ],
});
