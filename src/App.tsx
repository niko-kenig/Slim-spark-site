import type { MouseEvent, ReactElement } from 'react'
import { useEffect, useRef, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  BookOpen,
  Brain,
  Heart,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Utensils,
} from 'lucide-react'
import buttonIcon from './assets/button_icon copy.png'

type FeatureCard = {
  title: string
  description: string
  icon: LucideIcon
  iconBgClassName: string
}

type StepCard = {
  step: string
  title: string
  description: string
  icon: LucideIcon
  iconBgClassName: string
}

const featureCards: FeatureCard[] = [
  {
    title: 'Работа с эмоциями',
    description: 'Узнаете почему едите когда не голодны — и что с этим делать',
    icon: Brain,
    iconBgClassName: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Осознанное питание',
    description: 'Никаких запрещённых продуктов. Едите всё — просто иначе',
    icon: Utensils,
    iconBgClassName: 'from-orange-500 to-orange-600',
  },
  {
    title: 'Забота о себе',
    description:
      'Впервые за долгое время почувствуете что ваше тело — не враг',
    icon: Heart,
    iconBgClassName: 'from-pink-500 to-pink-600',
  },
  {
    title: 'Без спорта',
    description: 'Ни одной тренировки. Серьёзно.',
    icon: Sparkles,
    iconBgClassName: 'from-teal-500 to-teal-600',
  },
]

const steps: StepCard[] = [
  {
    step: '01',
    title: 'Консультация',
    description:
      'Расскажите нам всё — без осуждения. Мы поймём вашу ситуацию и объясним как именно вам помочь.',
    icon: MessageCircle,
    iconBgClassName: 'from-blue-500 to-blue-600',
  },
  {
    step: '02',
    title: 'Работа с эмоциями',
    description: 'Вы поймёте почему срывались раньше. И это изменит всё.',
    icon: BookOpen,
    iconBgClassName: 'from-purple-500 to-purple-600',
  },
  {
    step: '03',
    title: 'Формирование привычек',
    description:
      'Маленькие изменения каждый день — без насилия над собой и без чувства вины.',
    icon: Utensils,
    iconBgClassName: 'from-orange-500 to-orange-600',
  },
  {
    step: '04',
    title: 'Достижение результата',
    description:
      'Вес уходит. И не возвращается. Потому что вы изменились изнутри.',
    icon: TrendingUp,
    iconBgClassName: 'from-teal-500 to-teal-600',
  },
]

const appLink = 'https://app.slim-spark.ru'
const telegramLink = 'https://t.me/Slim_Spark'
const imageBasePath = `${import.meta.env.BASE_URL}image/`

const ctaClassName =
  'inline-flex items-center justify-center rounded-xl bg-[#F97316] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#EA580C]'
