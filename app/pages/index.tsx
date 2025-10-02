import { defineComponent } from 'vue'

import Header from '~/components/Header'

// 背景装饰组件 - 增强视觉效果
const BackgroundDecorations = () => (
  <>
    {/* 主要装饰球 */}
    <div class="absolute top-1/2 left-1/12 size-20 animate-pulse rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 opacity-80 blur-sm sm:size-32 lg:left-1/7 lg:size-90" />
    <div class="absolute top-1/2 right-1/12 size-20 animate-pulse rounded-full bg-gradient-to-br from-rose-400 to-rose-600 opacity-80 blur-sm sm:size-32 lg:right-1/7 lg:size-90" />

    {/* 次要装饰元素 */}
    <div class="absolute top-1/4 left-1/4 size-12 animate-bounce rounded-full bg-gradient-to-br from-purple-400 to-purple-600 opacity-60 blur-sm sm:size-16 lg:size-24" />
    <div class="absolute right-1/4 bottom-1/4 size-8 animate-pulse rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 opacity-50 blur-sm sm:size-12 lg:size-16" />

    {/* 星光效果 */}
    <div class="absolute top-1/6 right-1/3 size-2 animate-ping rounded-full bg-white opacity-75" />
    <div class="absolute bottom-1/3 left-1/5 size-1 animate-ping rounded-full bg-white opacity-60" />
    <div class="absolute top-2/3 right-1/6 size-1.5 animate-ping rounded-full bg-white opacity-50" />
  </>
)

// 背景遮罩 - 增强层次感
const BackgroundMask = () => (
  <div class="absolute inset-0 size-full bg-gradient-to-br from-black/90 via-black/95 to-black/90 backdrop-blur-3xl" />
)

// 头像组件 - 增强交互效果
const ProfileAvatar = () => (
  <div class="group relative">
    <div class="absolute inset-0 rounded-4xl bg-gradient-to-br from-cyan-400/20 to-rose-400/20 blur-xl transition-all duration-500 group-hover:blur-2xl" />
    <img
      src="/images/avatar.jpg"
      alt="Hayes的头像"
      class="relative h-64 w-auto -rotate-3 rounded-4xl border-2 border-white/10 bg-cover bg-center shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-6 sm:h-80 lg:h-96"
      loading="lazy"
    />
  </div>
)

// 技能标签组件
const SkillTag = ({ children, color = 'cyan' }: { children: any; color?: string }) => {
  const colorClasses = {
    cyan: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    rose: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    emerald: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    purple: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  }

  return (
    <span
      class={`inline-block rounded-full border px-3 py-1 text-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${colorClasses[color] || colorClasses.cyan}`}
    >
      {children}
    </span>
  )
}

// 社交链接组件
const SocialLink = ({ href, children, icon }: { href: string; children: any; icon?: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    class="group relative inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-rose-500/10 px-6 py-3 text-cyan-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:from-cyan-500/20 hover:to-rose-500/20 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-500/25"
    aria-label={`访问 ${children}`}
  >
    <span class="relative z-10">{children}</span>
    <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 to-rose-500/0 transition-all duration-300 group-hover:from-cyan-500/5 group-hover:to-rose-500/5" />
  </a>
)

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return () => (
      <main class="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white">
        {/* 背景装饰 */}
        <BackgroundDecorations />
        <BackgroundMask />

        {/* 页面头部 */}
        <Header />

        {/* 主要内容区域 */}
        <section class="relative z-10 container mx-auto px-4 pt-20 pb-12 sm:px-6 lg:px-8">
          <div class="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-16">
            {/* 头像区域 */}
            <div class="order-1 flex-shrink-0 lg:order-2">
              <ProfileAvatar />
            </div>

            {/* 内容区域 */}
            <div class="order-2 flex-1 space-y-8 text-center lg:order-1 lg:text-left">
              {/* 问候语 */}
              <header class="space-y-4">
                <h1 class="text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
                  <span class="block text-white/90">你好，我是</span>
                  <span class="block animate-pulse bg-gradient-to-r from-cyan-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
                    Hayes
                  </span>
                </h1>
                <h2 class="text-2xl font-semibold text-white/80 sm:text-3xl lg:text-4xl">
                  很高兴认识你！
                </h2>
              </header>

              {/* 个人介绍 */}
              <div class="space-y-6">
                <p class="max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl lg:text-2xl">
                  我是一名充满热情的软件开发者，专注于创建美观且功能强大的Web应用程序。
                  我专精于前端开发，同时也具备丰富的后端技术经验。
                </p>

                {/* 技能展示 */}
                <div class="space-y-6">
                  <h3 class="mb-4 text-xl font-semibold text-white/90 sm:text-2xl">技术栈</h3>

                  <div class="space-y-4">
                    <div>
                      <h4 class="mb-2 text-lg font-medium text-cyan-300">前端技术</h4>
                      <div class="flex flex-wrap gap-2">
                        <SkillTag color="cyan">React</SkillTag>
                        <SkillTag color="cyan">Vue</SkillTag>
                        <SkillTag color="cyan">TypeScript</SkillTag>
                        <SkillTag color="cyan">Tailwind CSS</SkillTag>
                      </div>
                    </div>

                    <div>
                      <h4 class="mb-2 text-lg font-medium text-rose-300">后端技术</h4>
                      <div class="flex flex-wrap gap-2">
                        <SkillTag color="rose">Node.js</SkillTag>
                        <SkillTag color="rose">Express</SkillTag>
                        <SkillTag color="rose">Python</SkillTag>
                        <SkillTag color="rose">REST APIs</SkillTag>
                      </div>
                    </div>

                    <div>
                      <h4 class="mb-2 text-lg font-medium text-emerald-300">开发工具</h4>
                      <div class="flex flex-wrap gap-2">
                        <SkillTag color="emerald">Git</SkillTag>
                        <SkillTag color="emerald">Docker</SkillTag>
                        <SkillTag color="emerald">Vite</SkillTag>
                        <SkillTag color="emerald">Webpack</SkillTag>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 个人爱好 */}
                <p class="max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">
                  我热爱学习新技术，享受与他人合作解决具有挑战性的问题。
                  当我不在编程时，你可以发现我在探索新音乐、徒步旅行或阅读科技趋势。
                </p>
              </div>

              {/* 社交链接 */}
              <div class="pt-8">
                <h3 class="mb-6 text-xl font-semibold text-white/90">联系方式</h3>
                <div class="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                  <SocialLink href="https://github.com/hayes">GitHub</SocialLink>
                  <SocialLink href="mailto:hayes@example.com">邮箱</SocialLink>
                  <SocialLink href="https://linkedin.com/in/hayes">LinkedIn</SocialLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 底部装饰 */}
        <div class="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </main>
    )
  },
})
