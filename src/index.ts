import { type AstroIntegration } from 'astro'
import Windicss, { type UserOptions } from 'vite-plugin-windicss'

interface WindicssConfig extends UserOptions {
  astro: {
    /**
     *  Whether to auto import Windicss
     *  @default true
     */
    autoImport?: boolean
  }
}

export default function WindicssIntegration(option?: WindicssConfig): AstroIntegration {
  return {
    name: 'astro-windicss',
    hooks: {
      'astro:config:setup': ({ updateConfig, injectScript }) => {
        /** https://windicss.org/integrations/vite.html#scanning */
        const windiPlugin = Windicss({
          scan: {
            include: ['src/**/*.{vue,html,jsx,tsx,astro}'],
            exclude: ['node_modules', '.git']
          },
          ...option
        })
        updateConfig({
          vite: { plugins: [windiPlugin] }
        })
        if (option?.astro?.autoImport ?? true) {
          injectScript('page-ssr', `import 'virtual:windi.css';`)
        }
      }
    }
  }
}