const headerCtaClassName =
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-[#F97316] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#EA580C] md:text-base'
const headingGradientClassName =
  'bg-gradient-to-r from-[#8A5A3B] via-[#9A6745] to-[#AD7852] bg-clip-text text-transparent'

const TELEGRAM_HINT_DISPLAY_MS = 2600

export const App = (): ReactElement => {
  const [isTelegramHintOpen, setIsTelegramHintOpen] = useState(false)
  const telegramHintTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  )

  const openTelegramInNewTab = () => {
    window.open(telegramLink, '_blank', 'noopener,noreferrer')
  }

  const finishTelegramHint = () => {
    if (telegramHintTimerRef.current !== null) {
      clearTimeout(telegramHintTimerRef.current)
      telegramHintTimerRef.current = null
    }
    setIsTelegramHintOpen(false)
    openTelegramInNewTab()
  }

  const startTelegramHint = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (telegramHintTimerRef.current !== null) {
      clearTimeout(telegramHintTimerRef.current)
    }
    setIsTelegramHintOpen(true)
    telegramHintTimerRef.current = setTimeout(() => {
      telegramHintTimerRef.current = null
      setIsTelegramHintOpen(false)
      openTelegramInNewTab()
    }, TELEGRAM_HINT_DISPLAY_MS)
  }

  useEffect(() => {
    return () => {
      if (telegramHintTimerRef.current !== null) {
        clearTimeout(telegramHintTimerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isTelegramHintOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isTelegramHintOpen])

  useEffect(() => {
    if (!isTelegramHintOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        finishTelegramHint()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isTelegramHintOpen])

  return (
    <div className="bg-[#FFF8F0] text-[#08060D]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E8DCCB] bg-gradient-to-r from-[#FFF6EC]/95 via-[#FFF1E2]/95 to-[#ECFBF7]/95 backdrop-blur">
        <div className="mx-auto w-full max-w-[1380px] px-4 py-2 md:px-8">
          <div className="flex items-center justify-between gap-3 md:hidden">
            <a
              className="flex items-center py-1 text-base font-semibold tracking-tight text-[#08060D]"
              href="#top"
            >
              <img
                src={`${imageBasePath}logo_%20.png`}
                alt="Slim-Spark"
                className="h-14 w-auto object-contain md:h-16"
              />
            </a>
            <a
              className={headerCtaClassName}
              href={appLink}
              target="_blank"
              rel="noreferrer"
            >
              Войти в приложение
            </a>
          </div>

          <div className="hidden items-center justify-between gap-3 md:flex md:flex-nowrap">
            <a
              className="flex items-center py-1 text-base font-semibold tracking-tight text-[#08060D]"
              href="#top"
            >
              <img
                src={`${imageBasePath}logo_%20.png`}
                alt="Slim-Spark"
                className="h-16 w-auto object-contain"
              />
            </a>
            <nav className="flex items-center justify-between gap-6">
              <a
                className="text-sm font-medium text-[#6B6375] transition hover:text-[#F97316] md:text-base"
                href="#about"
              >
                О программе
              </a>
              <a
                className="text-sm font-medium text-[#6B6375] transition hover:text-[#F97316] md:text-base"
                href="#how-it-works"
              >
                Как это работает
              </a>
              <a
                className={headerCtaClassName}
                href={appLink}
                target="_blank"
                rel="noreferrer"
              >
                Войти в приложение
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main
        id="top"
        className="mx-auto flex w-full max-w-[1380px] scroll-mt-24 flex-col gap-6 px-4 pb-8 pt-36 md:gap-8 md:px-8 md:pb-12 md:pt-40 lg:pt-28"
      >
        <section className="animate-fade-up rounded-3xl border border-[#E5E4E7] bg-[#FFFFF0] px-6 py-20 shadow-sm md:px-10">
          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            <div className="animate-fade-up animate-delay-2 order-1 mx-auto w-full max-w-[520px] rounded-[2rem] bg-gradient-to-br from-[#FFF3E0] via-[#FFE7D1] to-[#FBEBDD] p-3 shadow-[0_28px_56px_rgba(40,24,10,0.18)] lg:order-2">
              <img
                src={`${imageBasePath}main.png`}
                alt="Иллюстрация программы Slim-Spark"
                className="h-auto w-full rounded-[1.35rem] border border-white/80 shadow-[0_24px_52px_rgba(8,6,13,0.24)] transition duration-500 ease-out hover:-translate-y-1 hover:scale-[1.01]"
              />
            </div>

            <div className="order-2 flex h-full flex-col lg:order-1">
              <div>
                <span className="animate-fade-up inline-block whitespace-nowrap rounded-full border border-[#FDBA74] bg-[#FFF7ED] px-4 py-2 text-sm font-medium leading-tight text-[#C2410C] md:px-5 md:text-[1.3125rem]">
                  ✦ Ем всё что хочу — и худею
                </span>
                <h1
                  className={`animate-fade-up animate-delay-1 mt-5 text-3xl font-bold leading-tight md:text-5xl ${headingGradientClassName}`}
                >
                  Вы устали бороться с собой.
                </h1>
                <p className="animate-fade-up animate-delay-2 mt-4 text-xl font-semibold text-[#EA580C] md:text-2xl">
                  Пора начать жить.
                </p>
                <p className="animate-fade-up animate-delay-3 mt-8 max-w-3xl text-base leading-relaxed text-[#6B6375] md:text-lg">
                  Вы снова сорвались — и снова винили себя. Мы знаем это
                  чувство. Slim-Spark — это не диета. Это первая программа где
                  вам не нужно себя ломать.
                </p>
                <div className="animate-fade-up animate-delay-3 mt-3 max-w-3xl rounded-2xl border border-[#F6D7B5] bg-[#FFF4E8] px-5 py-4 text-base leading-relaxed text-[#7A4E30] md:text-lg">
                  <p>
                    Напиши нам - мы живые люди и будем рады познакомиться.
                  </p>
                  <div className="mt-4 flex flex-col gap-4 sm:flex-row">
                    <a
                      className={ctaClassName}
                      href={telegramLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={startTelegramHint}
                    >
                      <img
                        src={buttonIcon}
                        alt=""
                        aria-hidden="true"
                        className="mr-2 h-5 w-5 object-contain"
                      />
                      Хочу попробовать
                    </a>
                  </div>
                </div>
              </div>
              <blockquote className="animate-fade-up animate-delay-5 mt-5 max-w-3xl rounded-2xl border border-[#EEDCC7] bg-[#FFF9F2] px-5 py-4 text-[#7A5A3B] shadow-sm">
                <p className="text-sm leading-relaxed md:text-base">
                  "Безумие — делать одно и то же снова и снова, ожидая другого
                  результата."
                </p>
                <footer className="mt-2 text-sm font-semibold text-[#9A6745] md:text-base">
                  — Альберт Эйнштейн
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="animate-fade-up animate-delay-1 scroll-mt-28 rounded-3xl border border-[#E5E4E7] bg-[#FFF8F0] px-6 py-20 shadow-sm md:px-10"
        >
          <h2 className={`text-2xl font-bold md:text-4xl ${headingGradientClassName}`}>
            О программе
          </h2>
          <p className="mt-5 max-w-4xl text-[#6B6375] md:text-lg">
            Вы уже пробовали диеты. Зал. Подсчёт калорий. И каждый раз вес
            возвращался. Потому что никто не спрашивал — почему вы едите. Мы
            спрашиваем.
          </p>
          <p className="mt-4 max-w-4xl text-[#6B6375] md:text-lg">
            Мы работаем с причиной, а не со следствием. Результаты наших
            участников держатся годами — потому что они меняют отношения с
            едой, а не просто садятся на диету.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {featureCards.map((card) => (
              <article
                key={card.title}
                className="group rounded-2xl border border-[#E5E4E7] bg-[#FFFFF0] p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(15,23,42,0.14)]"
              >
                <div
                  className={`inline-flex rounded-xl bg-gradient-to-br p-3 text-white shadow-md transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-[0_10px_22px_rgba(15,23,42,0.26)] ${card.iconBgClassName}`}
                >
                  <card.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-3 text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-[#6B6375]">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="animate-fade-up animate-delay-2">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl shadow-[0_18px_34px_rgba(15,23,42,0.16)]">
              <img
                src={`${imageBasePath}img1.jpg`}
                alt="Полезные продукты"
                className="h-[250px] w-full object-cover transition duration-500 ease-out hover:scale-[1.03] md:h-[280px]"
              />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-[0_18px_34px_rgba(15,23,42,0.16)]">
              <img
                src={`${imageBasePath}img2.jpg`}
                alt="Поддержка в процессе программы"
                className="h-[250px] w-full object-cover transition duration-500 ease-out hover:scale-[1.03] md:h-[280px]"
              />
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="animate-fade-up animate-delay-2 scroll-mt-28 rounded-3xl border border-[#E5E4E7] bg-[#FFFFF0] px-6 py-20 shadow-sm md:px-10"
        >
          <h2 className={`text-2xl font-bold md:text-4xl ${headingGradientClassName}`}>
            Как это работает
          </h2>
          <p className="mt-4 text-[#6B6375] md:text-lg">
            Просто. Без стресса. Шаг за шагом.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {steps.map((step) => (
              <article
                key={step.step}
                className="group relative rounded-2xl border border-[#E5E4E7] bg-[#FFFFF0] p-5 pt-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(15,23,42,0.14)]"
              >
                <div className="absolute -top-4 left-4 inline-flex min-w-12 justify-center rounded-xl bg-[#F1F2F6] px-3 py-2 text-xl font-semibold tracking-wide text-[#4B5563] shadow-sm">
                  {step.step}
                </div>
                <div
                  className={`mt-1 inline-flex rounded-xl bg-gradient-to-br p-3 text-white shadow-md transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-[0_10px_22px_rgba(15,23,42,0.26)] ${step.iconBgClassName}`}
                >
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-[#6B6375]">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="animate-fade-up animate-delay-3 rounded-3xl border border-[#E5E4E7] bg-[#FFF8F0] px-6 py-20 text-center shadow-sm md:px-10">
          <div className="mx-auto inline-flex items-center rounded-full bg-[#F7EEDC] px-5 py-2 text-sm font-semibold text-[#EA580C]">
            Реальные истории
          </div>
          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#08060D] md:text-6xl">
            Истории успеха
            <span
              className={`mt-2 block text-4xl md:text-6xl ${headingGradientClassName}`}
            >
              наших клиентов
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[#6B6375] md:text-lg">
            Первые участники программы уже начинают свой путь. Скоро здесь
            появятся их истории.
          </p>
          <p className="mt-4 text-lg font-semibold text-[#F97316] md:text-xl">
            Результаты появляются уже в первые недели
          </p>
        </section>

        <section className="animate-fade-up animate-delay-4 rounded-3xl border border-[#E5E4E7] bg-[#FFFFF0] px-6 py-20 shadow-sm md:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2
                className={`text-2xl font-bold md:text-4xl ${headingGradientClassName}`}
              >
                Начните прямо сейчас — это займёт 1 минуту
              </h2>
              <p className="mt-5 max-w-xl text-[#6B6375] md:text-lg">
                Дневник питания, уроки, замеры и живая поддержка наставника —
                всё в одном месте. Открывается в браузере телефона, ничего
                скачивать не нужно.
              </p>
              <a
                className={`${ctaClassName} mt-6`}
                href={appLink}
                target="_blank"
                rel="noreferrer"
              >
                Открыть приложение →
              </a>
            </div>
            <aside className="rounded-2xl border border-[#E5E4E7] bg-[#FFFFF0] p-6">
              <h3 className="text-xl font-semibold">Остались вопросы?</h3>
              <p className="mt-2 text-[#6B6375]">
                Напишите нам — ответим в течение часа
              </p>
              <ul className="mt-5 space-y-3 text-[#6B6375]">
                <li>Расскажем как работает программа</li>
                <li>Ответим на любые вопросы честно</li>
                <li>Поможем понять подходит ли вам</li>
              </ul>
              <a
                className={`${ctaClassName} mt-6 w-full`}
                href={telegramLink}
                target="_blank"
                rel="noreferrer"
                onClick={startTelegramHint}
              >
                <img
                  src={buttonIcon}
                  alt=""
                  aria-hidden="true"
                  className="mr-2 h-5 w-5 object-contain"
                />
                Написать нам
              </a>
            </aside>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E5E4E7] bg-[#FFFFF0]">
        <div className="mx-auto flex w-full max-w-[1380px] flex-col gap-4 px-4 py-8 text-sm text-[#6B6375] md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <img
              src={`${imageBasePath}logo_%20.png`}
              alt="Slim-Spark"
              className="h-12 w-auto object-contain"
            />
            <p className="mt-1">
              Худеем без диет и зала. Работаем с причиной, а не следствием.
            </p>
            <p className="mt-2 text-xs text-[#8B8396]">
              Телефон и email обновим реальными данными перед запуском.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              className="transition hover:text-[#F97316]"
              href="https://vk.com"
              target="_blank"
              rel="noreferrer"
            >
              VK
            </a>
            <a
              className="transition hover:text-[#F97316]"
              href={telegramLink}
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
            <a
              className="transition hover:text-[#F97316]"
              href="https://slim-spark.ru"
              target="_blank"
              rel="noreferrer"
            >
              slim-spark.ru
            </a>
          </div>
        </div>
      </footer>

      {isTelegramHintOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#08060D]/45 backdrop-blur-[2px] transition-opacity"
            aria-label="Открыть Telegram сейчас"
            onClick={finishTelegramHint}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="telegram-hint-title"
            aria-describedby="telegram-hint-desc"
            className="relative z-10 w-full max-w-md rounded-3xl border border-[#E8DCCB] bg-gradient-to-br from-[#FFFFF0] via-[#FFF8F0] to-[#FFF4E8] px-6 py-8 text-left shadow-[0_28px_56px_rgba(40,24,10,0.22)]"
            onClick={(event) => event.stopPropagation()}
          >
            <p
              id="telegram-hint-title"
              className="text-xl font-semibold leading-snug text-[#08060D] md:text-2xl"
            >
              Напиши нам «Привет» 👋
            </p>
            <p
              id="telegram-hint-desc"
              className="mt-4 text-base leading-relaxed text-[#6B6375] md:text-lg"
            >
              Мы живые люди — ответим быстро и без скриптов
            </p>
          </div>
        </div>
      ) : null}
    </div>
  )
}
