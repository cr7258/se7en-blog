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
  {
    name: 'Observability',
    opensources: [
      {
        name: 'Odigos',
        desc: '分布式跟踪，无需更改代码。 🚀 使用 OpenTelemetry 和 eBPF 即时监控任何应用程序。',
        logo: '/img/opensource/observability/odigos.png',
        href: 'https://odigos.io/',
      },
    ],
  },
  {
    name: '远程开发',
    opensources: [
      {
        name: 'DevPod',
        desc: 'Codespaces 的开源版本，可以在 Docker，Kubernetes，公有环境中创建可以重写的开发环境，支持任何 IDE。',
        logo: '/img/opensource/remote-develop/devpod.png',
        href: 'https://devpod.sh/',
      },
      {
        name: 'Development Containers',
        desc: '允许你使用容器作为功能齐全的开发环境，它可用于运行应用程序，分离使用代码库所需的工具、库或运行时，以及帮助进行持续集成和测试。DevPod 是基于 Development Containers 创建的。',
        logo: '/img/opensource/remote-develop/devcontainers.png',
        href: 'https://containers.dev/',
      },
    ],
  },
]
