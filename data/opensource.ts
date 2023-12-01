export interface OpenSource {
  name: string
  logo: string
  desc: string
  href: string
  tags?: string[]
}

export interface OpenSourceCategory {
  name: string
  opensources: OpenSource[]
}

export const openSourceData: OpenSourceCategory[] = [
  {
    name: '集成测试',
    opensources: [
      {
        name: 'Testcontainers',
        desc: 'Testcontainers 是一个库，它提供了简单轻量级的 API，用于在 Docker 容器内封装实际服务，以便启动本地开发和测试依赖项。',
        logo: '/img/opensource/test/testcontainers.png',
        href: 'https://testcontainers.com/',
      },
    ],
  },
  {
    name: 'WebAssembly',
    opensources: [
      {
        name: 'WasmEdge',
        desc: 'WasmEdge 是一个轻量级、高性能且可扩展的 WebAssembly 运行时，适用于云原生、边缘和去中心化应用程序。',
        logo: '/img/opensource/webassembly/wasmedge.png',
        href: 'https://wasmedge.org/docs/',
      },
    ],
  },
]
